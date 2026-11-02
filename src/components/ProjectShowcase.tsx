import React from 'react';
import { ArrowUpRight, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react';
import type { LoadTier, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { computeBenchmarkSummary } from '../utils/portfolioLogic';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  totalCount: number;
  selectedCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeSkillFilter: string | null;
  onClearSkillFilter: () => void;
  loadTier: LoadTier;
  onChangeLoadTier: (tier: LoadTier) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

const CATEGORY_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'search-db', label: 'Database & Search' },
  { id: 'distributed-queues', label: 'Distributed Queues' },
  { id: 'realtime-sync', label: 'Real-Time & Sync' },
  { id: 'concurrency-edge', label: 'Concurrency & Edge' },
];

const LOAD_TIERS: { id: LoadTier; label: string }[] = [
  { id: 'baseline', label: '1x Baseline' },
  { id: 'burst', label: '10x Burst' },
  { id: 'stress', label: '50x Stress' },
];

const DiagramGraphic: React.FC<{ type: ProjectItem['diagramType'] }> = ({ type }) => {
  if (type === 'search-compare') {
    return (
      <svg className="w-full h-24" viewBox="0 0 440 90" fill="none" aria-hidden="true">
        <rect
          x="10"
          y="25"
          width="82"
          height="40"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="51" y="43" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          100K DOCS
        </text>
        <text x="51" y="55" fontSize="7.5" textAnchor="middle" className="fill-espresso-muted font-mono">
          Ingest Pool
        </text>

        <rect
          x="138"
          y="25"
          width="98"
          height="40"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="187" y="43" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          PG TRIGRAMS
        </text>
        <text x="187" y="55" fontSize="7.5" textAnchor="middle" className="fill-espresso-muted font-mono">
          GIN / GiST Index
        </text>

        <rect
          x="284"
          y="10"
          width="144"
          height="32"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="356" y="25" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          POSTGRES FTS
        </text>
        <text x="356" y="36" fontSize="7" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-mono">
          tsvector · GIN Index
        </text>

        <rect
          x="284"
          y="50"
          width="144"
          height="32"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="356" y="65" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          ELASTICSEARCH
        </text>
        <text x="356" y="76" fontSize="7" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 font-mono">
          BM25 Inverted Index
        </text>

        <path d="M92 45 L138 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
        <path d="M236 40 L260 40 L260 26 L284 26" stroke="#7A7570" strokeWidth="1.2" />
        <path d="M236 50 L260 50 L260 66 L284 66" stroke="#7A7570" strokeWidth="1.2" />
      </svg>
    );
  }

  if (type === 'stream-queue') {
    return (
      <svg className="w-full h-24" viewBox="0 0 440 90" fill="none" aria-hidden="true">
        <rect
          x="10"
          y="25"
          width="85"
          height="40"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="52" y="43" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          INGEST API
        </text>
        <text x="52" y="55" fontSize="7.5" textAnchor="middle" className="fill-espresso-muted font-mono">
          HTTP Producer
        </text>

        <rect
          x="135"
          y="20"
          width="130"
          height="50"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="200" y="42" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          REDIS STREAMS
        </text>
        <text x="200" y="55" fontSize="7.5" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-mono">
          XADD / XREADGROUP
        </text>

        <rect
          x="305"
          y="10"
          width="122"
          height="32"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="366" y="25" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          WORKER POOL A
        </text>
        <text x="366" y="36" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
          Consumer ACK
        </text>

        <rect
          x="305"
          y="50"
          width="122"
          height="32"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="366" y="65" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          WORKER POOL B
        </text>
        <text x="366" y="76" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
          Postgres Outbox
        </text>

        <path d="M95 45 L135 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
        <path d="M265 40 L285 40 L285 26 L305 26" stroke="#7A7570" strokeWidth="1.2" />
        <path d="M265 50 L285 50 L285 66 L305 66" stroke="#7A7570" strokeWidth="1.2" />
      </svg>
    );
  }

  if (type === 'websocket-mesh') {
    return (
      <svg className="w-full h-24" viewBox="0 0 440 90" fill="none" aria-hidden="true">
        <rect
          x="10"
          y="25"
          width="88"
          height="40"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="54" y="43" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          CLIENT PEERS
        </text>
        <text x="54" y="55" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
          Binary Delta
        </text>

        <rect
          x="142"
          y="20"
          width="136"
          height="50"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="210" y="42" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          WEBSOCKET MESH
        </text>
        <text x="210" y="55" fontSize="7.5" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-mono">
          State Vector CRDT
        </text>

        <rect
          x="316"
          y="25"
          width="112"
          height="40"
          rx="3"
          className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
          strokeWidth="1.2"
        />
        <text x="372" y="43" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
          SNAPSHOT STORE
        </text>
        <text x="372" y="55" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
          Zero-Lock Merge
        </text>

        <path d="M98 45 L142 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
        <path d="M278 45 L316 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
      </svg>
    );
  }

  return (
    <svg className="w-full h-24" viewBox="0 0 440 90" fill="none" aria-hidden="true">
      <rect
        x="10"
        y="25"
        width="88"
        height="40"
        rx="3"
        className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
        strokeWidth="1.2"
      />
      <text x="54" y="43" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
        EDGE GATEWAY
      </text>
      <text x="54" y="55" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
        HTTP Request
      </text>

      <rect
        x="142"
        y="20"
        width="136"
        height="50"
        rx="3"
        className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
        strokeWidth="1.2"
      />
      <text x="210" y="42" fontSize="9" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
        REDIS EVALSHA
      </text>
      <text x="210" y="55" fontSize="7.5" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-mono">
        Atomic Lua Script
      </text>

      <rect
        x="316"
        y="25"
        width="112"
        height="40"
        rx="3"
        className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
        strokeWidth="1.2"
      />
      <text x="372" y="43" fontSize="8.5" textAnchor="middle" className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono">
        QUOTA VERDICT
      </text>
      <text x="372" y="55" fontSize="7" textAnchor="middle" className="fill-espresso-muted font-mono">
        0.42ms Overhead
      </text>

      <path d="M98 45 L142 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
      <path d="M278 45 L316 45" stroke="#7A7570" strokeWidth="1.2" className="wire-line" />
    </svg>
  );
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  totalCount,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeSkillFilter,
  onClearSkillFilter,
  loadTier,
  onChangeLoadTier,
  onOpenCaseStudy,
}) => {
  const handleResetFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    onClearSkillFilter();
  };

  return (
    <section id="projects" className="scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D] mb-8">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          04. Technical Experiments & Systems
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">
          Showing {projects.length} of {totalCount} Systems
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
            Featured Engineering Projects
          </h2>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Production systems, stress-tested architectures, and interactive benchmarking laboratories.
          </p>
        </div>

        {/* Live Benchmark Load Tier Switcher */}
        <div className="flex items-center gap-2 self-start lg:self-auto">
          <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] flex items-center gap-1.5 whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Load Profile:</span>
          </span>
          <div
            className="inline-flex items-center p-1 bg-linen-200/80 dark:bg-espresso-800 border border-linen-border dark:border-espresso-border rounded-md"
            role="group"
            aria-label="Simulate system benchmark load tier"
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
                    : 'text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Filter Bar & Search Input */}
      <div className="mb-8 p-4 bg-linen-50/70 dark:bg-espresso-850/70 border border-linen-border dark:border-espresso-border flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Segmented Category Filter Buttons */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0"
          role="tablist"
          aria-label="Filter projects by architectural category"
        >
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 font-semibold'
                    : 'bg-linen-200/60 dark:bg-espresso-800/60 text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input + Active Skill Filter Clear */}
        <div className="flex items-center gap-2">
          {activeSkillFilter && (
            <button
              type="button"
              onClick={onClearSkillFilter}
              aria-label={`Clear skill filter ${activeSkillFilter}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs bg-linen-200 dark:bg-espresso-800 text-espresso-850 dark:text-[#EDEDEC] border border-linen-border dark:border-espresso-border whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Skill: {activeSkillFilter}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-espresso-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search engineering projects"
              placeholder="Search stack, index, CRDT..."
              className="w-full pl-8 pr-3 py-1.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border text-xs font-mono text-espresso-850 dark:text-[#EDEDEC] placeholder:text-espresso-muted focus:outline-none focus:border-espresso-850 dark:focus:border-white transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      {projects.length === 0 ? (
        <div className="p-12 border border-linen-border dark:border-espresso-border bg-linen-50/50 dark:bg-espresso-850/40 text-center space-y-3">
          <p className="font-editorial text-2xl text-espresso-850 dark:text-[#EDEDEC]">
            No engineering systems match your current filter criteria.
          </p>
          <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
            Try clearing the search query or switching back to All Systems.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Project Filters</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => {
            const bench = computeBenchmarkSummary(project, loadTier);
            return (
              <article
                key={project.id}
                className="border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 flex flex-col justify-between hover:border-espresso-850 dark:hover:border-[#EDEDEC] transition-all duration-200 group animate-fade-up"
              >
                {/* Top Architecture Diagram Header */}
                <div className="p-5 border-b border-linen-border dark:border-espresso-border bg-linen-200/35 dark:bg-espresso-950/40">
                  {/* Quiet 1-line text kicker with typographic separators */}
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-3 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                    <span className="whitespace-nowrap">
                      {project.refCode} · {project.categoryLabel}
                    </span>
                    <span className="text-espresso-850 dark:text-[#EDEDEC] font-medium whitespace-nowrap">
                      {project.statusLabel}
                    </span>
                  </div>

                  {/* Schematic Box */}
                  <div className="p-3 sm:p-4 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border font-mono text-xs relative overflow-hidden technical-grid">
                    <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] text-espresso-muted dark:text-[#9A948D] mb-2">
                      <span>{project.diagramHeaderLeft}</span>
                      <span>{project.diagramHeaderRight}</span>
                    </div>
                    <DiagramGraphic type={project.diagramType} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-editorial text-2xl text-espresso-850 dark:text-[#EDEDEC] group-hover:text-espresso-950 dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Live Telemetry Snapshot for Selected Load Tier */}
                    {bench.fastestP99 && (
                      <div className="p-3 bg-linen-100/90 dark:bg-espresso-900/90 border border-linen-border/80 dark:border-espresso-border font-mono text-xs space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-espresso-muted dark:text-[#9A948D]">
                          <span className="whitespace-nowrap">
                            Telemetry ({loadTier.toUpperCase()})
                          </span>
                          <span className="tabular-nums text-emerald-700 dark:text-emerald-400 font-medium whitespace-nowrap">
                            Best P99: {bench.fastestP99.p99Ms} ms
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-espresso-850 dark:text-[#EDEDEC] tabular-nums">
                          <span>{bench.fastestP99.label}</span>
                          <span className="whitespace-nowrap">
                            {bench.fastestP99.throughputRps.toLocaleString()} req/s
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Clean Unboxed Technology Metadata */}
                    <div className="pt-1 flex flex-wrap items-center gap-y-1 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                      {project.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && (
                            <span aria-hidden="true" className="mx-2">
                              ·
                            </span>
                          )}
                          <span className="text-espresso-850 dark:text-[#EDEDEC] whitespace-nowrap">
                            {tag}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 border-t border-linen-border/80 dark:border-espresso-border flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project)}
                      aria-label={`View case study for ${project.title}`}
                      className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs text-espresso-muted tabular-nums">
                      {project.year}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
