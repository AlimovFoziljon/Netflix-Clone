import Header from "../components/Header";
import Footer from "../components/Footer";
import Films from "../components/Films";
import Home from "../components/Home";
import {Routes, Route} from 'react-router-dom'

const Main = ({ user }) => {
    return (
        <div>
            <Header user={ user }/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/films" element={<Films />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default Main;