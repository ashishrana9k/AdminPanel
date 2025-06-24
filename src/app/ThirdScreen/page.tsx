'use client';

import React, { useState } from 'react';

export default function page() {
    const [showPopup, setShowPopup] = useState(false);

    const rowData = {
        spend: '$2500',
        transactionId: '23D34d5000045',
        date: '05/15/2025',
    };

    return (
        <div className="bg-black text-white rounded min-w-[997px] relative" >
            {/* Table */}
            <div className="overflow-auto rounded-lg shadow-md w-full">
                <table className="w-full  table-auto">
                    <thead className="bg-[#FFFFFF1A] font-[500] text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">SR. NO</th>
                            <th className="px-4 py-2 text-left">Total $ Spend</th>
                            <th className="px-4 py-2 text-left">Transaction ID</th>
                            <th className="px-4 py-2 text-left">Date Created</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        {[...Array(8)].map((_, i) => (
                            <tr
                                key={i}
                                className="border-b border-gray-800 cursor-pointer hover:bg-[#FFFFFF1A]"
                                onClick={() => setShowPopup(true)}
                            >
                                <td className="px-4 py-3">{i + 1}</td>
                                <td className="px-4 py-3">{rowData.spend}</td>
                                <td className="px-4 py-3">{rowData.transactionId}</td>
                                <td className="px-4 py-3">{rowData.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
