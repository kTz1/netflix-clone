import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';

import './home.scss';


const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? '?type=' + type: ''}${genre ? '&genre=' + genre: ''}`, {
                    headers :{
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzVmNjliOGY0NWU3MWI2MmViMWRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTUzNjQ2NywiZXhwIjoxNjYzMDk0MDY3fQ.wd_61u2x4B-clB0PzxeqMw2EVVmPvN1rHNh_c5AyLLw'
                    }
                });
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, i) => (
                <List list={list} key={i} />
            ))}
        </div>
    );
};

export default Home;


