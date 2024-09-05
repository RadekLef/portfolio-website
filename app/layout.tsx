import './globals.css';
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import Footer from '@/components/footer';
import ActiveSectionContextProvider from './context/active-section-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Radek | Portfolio website',
  description: 'My very first website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} pt-28 sm:pt-36 bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#d5f8ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.25rem]"></div>
        <div className="bg-[#d3dafb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.25rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"/>
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}
