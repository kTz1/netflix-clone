import React, { useState, useEffect } from 'react';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';

import './widgetSm.scss';

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get('/users?new=true', {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzVmNjliOGY0NWU3MWI2MmViMWRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTUzNjQ2NywiZXhwIjoxNjYzMDk0MDY3fQ.wd_61u2x4B-clB0PzxeqMw2EVVmPvN1rHNh_c5AyLLw'
                    }
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {newUsers.map((user, i) =>(
                    <li className='widgetSmItem' key={i}>
                        <img 
                            src={user.profilePic || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
                            alt='' 
                            className='widgetSmImg' 
                        />
                        <div className='wigetSmUser'>
                            <span className='widgetSmUsername'>{user.username}</span>
                        </div>
                        <button className='widgetSmBtn'>
                            <Visibility className='widgetSmIcon' />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
