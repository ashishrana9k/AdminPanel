import React from 'react'
import Image from 'next/image';
import DashboardTable from './Component/DashboardTable/page'
import { Calendar, ChevronDown } from 'lucide-react';
import Manage from '@/app/Topsection/page'

export default function page() {
  return (
    <div>
      <div>
        <div className=' border-b  border-[#FFFFFF1A]'>
          <Manage />
        </div>
        <div className='p-5'>
          <div className='flex justify-end'>
            <div className="text-right pb-4 relative">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-white shadow-sm">
                <Calendar className="w-5 h-5 " />
                <span className="">Week</span>
                <input
                  type="date"
                  className="absolute opacity-0 inset-0 cursor-pointer"
                />
                <div>
                  <Image src="images/downarrow.svg" height={14} width={14} alt="" />
                </div>
              </button>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className="w-full bg-[#FFB7001A] bg-red border-b rounded-xl border-[#FFB700] flex items-center px-5 py-11">
              <div className='bg-[#FFB7001A] h-[78px] w-[78px] flex items-center justify-center rounded-xl'>
                <Image src="images/Dollor.svg" height={33} width={20} alt="" />
              </div>
              <div className='pl-5'>
                <h5 className=' text-[#FFB700] dollor'>$1M</h5>
                <span>Total Revenue</span>
              </div>
            </div>

            <div className="w-full bg-[#FFB7001A] bg-red border-b rounded-xl border-[#FFB700] flex items-center px-5 py-11">
              <div className='bg-[#FFB7001A] h-[78px] w-[78px] flex items-center justify-center rounded-xl'>
                <Image src="images/Dollor.svg" height={33} width={20} alt="" />
              </div>
              <div className='pl-5'>
                <h5 className='dollor text-[#FFB700]'>750</h5>
                <span>Total Users</span>
              </div>
            </div>

            <div className="w-full bg-[#FFB7001A] bg-red border-b rounded-xl border-[#FFB700] flex items-center px-5 py-11">
              <div className='bg-[#FFB7001A] h-[78px] w-[78px] flex items-center justify-center rounded-xl'>
                <Image src="images/Dollor.svg" height={33} width={20} alt="" />
              </div>
              <div className='pl-5'>
                <h5 className=' text-[#FFB700] dollor'>15,000</h5>
                <span>Total Credits</span>
              </div>
            </div>

            <div className="w-full bg-[#FFB7001A] bg-red border-b rounded-xl border-[#FFB700] flex items-center px-5 py-11">
              <div className='bg-[#FFB7001A] h-[78px] w-[78px] flex items-center justify-center rounded-xl'>
                <Image src="images/Dollor.svg" height={33} width={20} alt="" />
              </div>
              <div className='pl-5'>
                <h5 className=' text-[#FFB700] dollor'>100</h5>
                <span>Active Subscriptions</span>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between py-4'>
              <div className=''>
                <h4 className='text-2xl'>Users</h4>
              </div>
              <button className="text-underline">
                <a href="" >View All</a>
              </button>
            </div>
            <div className='border rounded-2xl  border-t border-r border-r-[#FFFFFF33] border-t-[#FFFFFF4D] border-b border-b-[#FFFFFF73] border-l border-l-[#FFFFFF73]' style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}>
              <DashboardTable />
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
