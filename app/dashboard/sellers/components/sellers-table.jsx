'use client';
import React, { useEffect, useState } from 'react';
import NewSellerModal from './seller-modal';
import { MdOutlineDelete, MdEdit } from 'react-icons/md';
import { getSellers } from '../actions/get-seller';
import { activateDeactivateSeller } from '../actions/activate-deactivate-seller';

function SellersTable({ sellers }) {
    const openModalForEditSeller = (seller) => {
        setSelectedSeller(seller);
    };

    const handleSaveSeller = (sellerData) => {
        // Logic to save seller data
        console.log('Saved Seller Data:', sellerData);
        setSelectedSeller(null);
    };

    const handleActivateDeactivate = async (seller) => {
        await activateDeactivateSeller(seller);
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='-m-1.5 overflow-x-auto'>
                    <div className='p-1.5 min-w-full inline-block align-middle'>
                        <div className='border rounded-lg overflow-hidden dark:border-gray-700'>
                            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Seller Name
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Brand Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Location
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {sellers?.map((seller) => (
                                        <tr key={seller.id}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.fullName}
                                            </td>

                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.phoneNumber}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.brandName}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {seller.address}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent '
                                                    onClick={() => {
                                                        handleActivateDeactivate(
                                                            seller
                                                        );
                                                    }}
                                                    style={{
                                                        color: seller.isActive
                                                            ? 'red'
                                                            : 'green',
                                                    }}
                                                >
                                                    <span>
                                                        {seller.isActive
                                                            ? 'Deactivate seller'
                                                            : 'Activate Seller'}
                                                    </span>
                                                </button>
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

export default SellersTable;
