import React from 'react'

const Header = () => {
  return (

        <div className="container h-10 mx-auto z-50 border-none rounded-b-sm ">
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold ml-4 tracking-wide hover:scale-110 cursor-pointer duration-75 drop-shadow-md text-fuchsia-600'>Platzi</h2>
                <div className='flex justify-between'>
                <i className="fa fa-cart-shopping text-md mt-3 mr-5 hover:scale-110 cursor-pointer duration-75"></i>
                <img className='w-8 h-8 rounded-2xl mt-1 mr-4 hover:scale-90' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSM2S6ODiHn16QildHHeAYwWSBK4BDgN3sXw&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Header