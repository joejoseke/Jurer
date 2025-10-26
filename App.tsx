
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CaseList from './components/ProductList'; // The filename is ProductList.tsx
import CaseDetailModal from './components/ProductDetailModal'; // The filename is ProductDetailModal.tsx
import { LEGAL_CASES } from './constants';
import type { LegalCase } from './types';

const App: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<LegalCase | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease-in-out;
      }
      @keyframes fade-in-scale {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fade-in-scale {
        animation: fade-in-scale 0.3s ease-in-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleCaseClick = (legalCase: LegalCase) => {
    setSelectedCase(legalCase);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  const filteredCases = useMemo(() => {
    return LEGAL_CASES.filter(legalCase =>
      legalCase.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      legalCase.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      legalCase.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header 
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">Case Dashboard</h2>
            <span className="text-sm font-medium text-slate-400">{filteredCases.length} of {LEGAL_CASES.length} cases showing</span>
        </div>
        <CaseList 
          cases={filteredCases}
          onCaseClick={handleCaseClick}
        />
      </main>
      <CaseDetailModal
        isOpen={!!selectedCase}
        onClose={closeModal}
        legalCase={selectedCase}
      />
    </div>
  );
};

export default App;
