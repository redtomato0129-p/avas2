'use client';

import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname?.includes('/dashboard');

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Github className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AI Agents</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {!isDashboard ? (
              <>
                <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
                <Link href="/dashboard" passHref>
                  <Button>Go to Dashboard</Button>
                </Link>
              </>
            ) : (
              <Link href="/" className="text-gray-600 hover:text-indigo-600">
                Back to Landing Page
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isDashboard ? (
              <>
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
                <Link href="/dashboard" className="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Go to Dashboard
                </Link>
              </>
            ) : (
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
                Back to Landing Page
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}