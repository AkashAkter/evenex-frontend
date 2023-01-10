import React, { useEffect, useState } from 'react';
import UpcomingEventsCard from './UpcomingEventsCard';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-5'>Upcoming Events: {events.length}</h1>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8'>
                {
                    events.map(e => <UpcomingEventsCard
                        key={e.id}
                        e={e}
                    ></UpcomingEventsCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;