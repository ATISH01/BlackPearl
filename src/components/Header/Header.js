import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <div className='nav fs-5'>
                            <Link to="/">Home</Link>
                            <Link to="/review">Reviews</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="blogs">Blogs</Link>
                            <Link to="about">About</Link>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;