import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Logo from '../imgs/logo.png';
import codecrew from '../imgs/codecrew.png'
import AuthForm from "./Authform";

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/Authform');
    };

    return (
        <div className="navmain">
            <img src={Logo} alt="Logo" className="logo" />
            {auth ? (
                <ul className="navbar">
                    <li><Link to="/" className="linktry">Home</Link></li>
                    <li><Link to="/news" className="linktry">News</Link></li>
                    <li><Link to="/events" className="linktry">events</Link></li>
                    <li><Link to="/comunitypartners" className="linktry">Community partners</Link></li>
                    {/* <li><Link to="/members" className="linktry">Members</Link></li> */}
                    <li><Link to="/addinfo" className="linktry">Add news & events</Link></li>
                    <li><Link to="/profile" className="linktry">Profile</Link></li>
                    <li><Link onClick={logout} to="/Authform" className="linktry">Logout</Link></li>

                </ul>
            ) : (
                <AuthForm />
            )}
        </div>
    );
};

export default Navbar;
