import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hussnain Ali | Portfolio',
  description: 'A modern personal portfolio built with Next.js and Tailwind CSS.',
  icons:{ icon: '/images/icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
