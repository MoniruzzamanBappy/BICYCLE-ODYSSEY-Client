import React from "react";
import Skeleton from "react-loading-skeleton";

const ReviewLoading = () => {
  const reviewCount = [1, 2, 3, 4, 5, 6];
  return (
    <>
     <h1 className="text-4xl text-zinc-400 mt-16 font-extrabold text-bold text-center">
        Reviews are loading
      </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
      {reviewCount.map((item) => (
        <>
          <div className="flex justify-center items-center border w-96 ">
            <div className="avatar mx-1">
              <section className="flex justify-center align-middle items-center">
                <Skeleton circle={50} height={100} width={100} />
              </section>
            </div>
            <div className="flex flex-col justify-center align-middle items-center">
              <p>{<Skeleton height={25} width={250} />}</p>
              <p>{<Skeleton height={25} width={250} />}</p>
              <p>{<Skeleton height={25} width={250} />}</p>
            </div>
          </div>
        </>
      ))}
    </div>
    </>
  );
};
export default ReviewLoading;
