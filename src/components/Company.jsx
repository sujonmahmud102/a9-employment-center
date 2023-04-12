import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Company = ({ company }) => {
    const jobId = (id) => {
        console.log(id)
    }
    const { id, job_title, company_name, logo, location, part_time_or_full_time, remote_or_onsite, salary } = company
    return (
        <div className='bg-[#eeebf5] mb-12 rounded-lg p-8 '>

            <img className='w-24 h-12 mb-8' src={logo} alt="" />
            <div>
                <h3 className='text-xl text-[#474747] font-semibold mb-2'>{job_title}</h3>
                <p className='text-[#757575] font-normal'>{company_name}</p>
                <h6 className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] flex gap-3 mt-4'>
                    <span className='border-2 border-[#7E90FE] px-3 py-1 rounded-md text-blue-600'>{remote_or_onsite}</span>
                    <span className='border-2 border-[#7E90FE] px-3 py-1 rounded-md text-blue-600'>Full Time</span>
                </h6>
                <div className='flex gap-4 text-sm mt-4'>
                    <p className='flex items-center gap-2'><MapPinIcon className="w-4 text-[#757575]" /> {location}</p>
                    <p className='flex items-center gap-2'><CurrencyDollarIcon className="w-4 text-[#757575]" /> {salary}</p>
                </div>
                <Link to={`/job/${id}`}><button onClick={() => jobId(id)}
                    className='mt-4 text-white font-medium px-3 py-2 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>
                    View Details
                </button></Link>
            </div>
        </div >
    );
};

export default Company;