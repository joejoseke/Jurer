
import React from 'react';

interface HeaderProps {
  onSearch: (term: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <svg className="h-8 w-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25V18m0 0a2.25 2.25 0 002.25 2.25h0A2.25 2.25 0 0016.5 18v-1.5a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 01-2.25-2.25V8.25m0 0A2.25 2.25 0 017.5 6h0A2.25 2.25 0 019.75 8.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5A2.25 2.25 0 003.75 12V6.75A2.25 2.25 0 016 4.5h12A2.25 2.25 0 0120.25 6.75v8.25A2.25 2.25 0 0118 17.25h-2.25a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H9.75" />
            </svg>
            <h1 className="text-2xl font-bold text-white">JuriMind AI</h1>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
             <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative text-slate-400 focus-within:text-slate-200">
                   <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                       <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                       </svg>
                   </div>
                   <input
                       id="search"
                       className="block w-full bg-slate-800 border border-slate-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm"
                       placeholder="Search cases..."
                       type="search"
                       name="search"
                       value={searchQuery}
                       onChange={(e) => onSearch(e.target.value)}
                   />
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
