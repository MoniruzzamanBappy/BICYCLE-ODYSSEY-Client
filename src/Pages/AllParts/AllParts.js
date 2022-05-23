import React from "react";
import useParts from "../../hooks/useParts";
import Part from "./../Home/Part";
import Footer from './../Shared/Footer/Footer';

const AllParts = () => {
  const [part] = useParts();
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-bold text-center">
        All Parts
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
        {part.map((item) => (
          <Part key={item._id} item={item}></Part>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AllParts;
