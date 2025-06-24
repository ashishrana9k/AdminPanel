'use client';
import * as React from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


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
  createData(`EFWVsq...v27Q9g-${i + 1}`, 'Intermediate', 600, '$2500', 4.0 + (i % 5)) // `action` is passed as a number here
);

const rowsPerPage = 8;

export default function Page() {
  const [page] = useState(1); // Static page - pagination removed

  const [activeToggles, setActiveToggles] = useState(() => {
    const initialState: { [key: string]: boolean } = {}; // Add type for initialState
    allRows.forEach((row, index) => {
      initialState[row.name] = !(index === 2 || index === 3); // 3rd and 4th inactive
    });
    return initialState;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const currentRows = allRows.slice(startIndex, startIndex + rowsPerPage);

  // FIX HERE: Add type annotation for 'name'
  const toggleUser = (name: string) => {
    setActiveToggles(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="bg-black p-4 rounded-2xl bottomborderrs">
      <TableContainer component={Paper} className="bg-black rounded-xl overflow-hidden">
        <Table className="text-white" size="small" aria-label="dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#1f2937' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>SR. NO</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>User Name (Wallet Address)</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>Current Plan</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>Credits Remaining</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>Total $ Spend</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid #FFFFFF1A' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row, index) => (
              <TableRow
                key={`${row.name}-${index}`}
                className='bg-black'
                sx={{ borderBottom: '1px solid #FFFFFF1A' }}
              >
                <TableCell sx={{ color: '#fff' }}>{startIndex + index + 1}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.plan}</TableCell>
                <TableCell sx={{ color: '#fff' }}>
                  <div className="flex items-center gap-2">
                    {row.credits}
                    <img
                      src="/images/greenplus.svg"
                      alt="Credits"
                      width={16}
                      height={16}
                    // For Next.js Image component, you generally need a `priority` prop
                    // or ensure the image is correctly configured for optimization.
                    // If you're using plain <img>, this is fine.
                    />
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}