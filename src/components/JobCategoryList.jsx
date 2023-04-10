import React from 'react';

const JobCategoryList = ({ singleCategory }) => {
    console.log(singleCategory)
    const { category, image, total_jobs } = singleCategory;
    return (
        <div>

            <img src={image} alt="" />
            <h3>{category}</h3>
            <p>{total_jobs} Jobs Available
            </p>

        </div>
    );
};

export default JobCategoryList;