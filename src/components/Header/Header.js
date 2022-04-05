import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink'


const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand "><span className='font'>Pearl</span></a>
                    <form className="d-flex">
                        <div className='nav fs-5'>
                            
                     
                            <ActiveLink to="/">Home</ActiveLink>
                      
                            <ActiveLink to="/review">Reviews</ActiveLink>
                            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
                      
                            <ActiveLink to="blogs">Blogs</ActiveLink>
                            <ActiveLink to="about">About </ActiveLink>
                        
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;