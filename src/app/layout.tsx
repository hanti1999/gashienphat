import { Roboto, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import FloatButton from '@/components/FloatButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gas Hiền Phát',
  description:
    'GAS HIỀN PHÁT - Chuyên cung cấp gas, bếp gas, bếp điện chính hãng tại Long Thành, Đồng Nai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <div className='container'>
          <Navbar />
        </div>
        {children}
        {/* <PriceFloatButton /> */}
        <FloatButton />
        <Footer />
      </body>
    </html>
  );
}
