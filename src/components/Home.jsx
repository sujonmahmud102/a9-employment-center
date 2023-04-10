import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
            <h1>
                One Step
                <br />
                Closer To Your
                <br />
                Dream Job
            </h1>
            <p>
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