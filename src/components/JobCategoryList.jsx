import React from 'react';

const JobCategoryList = ({ singleCategory }) => {
    // console.log(singleCategory)
    const { category, image, total_jobs } = singleCategory;
    return (
        <div className='bg-[#eeebf5] mb-12 w-64 rounded-lg p-8'>

            <div className='w-[70px] h-[70px] bg-[#d4d2d9] flex items-center justify-center mb-8'>
                <img className='w-[40px] h-[40px] mx-auto rounded-md' src={image} alt="" />
            </div>
            <h3 className='text-xl text-[#474747] font-semibold mb-2'>{category}</h3>
            <p className='text-[#A3A3A3;] text-md'>{total_jobs} Jobs Available
            </p>

        </div>
    );
};

export default JobCategoryList;