import Image from 'next/image';
import Link from 'next/link';

const ZaloFloatButton = () => {
  return (
    <div className='fixed bottom-22 left-8 z-50'>
      <Link href='https://zalo.me/0982577949' target='_blank'>
        <Image src={'/icons/zaloLogo.png'} alt='zalo' width={48} height={48} />
      </Link>
    </div>
  );
};

export default ZaloFloatButton;
