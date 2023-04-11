import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <div className='my-4'>
                <h3 className='text-xl font-semibold'>Q1: When should you use context API?</h3>
                <p className=''>The Context API is a feature in React that allows you to share data between components without the need to pass props down through multiple levels of the component tree. </p>
            </div>
            <div className='my-4'>
                <h3 className='text-xl font-semibold'>Q2: What is custom hook?
                </h3>
                <p className=''>
                    In React, a custom hook is a JavaScript function that allows you to reuse logic between different components. Custom hooks are created by extracting some common logic or functionality from a component and putting it into a separate function that can be used across multiple components.
                </p>
            </div>
            <div className='my-4'>
                <h3 className='text-xl font-semibold'>Q3: What is useRef, what works it is use?</h3>
                <p className=''>In React, the useRef hook is used to create a reference to a DOM element or a variable that persists across re-renders of a component.  </p>
            </div>
            <div className='my-4'>
                <h3 className='text-xl font-semibold'>Q4: What is useMemo, what works it is use?</h3>
                <p className=''>In React, the useMemo hook is used to memoize a value, which means to cache the result of an expensive computation so that it can be reused if the input values do not change. </p>
            </div>
        </div>
    );
};

export default Blog;