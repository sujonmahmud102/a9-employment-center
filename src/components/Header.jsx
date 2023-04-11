import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between py-6 bg-[#E8E8E8] px-12'>
            <div>
                <Link to="/">
                    <h2 className='text-xl font-semibold cursor-pointer '>JobCenter</h2>
                </Link>
            </div>
            <div>
                <NavLink className='mr-9' to="/">Home</NavLink>
                <Link className='mr-9' to="/statistics">Statistics</Link>
                <Link className='mr-9' to="/appliedJobs">Applied Jobs</Link>
                <Link className='mr-9' to="/blog">Blog</Link>
            </div>
            <div>
                <button className='text-white font-semibold px-4 py-3 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;