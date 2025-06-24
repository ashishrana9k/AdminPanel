// 'use client';
// import * as React from 'react';
// import { useState } from 'react';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import ThirdScreen from '@/app/ThirdScreen/page'
// import Image from 'next/image';

// import { RiArrowDropRightLine, RiArrowLeftSLine } from "react-icons/ri";
// // import PopupContent from './components/PopupContent'; // ⬅️ adjust path if needed

// function createData(name, plan, credits, totalSpend, action) {
//   return { name, plan, credits, totalSpend, action };
// }

// const allRows = Array.from({ length: 48 }, (_, i) =>
//   createData(`EFWVsq...v27Q9g-${i + 1}`, 'Intermediate', 600, '$2500', 4.0 + (i % 5))
// );

// const rowsPerPage = 8;

// export default function Page() {
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showPopup, setShowPopup] = useState(false);

//   const [activeToggles, setActiveToggles] = useState(() => {
//     const initialState = {};
//     allRows.forEach((row, index) => {
//       initialState[row.name] = !(index === 2 || index === 3);
//     });
//     return initialState;
//   });

//   const filteredRows = allRows.filter(row =>
//     row.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
//   const startIndex = (page - 1) * rowsPerPage;
//   const currentRows = filteredRows.slice(startIndex, startIndex + rowsPerPage);

//   React.useEffect(() => {
//     setPage(1);
//   }, [searchTerm]);

//   const toggleUser = (name) => {
//     setActiveToggles(prev => ({
//       ...prev,
//       [name]: !prev[name]
//     }));
//   };

//   return (
//     <div className="p-4 bg-black min-h-screen rounded-2xl">
//       {/* Table */}
//       <div>
//         <TableContainer component={Paper} className="bg-black rounded-2xl overflow-hidden">
//           <Table className="text-white shadow bg-black" size="small" aria-label="dense table">
//             <TableHead>
//               <TableRow style={{ backgroundColor: '#1f2937' }}>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>SR. NO</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>User Name (Wallet Address)</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Current Plan</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Credits Remaining</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Total $ Spend</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 600, borderBottom: '1px solid #FFFFFF1A' }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {currentRows.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} className="text-center text-white py-4">
//                     No users found.
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 currentRows.map((row, index) => (
//                   <TableRow
//                     key={`${row.name}-${index}`}
//                     sx={{ borderBottom: '1px solid #FFFFFF1A' }}
//                   >
//                     <TableCell sx={{ color: '#fff' }}>{startIndex + index + 1}</TableCell>
//                     <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
//                     <TableCell sx={{ color: '#fff' }}>{row.plan}</TableCell>
//                     <TableCell sx={{ color: '#fff' }}>
//                       <div className="flex items-center gap-2">
//                         {row.credits}
//                         <img
//                           src="/images/greenplus.svg"
//                           alt="Credits"
//                           width={16}
//                           height={16}
//                         />
//                       </div>
//                     </TableCell>
//                     <TableCell sx={{ color: '#fff' }}>{row.totalSpend}</TableCell>
//                     <TableCell sx={{ color: '#fff' }}>
//                       <FormControlLabel
//                         control={
//                           <Switch
//                             checked={!!activeToggles[row.name]}
//                             onChange={() => toggleUser(row.name)}
//                             sx={{
//                               '& .MuiSwitch-switchBase.Mui-checked': {
//                                 color: '#22c55e',
//                               },
//                               '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//                                 backgroundColor: '#22c55e',
//                               },
//                               '& .MuiSwitch-switchBase': {
//                                 color: '#ef4444',
//                               },
//                               '& .MuiSwitch-track': {
//                                 backgroundColor: '#ef4444',
//                               },
//                             }}
//                           />
//                         }
//                         label={activeToggles[row.name] ? 'Active' : 'Block'}
//                         labelPlacement="end"
//                         sx={{
//                           '& .MuiFormControlLabel-label': {
//                             color: activeToggles[row.name] ? '#ffffff' : '#ef4444',
//                             fontWeight: 500,
//                           },
//                         }}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 space-x-2 text-white gap-2 items-center flex-wrap">
//         <button
//              className='border py-2 px-2 border-gray-800 rounded-lg'
//           onClick={() => setPage(page - 1)}
//           disabled={page === 1}>
//           <RiArrowLeftSLine />
//         </button>

//         {Array.from({ length: totalPages }).map((_, i) => (
//           <button
//           className='border py-1 px-2.5 border-gray-800 rounded-lg'
//             key={i}
//             onClick={() => setPage(i + 1)}>
//             {i + 1}
//           </button>
//         ))}

//         <button
//           className='border py-1.5 px-2 border-gray-800 rounded-lg'
//           onClick={() => setPage(page + 1)}
//           disabled={page === totalPages}
//         >
//           <RiArrowDropRightLine className='text-xl' />
//         </button>
//       </div>

//       {/* Button to trigger popup */}
//       <div className="mt-8 text-center">
//         <button
//           className='border py-2 px-6 cursor-pointer rounded-2xl text-white'
//           onClick={() => setShowPopup(true)}
//         >
//           See popup screen
//         </button>
//       </div>

//       {/* Modal Popup with Blur */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center">
//           <div className=" text-black rounded-2xl px-5 border py-4 border-white text-center relative">
//             <div className=''>
//               <div className='text-white text-4xl flex justify-end cursor-pointer'
//                 onClick={() => setShowPopup(false)}
//               >
//                 <span className=' bg-[#FFFFFF1A] text-white rounded-[100px] mb-4 mt-2 h-[24px] w-[24px]'>
//                   <Image src="/images/cencel.svg" height={40} width={40} alt="" />
//                   </span>
//               </div>
//               <ThirdScreen />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
