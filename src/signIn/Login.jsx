import { signInWithGoogle } from "../firebase/config";
import NetflixLogo from '../assets/NetflixLogo.png'

const Login = () => {
    return (
        <div className="login">
            <img className="login-logo" src={NetflixLogo} alt="logo" />
            <button className="login-btn" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
}

export default Login;