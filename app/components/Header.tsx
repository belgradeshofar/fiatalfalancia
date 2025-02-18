'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  if (pathname === '/') return null; // Sakriva Header ako smo na početnoj stranici

  return (
    <header className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center fixed top-0">
      <h1 className="text-2xl font-bold">Metapolis Center</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-green-400">Početna</Link></li>
          <li><Link href="/about" className="hover:text-green-400">O Nama</Link></li>
          <li><Link href="/projects" className="hover:text-green-400">Projekti</Link></li>
          <li><Link href="/contact" className="hover:text-green-400">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}
