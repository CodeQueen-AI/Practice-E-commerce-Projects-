import React from 'react'

const Page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        {/* Items */}
        <div className='col-span-2'>
          {/* Summary */}
          <div className='bg-black/5 p-5 rounded-xl'>
            <h2 className='scroll-m-20 text-lg font-medium tracking-tight uppercase'>
              Order Summary
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
