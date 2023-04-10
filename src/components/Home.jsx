import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center bg-[#E8E8E8] px-12'>
            <div>
                <h1 className='text-5xl font-bold mb-6'>
                    One Step
                    <br />
                    Closer To Your
                    <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                        Dream Job
                    </span>
                </h1>
                <p className='mb-6 text-sm text-[#757575]'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='text-white font-semibold px-4 py-3 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>
                    Get Started
                </button>
            </div>
            <div>
                <img src="/public/bannerImg.png" alt="" />
            </div>
        </div>
    );
};

export default Home;