'use client';

import { useActionState } from 'react';
import { unlockCatalogAction } from './actions';

export default function UnlockCatalogPage() {
  const [state, formAction, isPending] = useActionState(
    unlockCatalogAction,
    null,
  );

  return (
    <div className='container py-20 flex justify-center'>
      <form
        action={formAction}
        className='w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-4'
      >
        <h1 className='text-xl font-bold text-center text-[#302671]'>
          Danh mục dành riêng cho khách hàng
        </h1>
        <p className='text-sm text-gray-500 text-center'>
          Vui lòng nhập mã truy cập do Gas Hiền Phát cung cấp để xem danh mục.
        </p>

        <input
          type='password'
          name='code'
          required
          placeholder='Nhập mã truy cập...'
          className='border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#fb77c5]'
        />

        {state?.error && (
          <p className='text-red-500 text-xs text-center'>{state.error}</p>
        )}

        <button
          type='submit'
          disabled={isPending}
          className='bg-[#fb77c5] hover:bg-pink-400 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50'
        >
          {isPending ? 'Đang kiểm tra...' : 'Xác nhận'}
        </button>
      </form>
    </div>
  );
}
