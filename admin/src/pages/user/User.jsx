import React from 'react';
import { Link } from 'react-router-dom';
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons';

import './user.scss';


export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddBtn'>Create</button>                
                </Link>
                
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img 
                            src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                            alt='' 
                            className='userShowImg' 
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Becker</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck90</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>09.03.1990</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+1 123 456 78</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck90@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input 
                                    type='text' 
                                    placeholder='annabeck99' 
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input 
                                    type='text' 
                                    placeholder='Anna Becker' 
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input 
                                    type='text' 
                                    placeholder='annabeck90@gmail.com' 
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input 
                                    type='text' 
                                    placeholder='+1 123 456 78' 
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input 
                                    type='text' 
                                    placeholder='New York | USA' 
                                    className='userUpdateInput'
                                />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img 
                                    src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                                    alt=''
                                    className='userUpdateImg'
                                />
                                <label htmlFor='file'>
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input type='file' id='file' style={{ display: 'none' }} />
                            </div>
                            <button className='userUpdateBtn'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
