"use client"
import React from 'react'
import Header from './header'

function PromptForm() {
  return (
    <div className='flex justify-center my-5'>
        <div className='w-[97%]  bg-green-100 rounded-2xl p-4'>
<Header />
<div className='grid grid-cols-2 grid-rows-2 w-full'>
    <div className='m-3 bg-red-100 h-20 w-20'></div>
    <div className='m-3 bg-red-100 h-20 w-20'></div>
    <div className='m-3 bg-red-100 h-20 w-20'></div>
    <div className='m-3 bg-red-100 h-20 w-20'></div>
</div>
        </div>
    </div>
  )
}

export default PromptForm