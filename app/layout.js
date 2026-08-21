import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hussnain Ali | Web Developer in Faisalabad — Next.js & Custom Websites',
  description: 'Freelance web developer in Faisalabad building fast, affordable websites for local businesses — restaurants, clinics, salons, and more. Built with Next.js, Express & MongoDB. Get a free sample homepage for your business.',

  icons: { icon: '/images/icon.png' },

  openGraph: {
    title: 'Hussnain Ali | Web Developer in Faisalabad',
    description: 'Fast, affordable websites for local Faisalabad businesses. Free sample homepage available.',
    url: 'https://hussnainali-portfolio.vercel.app',
    siteName: 'Hussnain Ali Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  metadataBase: new URL('https://hussnainali-portfolio.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}