import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'Metapolis Center',
  description: 'Digital & Social Innovation Hub',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}