import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import type { LoadTier, ProjectItem } from '../data/portfolioData';
import { computeBenchmarkSummary } from '../utils/portfolioLogic';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  loadTier: LoadTier;
  onChangeLoadTier: (tier: LoadTier) => void;
  onClose: () => void;
}

const LOAD_TIERS: { id: LoadTier; label: string }[] = [
  { id: 'baseline', label: '1x Baseline Load' },
  { id: 'burst', label: '10x Burst Load' },
  { id: 'stress', label: '50x Stress Load' },
];

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  loadTier,
  onChangeLoadTier,
  onClose,
}) => {
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

  if (!project) return null;

  const benchSummary = computeBenchmarkSummary(project, loadTier);

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-950/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 md:p-10 flex justify-center items-start"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      <div
        className="bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border w-full max-w-4xl shadow-2xl my-auto animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
          {/* Sticky Modal Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-linen-border dark:border-espresso-border bg-linen-100/95 dark:bg-espresso-900/95 backdrop-blur-md">
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

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Header Block */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                <span>{project.refCode}</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span>{project.categoryLabel}</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {project.statusLabel}
                </span>
              </div>

              <h2
                id="modal-case-title"
                className="font-editorial text-3xl sm:text-5xl text-espresso-850 dark:text-[#EDEDEC] leading-tight"
              >
                {project.shortTitle}
              </h2>

              <p className="text-base text-espresso-850/85 dark:text-[#D1CBC5] max-w-2xl leading-relaxed">
                {project.detailedDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-espresso-850 dark:text-[#EDEDEC] font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  <span>Live Benchmark Lab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC]"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Architecture Data-Flow Schematic */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono text-espresso-muted dark:text-[#9A948D]">
                <span>System Data-Flow Architecture</span>
                <span>4-Stage Pipeline</span>
              </div>

              <div className="p-6 bg-linen-200/50 dark:bg-espresso-950 border border-linen-border dark:border-espresso-border technical-grid">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs">
                  {project.flowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 bg-linen-50 dark:bg-espresso-850 border border-linen-border dark:border-espresso-border"
                    >
                      <div className="text-[11px] text-espresso-muted dark:text-[#9A948D] mb-1">
                        {step.step}
                      </div>
                      <div className="font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-espresso-muted dark:text-[#9A948D] mt-1.5">
                        {step.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Latency & Throughput Benchmark Simulator */}
            <div className="p-6 bg-linen-50/80 dark:bg-espresso-850/80 border border-linen-border dark:border-espresso-border space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                    Interactive Benchmark Telemetry (P50 / P99 Latency & Throughput)
                  </h3>
                  <p className="font-sans text-xs text-espresso-muted dark:text-[#9A948D] mt-0.5">
                    Switch concurrency load profiles to inspect empirical latency scaling.
                  </p>
                </div>

                <div
                  className="inline-flex items-center p-1 bg-linen-200 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border rounded"
                  role="group"
                  aria-label="Modal benchmark load tier"
                >
                  {LOAD_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => onChangeLoadTier(tier.id)}
                      aria-pressed={loadTier === tier.id}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        loadTier === tier.id
                          ? 'bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 font-semibold'
                          : 'text-espresso-muted hover:text-espresso-850 dark:hover:text-white'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {benchSummary.metrics.map((metric) => {
                  const widthPercent = Math.min(
                    100,
                    Math.max(10, Math.round((metric.p99Ms / benchSummary.maxP99Ms) * 100))
                  );
                  return (
                    <div key={metric.label} className="space-y-1.5 font-mono text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                          {metric.label}{' '}
                          <span className="font-normal text-espresso-muted dark:text-[#9A948D]">
                            · {metric.note}
                          </span>
                        </span>
                        <span className="tabular-nums text-espresso-850 dark:text-[#EDEDEC]">
                          P50: {metric.p50Ms}ms · P99: <strong>{metric.p99Ms}ms</strong> ·{' '}
                          {metric.throughputRps.toLocaleString()} req/s
                        </span>
                      </div>
                      <div className="h-2 w-full bg-linen-200 dark:bg-espresso-900 overflow-hidden">
                        <div
                          style={{ width: `${widthPercent}%` }}
                          className="h-full bg-espresso-850 dark:bg-[#EDEDEC] transition-all duration-300 ease-out"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Challenge & Constraints Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-linen-border dark:border-espresso-border bg-linen-50/50 dark:bg-espresso-850/40 space-y-2">
                <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
                  The Engineering Challenge
                </span>
                <h4 className="font-mono text-sm font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                  {project.challengeTitle}
                </h4>
                <p className="text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                  {project.challengeBody}
                </p>
              </div>

              <div className="p-5 border border-linen-border dark:border-espresso-border bg-linen-50/50 dark:bg-espresso-850/40 space-y-2">
                <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
                  System Constraints
                </span>
                <h4 className="font-mono text-sm font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                  {project.constraintsTitle}
                </h4>
                <p className="text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                  {project.constraintsBody}
                </p>
              </div>
            </div>

            {/* Key Technical Decisions & Trade-offs */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                Key Technical Decisions & Architectural Trade-Offs
              </h3>

              <ul className="space-y-3 font-sans text-xs">
                {project.decisions.map((decision) => (
                  <li
                    key={decision.id}
                    className="p-4 border border-linen-border dark:border-espresso-border bg-linen-200/35 dark:bg-espresso-800/40 space-y-1.5"
                  >
                    <div className="font-mono font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                      {decision.title}
                    </div>
                    <p className="text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                      {decision.tradeoff}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Utilized (Clean Unboxed Metadata) */}
            <div className="pt-4 border-t border-linen-border dark:border-espresso-border space-y-2">
              <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
                Technologies Utilized
              </span>
              <div className="font-mono text-xs text-espresso-850 dark:text-[#EDEDEC]">
                {project.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="mx-2 text-espresso-muted">
                        ·
                      </span>
                    )}
                    <span>{tag}</span>
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
              <span className="text-espresso-muted">Architecture Specification Report</span>
            </div>
          </div>
        </div>
      </div>
  );
};
