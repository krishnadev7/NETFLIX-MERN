import React, { useEffect, useMemo, useState } from 'react';
import Charts from '../../components/charts/Charts';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import {userData} from '../../dummyData'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import axios from 'axios';

export default function Home() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmQ2YTVkMDdmZTE0MmEzY2ZhODZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA1Mjg1NCwiZXhwIjoxNjQ0NDg0ODU0fQ.aH7k4rIF4n7A9umFl7artDuVzvB4er9hC0_tVP0jqqA',
          },
        });
        res.data.map(item =>
          setUserStats(prev => [
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
  // console.log(userStats);
  return <div className='home'>
      <FeaturedInfo />
      <Charts data={userStats} title='User Analytics' grid datakey="New User"/>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
  </div>;
}
