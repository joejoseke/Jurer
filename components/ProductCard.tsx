
import React from 'react';
import type { LegalCase } from '../types';

interface CaseCardProps {
  legalCase: LegalCase;
  onViewDetails: (legalCase: LegalCase) => void;
}

const statusColors = {
  Active: 'bg-green-500/20 text-green-400',
  Closed: 'bg-red-500/20 text-red-400',
  Appealed: 'bg-yellow-500/20 text-yellow-400',
};

const CaseCard: React.FC<CaseCardProps> = ({ legalCase, onViewDetails }) => {
  return (
    <div 
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col group hover:ring-1 hover:ring-slate-700 cursor-pointer"
      onClick={() => onViewDetails(legalCase)}
    >
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <p className="text-sm font-mono text-slate-400">{legalCase.caseNumber}</p>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[legalCase.status]}`}>{legalCase.status}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-cyan-400 transition-colors">{legalCase.caseName}</h3>
        <p className="text-slate-400 text-sm mt-2 flex-grow">{legalCase.summary}</p>
        <div className="mt-4 border-t border-slate-700 pt-3 text-right">
          <span
            className="text-cyan-400 font-semibold text-sm"
          >
            Analyze Case &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
