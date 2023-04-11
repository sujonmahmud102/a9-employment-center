import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner';
import JobCategoryList from './JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import Company from './Company';

const Home = () => {
    const companies = useLoaderData();
    console.log(companies)
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='mt-16 px-12'>
                <div>
                    <h1 className='text-3xl font-bold text-center mb-4'>Job Category List</h1>
                    <p className='text-center text-[#757575] mb-8'>
                        <small>
                            Explore thousands of job opportunities with all the information you need. Its your future
                        </small>
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                    {
                        category.map((singleCategory, i) => <JobCategoryList key={i} singleCategory={singleCategory}></JobCategoryList>)
                    }
                </div>
            </div>
            <div className='mt-16 px-12'>
                <h1 className='text-3xl font-bold text-center mb-4'>
                    Featured Jobs
                </h1>
                <p className='text-center text-[#757575] mb-8'>
                    <small>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </small>
                </p>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3'>
                    {
                        companies.map(company => <Company company={company} key={company.id}></Company>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;