import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-screen bg-rose-500 flex justify-center items-center'>
        <div>
        <h3>PageNotFound</h3>
        <p>Pease go back to Home page!! <span className='bg-gray-200 p-3 ml-3 rounded-md hover:bg-gray-600 hover:text-white'><Link to="/">Home</Link></span></p>
        </div>
    </div>
  )
}

export default PageNotFound