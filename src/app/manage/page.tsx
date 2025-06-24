'use client';
import React from 'react';
import { Pencil } from 'lucide-react';
import Manage from '@/app/Topsection/page';
import { useTabContext } from '@/app/Context/TabContext';

export default function Page() {
  const { addEditPlanTab } = useTabContext();

  const tableData = [
    { planName: 'Startup', price: '$10/month', credits: '500' },
    { planName: 'Intermediate', price: '$25/month', credits: '500' },
    { planName: 'Corporate', price: '$35/month', credits: '500' },
  ];

  return (
    <div>
      <div className='border-b border border-[#FFFFFF1A]'>
        <Manage />
      </div>

      <div>
        <div className='max-w-[1065px] mx-auto gradient-border p-4 mt-6 rounded-2xl h-screen white' style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}>
          <div className='overflow-auto rounded-lg shadow-md w-full'>
            <table className='w-full table-auto'>
              <thead className='bg-[#FFFFFF1A] font-[500] text-white'>
                <tr className='rounded-2xl'>
                  <th className='px-4 py-2 text-left'>Plan Name</th>
                  <th className='px-4 py-2 text-left'>Price</th>
                  <th className='px-4 py-2 text-left'>Credits</th>
                  <th className='px-4 py-2 text-left'>Action</th>
                </tr>
              </thead>
              <tbody className='text-left'>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className='border-b border-gray-800 cursor-pointer hover:bg-gray-800'
                  >
                    <td className='px-4 py-3'>{row.planName}</td>
                    <td className='px-4 py-3'>{row.price}</td>
                    <td className='px-4 py-3'>{row.credits}</td>
                    <td className='px-4 py-3'>
                      <Pencil
                        size={18}
                        className='text-white hover:text-blue-700 cursor-pointer'
                        onClick={addEditPlanTab}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
