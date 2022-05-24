import React from 'react';
import useParts from './../../hooks/useParts';
import ManageProductTable from './ManageProductTable';
import Loading from './../Shared/Loading/Loading';

const ManageProducts = () => {
    const [isLoading, part, refetch] = useParts();
    if(isLoading){
        return <Loading />
    }
    return (
        <div className='m-5'>
      <h1 className="text-4xl font-extrabold text-bold text-center">
        Manage All Parts
      </h1>
     
      <table className="table mt-5  w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Parts Name</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {part.map((item, index) => (
          <ManageProductTable key={item._id} refetch={refetch}  index={index} item={item}></ManageProductTable>
        ))}
        </tbody>
      </table>
     
    </div>
    );
};

export default ManageProducts;