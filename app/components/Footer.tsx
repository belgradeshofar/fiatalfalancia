'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') return null; // Sakriva Footer ako smo na početnoj stranici

  return (
    <footer className="w-full bg-gray-800 text-white py-4 px-6 text-center fixed bottom-0">
      <p>&copy; {new Date().getFullYear()} Metapolis Center. Sva prava zadržana.</p>
    </footer>
  );
}
