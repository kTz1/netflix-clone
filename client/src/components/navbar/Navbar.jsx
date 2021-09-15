import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const {dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='' />
                    <Link to='/' className='link'>
                        <span>Homepage</span>
                    </Link>
                    <Link to='/series' className='link'>
                        <span className='navbarMainLinks'>Series</span>
                    </Link>
                    <Link to='/movies' className='link'>
                        <span className='navbarMainLinks'>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src='https://www.usr.ro/wp-content/uploads/2021/01/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg' alt='' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;
