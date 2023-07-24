import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        <div className="w-screen h-[60vh] flex flex-col item">
          {/* OFFER IMAGE CONTAINER*/}
          <div className="relative">
            <Image src="" alt="" />
          </div>
          {/* TEXT CONTAINER*/}
          <div className="">
            <h1 className="">Title</h1>
            <p>Desc</p>
            <span>123</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Featured