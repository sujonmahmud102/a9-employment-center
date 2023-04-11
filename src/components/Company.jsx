import React from 'react';

const Company = ({ company }) => {
    const { id, job_title, company_name, logo, location, part_time_or_full_time, remote_or_onsite,
        salary } = company
    return (
        <div className='bg-[#eeebf5] mb-12 w-64 rounded-lg p-8'>

            <img src="" alt="" />
            <h3 className='text-xl text-[#474747] font-semibold mb-2'>{job_title}</h3>
            <p>{company_name}</p>
            <h6>{remote_or_onsite}</h6>
            <p>{location}</p>
            <p>{salary}</p>
            <button
                className='text-white font-semibold px-4 py-3 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>
                View Details
            </button>

        </div>
    );
};

export default Company;