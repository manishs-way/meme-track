import React from 'react';
import { ChainSquare } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ChainSquare className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold text-white">AIAchain</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Rules', 'Submit', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}