'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';
import ThirdScreen from '@/app/ThirdScreen/page';
import Manage from '@/app/Topsection/page'

import { RiArrowDropRightLine, RiArrowLeftSLine } from "react-icons/ri";

interface RowData {
  name: string;
  plan: string;
  credits: number;
  totalSpend: string;
  action: React.ReactNode; // This remains as React.ReactNode for now, as a number is a valid node
}

function createData(
  name: string,
  plan: string,
  credits: number,
  totalSpend: string,
  action: React.ReactNode // This remains as React.ReactNode for now
): RowData {
  return { name, plan, credits, totalSpend, action };
}

const allRows = Array.from({ length: 48 }, (_, i) =>
  createData(`EFWVsq...v27Q9g-${i + 1}`, 'Intermediate', 600, '$2500', 4.0 + (i % 5))
);

const rowsPerPage = 8;

export default function Page() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const [activeToggles, setActiveToggles] = useState(() => {
    const initialState = {};
    allRows.forEach((row, index) => {
      initialState[row.name] = !(index === 2 || index === 3);
    });
    return initialState;
  });

  const filteredRows = allRows.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const currentRows = filteredRows.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const toggleUser = (name) => {
    setActiveToggles(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className=''>
      {/* Header */}
      <div className='border-b border px-6 border-[#FFFFFF1A]'>
        <Manage />
      </div>

      {/* Search + Table Wrapper */}
      <div className='px-6 border-[#FFFFFF1A] overflow-hidden'>
        {/* Search Input */}
        <div className="mb-4 my-5">
          <input
            type="text"
            placeholder="Search user by wallet address"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 py-3 px-2 rounded-2xl border border-gray-600 bg-black text-white placeholder-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Table */}
        <div className="gradient-border border-t border-r border-r-[#FFFFFF33] border-t-[#FFFFFF4D] border-b border-b-[#FFFFFF73] border-l border-l-[#FFFFFF73] " style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}>

          <div className='p-4'>
            <TableContainer component={Paper} className="bg-black overflow-hidden">
              <Table className="text-white shadow bg-black" size="small" aria-label="dense table">
                <TableHead className='bg-[#FFFFFF1A]'>
                  <TableRow>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>SR. NO</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>User Name (Wallet Address)</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Current Plan</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Credits Remaining</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Total $ Spend</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-white py-4">
                        No users found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    currentRows.map((row, index) => (
                      <TableRow
                        className="hover:bg-[#FFFFFF1A] bottomborderrs"

                        key={`${row.name}-${index}`}
                      // sx={{ borderBottom: '1px solid red' }} // RED BOTTOM BORDER
                      >
                        <TableCell sx={{ color: '#fff' }}>{startIndex + index + 1}</TableCell>
                        <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
                        <TableCell sx={{ color: '#fff' }}>{row.plan}</TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                          <div className="flex items-center gap-2">
                            {row.credits}
                            <img src="/images/greenplus.svg" alt="Credits" width={16} height={16} />
                          </div>
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>{row.totalSpend}</TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={!!activeToggles[row.name]}
                                onChange={() => toggleUser(row.name)}
                                sx={{
                                  '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#22c55e',
                                  },
                                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#22c55e',
                                  },
                                  '& .MuiSwitch-switchBase': {
                                    color: '#ef4444',
                                  },
                                  '& .MuiSwitch-track': {
                                    backgroundColor: '#ef4444',
                                  },
                                }}
                              />
                            }
                            label={activeToggles[row.name] ? 'Active' : 'Block'}
                            labelPlacement="end"
                            sx={{
                              '& .MuiFormControlLabel-label': {
                                color: activeToggles[row.name] ? '#ffffff' : '#ef4444',
                                fontWeight: 500,
                              },
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>


            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2 text-white gap-2 items-center flex-wrap">
              <button
                className='border py-2 px-2 border-gray-800 '
                onClick={() => setPage(page - 1)}
                disabled={page === 1}>
                <RiArrowLeftSLine />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  className='border py-1 px-2.5 border-gray-800'
                  key={i}
                  onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              ))}

              <button
                className='border py-1.5 px-2 border-gray-800 rounded-lg'
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                <RiArrowDropRightLine className='text-xl' />
              </button>
            </div>

            {/* Popup Button */}
            <div className="mt-8 text-center">
              <button
                className='border py-2 px-6 cursor-pointer rounded-2xl text-white'
                onClick={() => setShowPopup(true)}
              >
                See popup screen
              </button>
            </div>

            {/* Popup Modal */}
            {showPopup && (
              <div className="fixed inset-0 z-50 backdrop-blur-white bg-black/80 flex items-center justify-center">
                <div className="text-black rounded-2xl px-5 border py-4 gradient-border text-center relative" style={{ boxShadow: '0px 10px 61px 0px #FFFFFF2E' }}>
                  <div className='' >
                    <div
                      className='text-white text-4xl flex justify-end cursor-pointer'
                      onClick={() => setShowPopup(false)}
                    >
                      <span className='bg-[#FFFFFF1A] text-white rounded-[100px] mb-4 mt-2 h-[24px] w-[24px]'>
                        <Image src="/images/cencel.svg" height={40} width={40} alt="" />
                      </span>
                    </div>
                    <ThirdScreen />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
