import React from 'react';

const UpcomingEventsCard = ({ e }) => {
    const { image, title, location, price, date_time, available_seats } = e;

    return (
        <div>
            <div className="overflow-hidden shadow-lg shadow-gray-400 border-1 border-gray-600 rounded-lg transform transition 
            duration-500 hover:scale-105">
                <img className="w-full h-[200px] transform transition duration-500 hover:rotate-2 relative" src={image} alt="" />
                <p className="absolute top-2 right-2 bg-red-500 text-white rounded-md px-2 py-1">{date_time}</p>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl hover:text-red-500 cursor-pointer text-center mb-7">{title}</div>
                    <div className='flex justify-between'>
                        <div className="indicator">
                            <span className="indicator-item badge badge-primary left-20 font-bold text-white py-1">{price}</span>
                            <p className="text-gray-700"><span className='font-bold'>Platform:</span> {location}</p>
                        </div>
                        <p className="text-gray-700"><span className='font-bold'>Available Seats:</span> {available_seats}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventsCard;