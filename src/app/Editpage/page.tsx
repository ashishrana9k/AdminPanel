'use client';
import { useTabContext } from '@/app/Context/TabContext';
import React, { useState } from 'react';
import Image from 'next/image';


export default function page() {
  const { addEditPlanTab } = useTabContext();

  const tableData = [
    {
      userAddress: 'EFWVsq...v27Q9g',
      requestedPlan: 'Startup',
      requestedCredits: '500',
      transactionId: '23D34d5000045',
    },
    {
      userAddress: 'HYSKsa...a77Kd2',
      requestedPlan: 'Intermediate',
      requestedCredits: '1000',
      transactionId: '55F88f8200GG3',
    },
    {
      userAddress: 'UXWe89...31GfgQ',
      requestedPlan: 'Corporate',
      requestedCredits: '1500',
      transactionId: 'EEG23a6100G8',
    },
    {
      userAddress: 'BQ37Fg...9Kf23P',
      requestedPlan: 'Startup',
      requestedCredits: '750',
      transactionId: 'YT722x100033',
    },
    {
      userAddress: 'GHD22g...48Jk6L',
      requestedPlan: 'Corporate',
      requestedCredits: '1200',
      transactionId: 'PL991a3000X9',
    },
    {
      userAddress: 'MKY88t...20WxZQ',
      requestedPlan: 'Intermediate',
      requestedCredits: '600',
      transactionId: 'SW221f1180DD',
    },
    {
      userAddress: 'PL39aa...11KkYQ',
      requestedPlan: 'Startup',
      requestedCredits: '400',
      transactionId: 'RR540p7100AA',
    },
    {
      userAddress: 'XLT54g...2JLfK9',
      requestedPlan: 'Corporate',
      requestedCredits: '2000',
      transactionId: 'ZZ118d9990UU',
    },
  ];

  const [popup, setpopup] = useState(false);


  return (
    <div>
      <div className='border-b border border-gray-800   text-2xl font-bold text-white p-5'>
        <h2 className='text-2xl font-[570]'>Manage API Pricing</h2>
      </div>
      <div>
        <div
          className='max-w-[1065px] mx-auto bg-black gradient-border p-4 mt-6 rounded-2xl h-screen white'
          style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}
        >
          <div className='overflow-auto rounded-lg shadow-md w-full'>
            <table className='w-full table-auto bg-black'>
              <thead className='bg-[#FFFFFF1A] font-[570] text-white'>
                <tr className='rounded-2xl'>
                  <th className='px-4 py-2 text-left'>User Address</th>
                  <th className='px-4 py-2 text-left'>Requested Plan</th>
                  <th className='px-4 py-2 text-left'>Requested Credits</th>
                  <th className='px-4 py-2 text-left'>Transaction ID</th>
                  <th className='px-4 py-2 text-left'>Action</th>
                </tr>
              </thead>
              <tbody className='text-left'>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className='border-b border-gray-800 cursor-pointer hover:bg-gray-800'
                  >
                    <td className='px-4 py-3'>{row.userAddress}</td>
                    <td className='px-4 py-3'>{row.requestedPlan}</td>
                    <td className='px-4 py-3'>{row.requestedCredits}</td>
                    <td className='px-4 py-3'>{row.transactionId}</td>
                    <td className='px-4 py-3 flex gap-2'>
                      <button className='text-green-500 hover:underline' onClick={() => { setpopup(true) }}>Approve</button>
                      <button className='text-red-500 hover:underline'>Deny</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        {popup && (
          <div className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center">
            <div className="bg-black  text-white rounded-lg gradient-border shadow-lg w-[426px] text-center" style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}>

              <div className='pt-3 px-3 pb-11 mx-auto'>
                <div className="text-right flex justify-end text-4xl cursor-pointer rounded-2xl ">
                  <Image src="/images/cencel.svg" width={24} height={24} className='  rounded-2xl bg-[#FFFFFF1A]' alt="" onClick={() => { setpopup(false) }} />
                </div>
                <div className='space-y-2 px-8'>
                  <h4>Add API Credits</h4>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="rounded-2xl w-full border p-2 mt-3 mb-4 border-gray-600 bg-black text-white placeholder-white focus:outline-none focus:border-yellow-500"
                  />
                  <button className='px-4 py-3 mx-auto border buttonBorder flex'>
                    <span>Add credit </span>
                    <Image src="/images/rightarrow.svg" width={12} className='block' height={12} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
