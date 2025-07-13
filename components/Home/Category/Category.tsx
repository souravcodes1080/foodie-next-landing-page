import { Categories } from '@/constant/Constant'
import React from 'react'

function Category() {
  return (
    <>
        <div className="pt-16 pb-16">
            <h1 className='text-xl sm:text-2xl text-center font-extrabold'>Popular Categories by Food</h1>
            <div className="w-[80%] mx-auto mt-10">
                <div className="flex flex-wrap gap-4 justify-center">
                    {Categories.map((c, i)=>{
                        return(
                            <span key={i} className='px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg '>{c.name}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Category