import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    let { id } = useParams()
    console.log(id)
    const allJobs = useLoaderData();

    return (
        <div>
            Details About Job
        </div>
    );
};

export default JobDetails;