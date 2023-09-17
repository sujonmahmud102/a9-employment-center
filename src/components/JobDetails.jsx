import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    let { id } = useParams()

    const allJobs = useLoaderData();
    const [job, setJob] = useState({});
    // console.log(job)
    const { job_description, job_responsibilities, educational_requirements, experiences, salary, job_title, contact_information, location
    } = job;
    useEffect(() => {
        const singleJob = allJobs.find(single => single.id === id)
        // console.log(singleJob)
        setJob(singleJob)

    }, [])

    const addToLocalStorage = id => {
        addToDb(id)
    }
    return (
        <section>
            <h1 className='text-xl font-bold text-center mt-5'>
                Job Details
            </h1>
            <div className='flex justify-between px-12 mt-10'>
                <div>

                    <p className='mb-4'>
                        <span className='font-semibold'>
                            Job Description:</span> {job_description
                        }
                    </p>
                    <p className='mb-4'>
                        <span className='font-semibold'>
                            Job Responsibility:</span>  {job_responsibilities}
                    </p>
                    <p className='mb-4'>
                        <span className='font-semibold'>
                            Educational Requirements:</span> {educational_requirements}
                    </p>
                    <p className='mb-4'>
                        <span className='font-semibold'>
                            Experiences:</span> {experiences}
                    </p>
                </div>
                <div className='bg-blue-100 p-4 rounded-md'>
                    <h3 className='font-semibold border-b-2 border-indigo-300 pb-2'>Job Details</h3>
                    <p className='my-2 flex items-center gap-2'>
                        <CurrencyDollarIcon className="w-5 text-[#7E90FE]" />
                        <span className='font-medium'>
                            Salary:</span> {salary}
                    </p>
                    <p className='mb-2 flex items-center gap-2'>
                        <CalendarDaysIcon className="w-5 text-[#7E90FE]" />
                        <span className='font-medium'>
                            Job Title:
                        </span> {job_title}
                    </p>
                    <h3 className='font-semibold border-b-2 border-indigo-300 pb-2'>
                        Contact Information
                    </h3>
                    <p className='my-2 flex items-center gap-2'>
                        <PhoneIcon className="w-5 text-[#7E90FE]" />
                        <span className='font-medium'>

                            Phone:
                        </span> {contact_information?.phone}
                    </p>
                    <p className='my-2 flex items-center gap-2'>
                        <EnvelopeIcon className="w-5 text-[#7E90FE]" />
                        <span className='font-medium'>
                            Email:
                        </span> {contact_information?.email}
                    </p>
                    <p className='my-2 flex items-center gap-2'>
                        <MapPinIcon className="w-5 text-[#7E90FE]" />
                        <span className='font-medium'>
                            Address:
                        </span> {location}
                    </p>
                    <button onClick={() => addToLocalStorage(id)} className='w-full text-white font-semibold px-4 py-3 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;