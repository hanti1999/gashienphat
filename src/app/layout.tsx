import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';
import ZaloFloatButton from '@/components/ZaloFloatButton';
import FacebookFloatButton from '@/components/FacebookFloatButton';
import CallFloatButton from '@/components/CallFloatButton';
import PriceFloatButton from '@/components/PriceFloatButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl'>
          <Navbar />
          {children}
          <ScrollToTop />
          <ZaloFloatButton />
          <FacebookFloatButton />
          <PriceFloatButton />
          <CallFloatButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}
