import React, { useEffect } from 'react';
import { Download, ExternalLink, Printer, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, experience, projects, skills, contact } =
    PORTFOLIO_DATA;

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
      className="fixed inset-0 z-50 bg-espresso-950/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="bg-linen-50 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="shrink-0 z-10 flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-linen-border dark:border-espresso-border bg-linen-100 dark:bg-espresso-900">
          <span
            id="resume-modal-title"
            className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]"
          >
            Curriculum Vitae · {personal.name} ({personal.title})
          </span>
          <div className="flex items-center gap-2">
            <a
              href={contact.resume.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 font-mono text-xs border border-linen-border dark:border-espresso-border bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] inline-flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Google Drive</span>
            </a>
            <a
              href={contact.resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 font-mono text-xs border border-linen-border dark:border-espresso-border bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 font-mono text-xs bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-espresso-850 dark:text-[#EDEDEC]">
          <div className="border-b border-linen-border dark:border-espresso-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-editorial text-4xl font-bold uppercase">
                {personal.name}
              </h2>
              <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] mt-1">
                {personal.title} · {personal.discipline}
              </p>
            </div>
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] sm:text-right space-y-0.5">
              <div>{contact.email}</div>
              <div>{personal.location}</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              01. Education
            </h3>
            <div className="flex flex-wrap justify-between font-mono text-xs">
              <span className="font-semibold">
                {education.degree} — {education.institution}
              </span>
              <span className="text-espresso-muted tabular-nums">
                {education.period} · {education.location}
              </span>
            </div>
            <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7]">
              {education.fieldOfStudy}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              02. Work Experience
            </h3>
            <div className="space-y-5">
              {experience.workExperience.map((exp) => (
                <div key={`${exp.company}-${exp.duration}`} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between font-mono text-xs">
                    <span className="font-semibold">
                      {exp.role} — {exp.company} ({exp.location})
                    </span>
                    <span className="text-espresso-muted tabular-nums">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc pl-4 font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] space-y-1">
                    {exp.contributions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              03. Featured Projects
            </h3>
            <div className="space-y-4">
              {projects
                .filter((p) => p.featured)
                .map((prj) => (
                  <div key={prj.id} className="space-y-1">
                    <div className="flex flex-wrap justify-between font-mono text-xs">
                      <span className="font-semibold">{prj.title}</span>
                      <span className="text-espresso-muted">
                        {prj.technologies.join(' · ')}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                      {prj.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="pt-4 border-t border-linen-border dark:border-espresso-border space-y-2">
            <h3 className="font-mono text-xs font-semibold text-espresso-muted dark:text-[#9A948D]">
              04. Technical Skills & CS Foundations
            </h3>
            <div className="font-mono text-xs text-espresso-850/90 dark:text-[#C4BEB7] leading-relaxed space-y-1">
              {Object.entries(skills.categories).map(([cat, list]) => (
                <div key={cat}>
                  <span className="font-semibold">{cat}:</span> {list.join(' · ')}
                </div>
              ))}
              <div>
                <span className="font-semibold">CS Foundations:</span>{' '}
                {skills.csFoundations.map((c) => c.concept).join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
