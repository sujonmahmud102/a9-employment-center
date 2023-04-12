import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex items-center justify-between py-6 bg-[#E8E8E8] px-12 w-full'>
            <Link to="/">
                <h2 className='text-xl font-semibold cursor-pointer '>JobCenter</h2>
            </Link>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {
                        open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                            : <Bars4Icon className="h-6 w-6 text-blue-500" />
                    }
                </span>


            </div>
            <div className=''>

                <div>

                    <ul className={`md:flex items-center duration-500 relative  ${open ? 'top-12' : 'hidden'}`}>
                        <li><Link className='mr-9' to="/">Home</Link></li>
                        <li><Link className='mr-9' to="/statistics">Statistics</Link></li>
                        <li><Link className='mr-9' to="/appliedJobs">Applied Jobs</Link></li>
                        <li><Link className='mr-9' to="/blog">Blog</Link></li>
                        <li><Link to="/">
                            <button className='text-white font-semibold px-4 py-3 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500'>Star Applying</button></Link></li>
                    </ul>

                </div>
            </div>

        </nav>
    );
};

export default Header;