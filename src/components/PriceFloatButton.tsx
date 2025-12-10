'use client';
import { MousePointerClick } from 'lucide-react';
import React, { useState } from 'react';
import { Modal } from './Modal';

const PriceFloatButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed bottom-8 left-8 z-50'>
      <button
        onClick={() => setOpen(true)}
        className='bg-[#fb77c5] hover:bg-pink-300 cursor-pointer flex items-center justify-center gap-2 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'
      >
        <p className='font-semibold text-sm'>GIÁ GAS</p>
        <MousePointerClick />
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title='Giá gas tháng 11/2025'
      >
        <div>
          <table className='min-w-full border-collapse border border-gray-300 text-left'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 px-4 py-2'>
                  Tên Sản Phẩm
                </th>
                <th className='border border-gray-300 px-4 py-2'>Giá (VND)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>
                  Phoenix 12kg
                </td>
                <td className='border border-gray-300 px-4 py-2'>314.000</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>
                  Sopet Gas One 12kg
                </td>
                <td className='border border-gray-300 px-4 py-2'>329.000</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>
                  Petro Việt Nam 12kg
                </td>
                <td className='border border-gray-300 px-4 py-2'>329.000</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>
                  Sopet Gas (đỏ, xanh) 12kg
                </td>
                <td className='border border-gray-300 px-4 py-2'>364.000</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>
                  Siam Gas 12kg
                </td>
                <td className='border border-gray-300 px-4 py-2'>364.000</td>
              </tr>
            </tbody>
          </table>
          <p className='italic mt-2'>
            *Giá trên chỉ áp dụng tại khu vực: xã An Phước, xã Long Thành,
            phường Tam Phước
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default PriceFloatButton;
