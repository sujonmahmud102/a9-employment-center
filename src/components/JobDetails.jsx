import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const allJobs = useLoaderData();
    console.log(allJobs)
    return (
        <div>
            Details About Job
        </div>
    );
};

export default JobDetails;