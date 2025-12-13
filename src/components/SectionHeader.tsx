import React from 'react';

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h2 className='text-center font-medium uppercase text-3xl text-[#302671]'>
      ___ {text} ___
    </h2>
  );
};

export default SectionHeader;
