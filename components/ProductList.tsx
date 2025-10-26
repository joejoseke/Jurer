
import React from 'react';
import type { LegalCase } from '../types';
import CaseCard from './ProductCard'; // The file name is still ProductCard.tsx

interface CaseListProps {
  cases: LegalCase[];
  onCaseClick: (legalCase: LegalCase) => void;
}

const CaseList: React.FC<CaseListProps> = ({ cases, onCaseClick }) => {
  if (cases.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="mx-auto h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-white">No cases found</h3>
        <p className="mt-1 text-sm text-slate-400">Your search did not match any cases.</p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {cases.map(legalCase => (
        <CaseCard
          key={legalCase.id} 
          legalCase={legalCase} 
          onViewDetails={onCaseClick}
        />
      ))}
    </div>
  );
};

export default CaseList;
