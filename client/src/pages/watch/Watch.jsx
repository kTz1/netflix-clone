import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowBackIosOutlined } from '@material-ui/icons';

import './watch.scss';


export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className='watch'>
            <Link to='/'>
                <div className='back'>
                    <ArrowBackIosOutlined />
                        Home
                </div>
            </Link>
            <video 
                className='video' 
                autoPlay 
                progress='true'
                controls 
                src={movie.video} 
            />
        </div>
    )
}
