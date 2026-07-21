import { Prompt } from 'next/font/google';
import './globals.css';

// ตั้งค่า Font Prompt
const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Dormitory - ระบบบริหารจัดการหอพัก',
  description: 'ระบบบริหารจัดการหอพัก แจ้งซ่อมและชำระเงิน',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* โหลด FontAwesome */}
        <link 
          rel="stylesheet" 
          href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)" 
        />
      </head>
      <body className={prompt.className}>
        {children}
      </body>
    </html>
  );
}
