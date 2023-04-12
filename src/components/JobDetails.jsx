import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    let { id } = useParams()

    const allJobs = useLoaderData();
    const [job, setJob] = useState({});
    console.log(job)
    const { job_description, job_responsibilities, educational_requirements, experiences, salary, job_title, contact_information, location
    } = job;
    useEffect(() => {
        const singleJob = allJobs.find(single => single.id === id)
        setJob(singleJob)

    }, [])

    return (
        <div className='flex justify-between px-12 mt-10'>
            <div>
                <p>
                    Job Description: {job_description
                    }
                </p>
                <p>
                    Job Responsibility:  {job_responsibilities}
                </p>
                <p>
                    Educational Requirements: {educational_requirements}
                </p>
                <p>
                    Experiences: {experiences}
                </p>
            </div>
            <div>
                <h3>Bob Details</h3>
                <p>
                    Salary: {salary}
                </p>
                <p>
                    Job Title: {job_title}
                </p>
                <h3>
                    Contact Information
                </h3>
                <p>
                    Phone: {contact_information?.phone}
                </p>
                <p>
                    Email: {contact_information?.email}
                </p>
                <p>
                    Address: {location}
                </p>
                <button>
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobDetails;