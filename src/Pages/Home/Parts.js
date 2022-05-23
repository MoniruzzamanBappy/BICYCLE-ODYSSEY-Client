import React from 'react';
import Part from './Part';
import useParts from './../../hooks/useParts';
import { useNavigate } from 'react-router-dom';

const Parts = () => {
    const [part] = useParts()
    const navigate = useNavigate()
    const handleSeeAll = ()=> {
        navigate('/parts')
    }
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-extrabold text-bold text-center'>All Parts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

            {part.slice(0,6).map(item=><Part key={item._id} item={item}></Part>)}
            </div>

            <div className='flex justify-center'>
            <button onClick={handleSeeAll} className="btn my-5 btn-secondary">
            See All Parts
          </button>
            </div>
            
        </div>
    );
};

export default Parts;