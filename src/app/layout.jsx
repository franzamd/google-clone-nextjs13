import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by Next js 13',
  icons: {
    icon: './favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
