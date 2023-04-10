import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner';
import JobCategoryList from './JobCategoryList';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='mt-16'>
                <h1>Job Category List</h1>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2'>
            {
                category.map((singleCategory, i)=> <JobCategoryList key={i} singleCategory={singleCategory}></JobCategoryList> )
            }
            </div>
            
        </div>
    );
};

export default Home;