import { useState, useEffect } from 'react';
import NetflixLogo from '../assets/NetflixLogo.png'
import { auth } from '../firebase/config';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import Hamburger from 'hamburger-react'

const Header = ({ user }) => {
    const [fixed, setFixed] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setFixed(true)
            } else{
                setFixed(false)
            }
        })
    })
    
    return (
            <div className={`header ${fixed && "fixed-header"}`}>
                <div className="navbar-wrap">
                    <Link to='/'>
                        <img src={NetflixLogo} alt="logo" className='header-logo'/>
                    </Link>
                    <nav className='navbar'>
                        <Link to='/'>Home</Link>
                        <Link to='/films'>Films</Link>
                    </nav>
                </div>
                <Tooltip className='tooltip' arrow title="Sign out">
                    <img onClick={() => auth.signOut()} src={user.photoURL} alt="avatar" className='avatar'/>
                </Tooltip>
                <div onClick={() => setMenu(!menu)} className='hamburger'>
                    <Hamburger color='#fff'/>
                </div>

                <div className={`mobile-navbar ${menu ? 'mobile-view' : ''}`}>
                <img onClick={() => auth.signOut()} src={user.photoURL} alt="avatar" className='avatar'/>
                    <Link to='/'>Home</Link>
                    <Link to='/films'>Films</Link>
                </div>
            </div>
    );
}

export default Header;