import NotiList from '@/components/NotiList';
import React from 'react';

const page = () => {
  return (
    <div className='container'>
      <NotiList limit={10} params={'thong-bao'} />
    </div>
  );
};

export default page;
