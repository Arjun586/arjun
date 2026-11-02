import React, { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import {
  EXPERIENCE_DATA,
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-950/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 md:p-10 flex justify-center items-start"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="bg-linen-50 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border w-full max-w-3xl shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-linen-border dark:border-espresso-border bg-linen-100/95 dark:bg-espresso-900/95 backdrop-blur-md">
          <span
            id="resume-modal-title"
            className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]"
          >
            Curriculum Vitae · {PROFILE_DATA.name} ({PROFILE_DATA.version})
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 font-mono text-xs bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded hover:bg-linen-200 dark:hover:bg-espresso-800 text-espresso-muted hover:text-espresso-850 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 space-y-8 text-espresso-850 dark:text-[#EDEDEC]">
          <div className="border-b border-linen-border dark:border-espresso-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-editorial text-4xl font-bold">{PROFILE_DATA.name}</h2>
              <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] mt-1">
                {PROFILE_DATA.roleTitle} · {PROFILE_DATA.subheadline}
              </p>
            </div>
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] sm:text-right space-y-0.5">
              <div>{PROFILE_DATA.email}</div>
              <div>{PROFILE_DATA.location}</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              01. Experience
            </h3>
            <div className="space-y-5">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-wrap justify-between font-mono text-xs">
                    <span className="font-semibold">
                      {exp.role} — {exp.company} ({exp.location})
                    </span>
                    <span className="text-espresso-muted tabular-nums">{exp.period}</span>
                  </div>
                  <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                    {exp.summary} {exp.architectureNote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Systems & Projects */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              02. Selected Engineering Systems
            </h3>
            <div className="space-y-4">
              {PROJECTS_DATA.map((prj) => (
                <div key={prj.id} className="space-y-1">
                  <div className="flex flex-wrap justify-between font-mono text-xs">
                    <span className="font-semibold">{prj.shortTitle}</span>
                    <span className="text-espresso-muted">{prj.tags.join(' · ')}</span>
                  </div>
                  <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                    {prj.detailedDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Technical Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-linen-border dark:border-espresso-border">
            <div>
              <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D] mb-2">
                03. Education
              </h3>
              <div className="font-sans text-xs font-semibold">
                {PROFILE_DATA.education.degree}
              </div>
              <div className="font-mono text-xs text-espresso-muted mt-1">
                {PROFILE_DATA.education.coursework}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D] mb-2">
                04. Core Stack
              </h3>
              <div className="font-mono text-xs text-espresso-850/90 dark:text-[#C4BEB7] leading-relaxed">
                {SKILLS_DATA.flatMap((s) => s.skills).join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
