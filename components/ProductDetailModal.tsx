
import React, { useState } from 'react';
import type { LegalCase, GeneratedDocument } from '../types';
import { performLegalTask } from '../services/geminiService';

interface CaseDetailModalProps {
  legalCase: LegalCase | null;
  isOpen: boolean;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col justify-center items-center h-full text-slate-400">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-400"></div>
        <p className="mt-4 text-sm">JuriMind AI is thinking...</p>
    </div>
);

const GeneratedDocumentDisplay: React.FC<{ document: GeneratedDocument }> = ({ document }) => (
    <div className="mt-4 bg-slate-900/50 p-4 rounded-lg animate-fade-in prose prose-invert prose-sm max-w-none">
        <h4 className="text-lg font-bold text-cyan-400">{document.title}</h4>
        <div className="text-slate-300 mt-2" dangerouslySetInnerHTML={{ __html: document.content }} />
    </div>
);

const CaseDetailModal: React.FC<CaseDetailModalProps> = ({ legalCase, isOpen, onClose }) => {
  const [generatedDoc, setGeneratedDoc] = useState<GeneratedDocument | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !legalCase) return null;
  
  const handlePerformTask = async (task: string) => {
    setIsLoading(true);
    setError(null);
    setGeneratedDoc(null);
    try {
      const result = await performLegalTask(legalCase.fullText, task);
      setGeneratedDoc(result);
    } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClose = () => {
    onClose();
    setTimeout(() => {
        setGeneratedDoc(null);
        setError(null);
        setIsLoading(false);
    }, 300);
  };

  const aiTasks = [
    { label: "Summarize Document", task: "Provide a concise summary of this document, highlighting the key facts and legal issues." },
    { label: "Identify Key Arguments", task: "Identify and list the primary legal arguments for both the plaintiff/prosecution and the defendant." },
    { label: "Draft Motion Outline", task: "Create an outline for a motion to dismiss based on the provided facts." }
  ];

  return (
    <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
    >
      <div 
        className="bg-slate-800 text-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-mono text-cyan-400">{legalCase.caseNumber} - <span className="text-slate-400">{legalCase.status}</span></p>
                <h2 className="text-3xl font-bold mt-1">{legalCase.caseName}</h2>
              </div>
              <button onClick={handleClose} className="p-2 -mr-2 -mt-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="mt-4 prose prose-invert prose-sm max-w-none bg-slate-900 p-4 rounded-md">
                <h4 className="text-white">Case Document Text</h4>
                <p className="text-slate-300">{legalCase.fullText}</p>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-white">AI Analysis Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                    {aiTasks.map(t => (
                        <button 
                          key={t.label}
                          onClick={() => handlePerformTask(t.task)}
                          disabled={isLoading}
                          className="text-sm bg-slate-700 text-slate-200 font-semibold py-2 px-3 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {t.label}
                        </button>
                    ))}
                </div>
                
                <div className="mt-4 min-h-[10rem] flex flex-col justify-center">
                    {isLoading && <LoadingSpinner />}
                    {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md text-sm">{error}</p>}
                    {generatedDoc && <GeneratedDocumentDisplay document={generatedDoc} />}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailModal;
