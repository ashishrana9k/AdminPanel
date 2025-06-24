// pages/FullDashboardPage.tsx (or wherever this component is)

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Pencil } from 'lucide-react';

export default function FullDashboardPage() {
  const pathname = usePathname();

  const tableData = [
    { planName: 'Startup', price: '$10/month', credits: '500' },
    { planName: 'Intermediate', price: '$25/month', credits: '500' },
    { planName: 'Corporate', price: '$35/month', credits: '500' },
  ];

  // --- FIX IS HERE ---
  const linkClasses = (path: string) =>
    `flex items-center border-l-2 py-3 pl-6 pr-2 cursor-pointer ${
      pathname === path
        ? 'border-[#FFB700] bg-[#FFB7001A]'
        : 'border-transparent hover:border-[#FFB700] hover:bg-[#FFB7001A]'
    }`;
  // --- END FIX ---

  return (
    <div className='flex h-screen text-white'>
      {/* Sidebar - 12% */}
      <div className='w-[12%] border-r border-gray-800 bg-[#0E0E0E]'>
        <div className='p-3'>
          <Image
            src='/images/dashLogo.svg'
            alt='Dashboard Logo'
            width={212}
            height={56}
          />
        </div>
        <div className='mt-20'>
          <nav className='space-y-4'>
            {/* You're passing empty strings to linkClasses here, which might not be what you intend.
                For the root path, use '/' or adjust your logic.
                For other links, pass the actual href, e.g., linkClasses('/Users') */}
            <Link href='/' className={linkClasses('/')}> {/* Changed from '' to '/' */}
              <Image
                src='/images/dashboardicon.svg'
                width={33}
                height={33}
                alt=''
                className='mx-3'
              />
              <span>Dashboard</span>
            </Link>

            <Link href='/users' className={linkClasses('/users')}> {/* Changed from '' to '/users' */}
              <Image
                src='/images/listicon2.svg'
                width={33}
                height={33}
                alt=''
                className='mx-3'
              />
              <span>Users</span>
            </Link>

            <Link href='/manage' className={linkClasses('/manage')}> {/* Changed from '' to '/manage' */}
              <Image
                src='/images/listicon3.svg'
                width={33}
                height={33}
                alt=''
                className='mx-3'
              />
              <span>Manage API Pricing</span>
            </Link>

            {/* Duplicate link - consider removing one or pointing to a different path */}
            <Link href='/manage' className={linkClasses('/manage')}>
              <Image
                src='/images/listicon3.svg'
                width={33}
                height={33}
                alt=''
                className='mx-3'
              />
              <span>Manage API Pricing</span>
            </Link>

            <Link href='/docs' className={linkClasses('/docs')}> {/* Changed from '' to '/docs' */}
              <Image
                src='/images/listicon4.svg'
                width={33}
                height={33}
                alt=''
                className='mx-3'
              />
              <span>Docs</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content - 88% */}
      <div className='w-[88%] flex flex-col bg-black'>
        {/* Navbar */}
        <div className='h-[60px] bg-[#111111] px-6 flex items-center justify-between border-b border-[#FFFFFF1A]'>
          <h1 className='text-xl font-semibold'>API Dashboard</h1>
        </div>

        {/* Content */}
        <div className='flex-grow overflow-y-auto p-6'>
          <div className='max-w-[1065px] mx-auto border p-4 rounded-2xl bg-[#111111] shadow-md'>
            <h3 className='text-2xl mb-6'>Manage API Pricing</h3>
            <div className='overflow-auto rounded-lg'>
              <table className='w-full table-auto'>
                <thead className='bg-[#FFFFFF1A] font-[500]'>
                  <tr>
                    <th className='px-4 py-2 text-left'>Plan Name</th>
                    <th className='px-4 py-2 text-left'>Price</th>
                    <th className='px-4 py-2 text-left'>Credits</th>
                    <th className='px-4 py-2 text-left'>Action</th>
                  </tr>
                </thead>
                <tbody>
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
                          className='text-white hover:text-blue-500 cursor-pointer'
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
    </div>
  );
}