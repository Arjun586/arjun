import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, Copy, ExternalLink, Github, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  const handleCopyCode = (code: string, idx: number) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-950/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      <div
        className="bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Modal Header Bar */}
        <div className="shrink-0 z-10 flex items-center justify-between px-6 py-4 border-b border-linen-border dark:border-espresso-border bg-linen-100 dark:bg-espresso-900">
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Directory</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-1.5 rounded hover:bg-linen-200 dark:hover:bg-espresso-800 text-espresso-muted hover:text-espresso-850 dark:hover:text-[#EDEDEC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Header Block */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              <span>{project.category}</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                {project.status}
              </span>
            </div>

            <h2
              id="modal-case-title"
              className="font-editorial text-3xl sm:text-5xl text-espresso-850 dark:text-[#EDEDEC] leading-tight"
            >
              {project.title}
            </h2>

            <p className="text-base text-espresso-850/85 dark:text-[#D1CBC5] max-w-3xl leading-relaxed">
              {caseStudy.brief}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-espresso-850 dark:text-[#EDEDEC] font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Challenge & Outcome Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/50 space-y-2">
              <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
                The Engineering Challenge
              </span>
              <p className="text-xs sm:text-sm text-espresso-850/90 dark:text-[#C4BEB7] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/50 space-y-2">
              <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 block">
                System Outcome
              </span>
              <p className="text-xs sm:text-sm text-espresso-850/90 dark:text-[#C4BEB7] leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* Architecture & Key Focus */}
          {(caseStudy.architecture || caseStudy.keyFocus) && (
            <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 space-y-4">
              {caseStudy.architecture && (
                <div className="space-y-1.5">
                  <h3 className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                    System Architecture Overview
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso-850/90 dark:text-[#D1CBC5] leading-relaxed">
                    {caseStudy.architecture}
                  </p>
                </div>
              )}

              {caseStudy.keyFocus && caseStudy.keyFocus.length > 0 && (
                <div className="pt-3 border-t border-linen-border/70 dark:border-espresso-border space-y-2">
                  <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
                    Key Architectural Focus Areas
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-espresso-850 dark:text-[#EDEDEC]">
                    {caseStudy.keyFocus.map((focus, idx) => (
                      <div key={focus} className="flex items-baseline gap-2">
                        <span className="text-espresso-muted tabular-nums">
                          0{idx + 1}.
                        </span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Core Approach Pillars */}
          {caseStudy.approach && caseStudy.approach.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                Engineering Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.approach.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-4 border border-linen-border dark:border-espresso-border bg-linen-50/50 dark:bg-espresso-850/40 space-y-1.5"
                  >
                    <div className="font-mono text-[11px] text-espresso-muted tabular-nums">
                      0{idx + 1}
                    </div>
                    <h4 className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep-Dive Sections (Diagrams, Tables, Code Snippets, Bullets) */}
          <div className="space-y-8">
            {caseStudy.sections.map((sec, secIdx) => (
              <div
                key={sec.heading}
                className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/40 dark:bg-espresso-850/30 space-y-4"
              >
                <div className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                  0{secIdx + 1}. {sec.heading}
                </div>

                <p className="font-sans text-xs sm:text-sm text-espresso-850/85 dark:text-[#D1CBC5] leading-relaxed">
                  {sec.body}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-1.5 text-xs font-sans text-espresso-850/85 dark:text-[#C4BEB7] list-disc pl-5">
                    {sec.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {sec.diagram && (
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[11px] text-espresso-muted dark:text-[#9A948D]">
                      {sec.diagram.caption}
                    </div>
                    <pre className="p-4 bg-linen-200/70 dark:bg-espresso-950 border border-linen-border dark:border-espresso-border font-mono text-[11px] leading-snug text-espresso-850 dark:text-[#EDEDEC] overflow-x-auto">
                      {sec.diagram.ascii}
                    </pre>
                  </div>
                )}

                {sec.table && (
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[11px] text-espresso-muted dark:text-[#9A948D]">
                      {sec.table.caption}
                    </div>
                    <div className="overflow-x-auto border border-linen-border dark:border-espresso-border">
                      <table className="w-full text-left font-mono text-xs border-collapse">
                        <thead>
                          <tr className="bg-linen-200/80 dark:bg-espresso-950 border-b border-linen-border dark:border-espresso-border">
                            {sec.table.headers.map((header) => (
                              <th
                                key={header}
                                className="p-2.5 font-semibold text-espresso-850 dark:text-[#EDEDEC] whitespace-nowrap"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-linen-border/70 dark:divide-espresso-border">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="bg-linen-50/70 dark:bg-espresso-900/70"
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className="p-2.5 text-espresso-850/90 dark:text-[#D1CBC5] align-top tabular-nums"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {sec.codeSnippet && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between font-mono text-[11px] text-espresso-muted dark:text-[#9A948D]">
                      <span>Implementation ({sec.codeSnippet.language})</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyCode(sec.codeSnippet!.code, secIdx)
                        }
                        className="inline-flex items-center gap-1 text-espresso-850 dark:text-[#EDEDEC] hover:underline cursor-pointer"
                      >
                        {copiedCodeIdx === secIdx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Snippet</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 bg-linen-200/70 dark:bg-espresso-950 border border-linen-border dark:border-espresso-border font-mono text-[11px] leading-relaxed text-espresso-850 dark:text-[#EDEDEC] overflow-x-auto">
                      <code>{sec.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technologies Utilized */}
          <div className="pt-4 border-t border-linen-border dark:border-espresso-border space-y-2">
            <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
              Technologies Utilized
            </span>
            <div className="flex flex-wrap items-center gap-y-1 font-mono text-xs text-espresso-850 dark:text-[#EDEDEC]">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  {idx > 0 && (
                    <span aria-hidden="true" className="mx-2 text-espresso-muted">
                      ·
                    </span>
                  )}
                  <span className="whitespace-nowrap">{tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-linen-border dark:border-espresso-border flex justify-between items-center font-mono text-xs">
            <button
              type="button"
              onClick={onClose}
              className="font-semibold text-espresso-850 dark:text-[#EDEDEC] hover:underline cursor-pointer"
            >
              ← Return to Projects
            </button>
            <span className="text-espresso-muted">{project.title} Case Study</span>
          </div>
        </div>
      </div>
    </div>
  );
};
