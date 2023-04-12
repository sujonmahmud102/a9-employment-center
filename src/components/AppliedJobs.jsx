import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobList from './AppliedJobList';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const allJobs = useLoaderData()
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {

            const addedProduct = allJobs.find(job => job.id === id)
            if (addedProduct) {

                savedCart.push(addedProduct);
            }
        }
        setAppliedJobs(savedCart);
    }, [allJobs])

    // console.log(appliedJobs)
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-5'>Applied Jobs </h1>
            <div className='px-12'>
                {
                    appliedJobs.map((singleJob, index) => <AppliedJobList
                        singleJob={singleJob}
                        key={index}>
                    </AppliedJobList>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;