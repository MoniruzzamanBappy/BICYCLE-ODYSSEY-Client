import React from 'react';
import Part from './Part';
import useParts from './../../hooks/useParts';

const Parts = () => {
    const [part] = useParts()
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-extrabold text-bold text-center'>All Parts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

            {part.slice(0,6).map(item=><Part key={item._id} item={item}></Part>)}
            </div>
            
        </div>
    );
};

export default Parts;