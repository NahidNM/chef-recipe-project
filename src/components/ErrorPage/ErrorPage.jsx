import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImag from './../../../public/img/error-803716__340.png'


const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log(error.message)
    return (
      <section className='flex items-center h-screen p-16 text-gray-900 bg-gray-100'>
        <div className='flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <img style={{width: 155}} src={errorImag} alt="" />
          
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-gray-600 text-7xl'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='mb-8 text-2xl font-semibold md:text-3xl'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold text-gray-900 rounded bg-cyan-200'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
};

export default ErrorPage;