import React, { useState, useEffect, useMemo } from 'react';
import FeaturedInfo from '../../components/feature-info/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widget-sm/WidgetSm';
import WidgetLg from '../../components/widget-lg/WidgetLg';
import axios from 'axios';

import './home.scss';


export default function Home() {
    const MONTHS = useMemo(() => 
        [
            "Jan", 
            "Feb", 
            "Mar", 
            "Apr", 
            "May", 
            "Jun", 
            "Jul",
            "Aug", 
            "Sep", 
            "Oct", 
            "Nov", 
            "Dec"
        ], []
    );

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('/users/stats', {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzVmNjliOGY0NWU3MWI2MmViMWRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTUzNjQ2NywiZXhwIjoxNjYzMDk0MDY3fQ.wd_61u2x4B-clB0PzxeqMw2EVVmPvN1rHNh_c5AyLLw'
                    }
                });
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                })
                statsList.map((item) => 
                    setUserStats((prev) => [
                        ...prev, 
                        { name: MONTHS[item._id - 1], 'New User': item.total },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTHS]);

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart 
                data={userStats} 
                title='User Analytics' 
                grid 
                dataKey='New User' 
            />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
