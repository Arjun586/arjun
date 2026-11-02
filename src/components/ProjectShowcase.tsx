import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Github,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import type { ProjectCategoryFilter } from '../utils/portfolioLogic';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  totalCount: number;
  selectedCategory: ProjectCategoryFilter;
  onSelectCategory: (category: ProjectCategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeSkillFilter: string | null;
  onClearSkillFilter: () => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

const CATEGORY_TABS: { id: ProjectCategoryFilter; label: string }[] = [
  { id: 'All', label: 'All Projects' },
  { id: 'Featured', label: 'Featured' },
  { id: 'Full Stack', label: 'Full Stack' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Hackathon', label: 'Hackathon' },
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  totalCount,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeSkillFilter,
  onClearSkillFilter,
  onOpenCaseStudy,
}) => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory, searchQuery, activeSkillFilter]);

  const handleResetFilters = () => {
    onSelectCategory('All');
    onSearchChange('');
    onClearSkillFilter();
    setVisibleCount(4);
  };

  const displayedProjects =
    selectedCategory === 'All' ? projects.slice(0, visibleCount) : projects;
  const hasMoreProjects =
    selectedCategory === 'All' && projects.length > visibleCount;

  return (
    <section id="projects" className="scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D] mb-8">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          03. Projects
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">
          Showing {displayedProjects.length} of {totalCount} Projects
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
            Projects & System Case Studies
          </h2>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Full-stack applications, distributed backend systems, empirical benchmarks, and hackathon builds.
          </p>
        </div>
      </div>

      {/* Interactive Filter Bar & Search Input */}
      <div className="mb-8 p-4 bg-linen-50/70 dark:bg-espresso-850/70 border border-linen-border dark:border-espresso-border flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0"
          role="tablist"
          aria-label="Filter projects by category"
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
              placeholder="Search title, stack, CRDT, Redis..."
              className="w-full pl-8 pr-3 py-1.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border text-xs font-mono text-espresso-850 dark:text-[#EDEDEC] placeholder:text-espresso-muted focus:outline-none focus:border-espresso-850 dark:focus:border-white transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      {projects.length === 0 ? (
        <div className="p-12 border border-linen-border dark:border-espresso-border bg-linen-50/50 dark:bg-espresso-850/40 text-center space-y-3">
          <p className="font-editorial text-2xl text-espresso-850 dark:text-[#EDEDEC]">
            No projects match your current filter criteria.
          </p>
          <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
            Try clearing the search query or switching back to All Projects.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 flex flex-col justify-between hover:border-espresso-850 dark:hover:border-[#EDEDEC] transition-all duration-200 group animate-fade-up"
            >
              {/* Top Schematic Header */}
              <div className="p-5 border-b border-linen-border dark:border-espresso-border bg-linen-200/35 dark:bg-espresso-950/40">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-3 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                  <span className="whitespace-nowrap">
                    {project.category}
                    {project.featured ? ' · Featured' : ''}
                  </span>
                  <span className="text-espresso-850 dark:text-[#EDEDEC] font-medium whitespace-nowrap">
                    {project.status}
                  </span>
                </div>

                <div className="p-2.5 sm:p-3 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border font-mono text-xs relative overflow-hidden technical-grid">
                  <ProjectThumbnail project={project} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl text-espresso-850 dark:text-[#EDEDEC] group-hover:text-espresso-950 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                    {project.description}
                  </p>

                  {project.caseStudy?.outcome && (
                    <div className="p-3 bg-linen-100/90 dark:bg-espresso-900/90 border border-linen-border/80 dark:border-espresso-border font-mono text-xs space-y-1">
                      <div className="text-[11px] text-espresso-muted dark:text-[#9A948D]">
                        Engineering Outcome
                      </div>
                      <div className="text-xs font-sans text-espresso-850 dark:text-[#EDEDEC] leading-relaxed">
                        {project.caseStudy.outcome}
                      </div>
                    </div>
                  )}

                  {/* Clean Unboxed Technology Metadata */}
                  <div className="pt-1 flex flex-wrap items-center gap-y-1 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        {idx > 0 && (
                          <span aria-hidden="true" className="mx-2">
                            ·
                          </span>
                        )}
                        <span className="text-espresso-850 dark:text-[#EDEDEC] whitespace-nowrap">
                          {tech}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-linen-border/80 dark:border-espresso-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    {project.caseStudy && (
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        aria-label={`View case study for ${project.title}`}
                        className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((prev) => Math.min(prev + 4, projects.length))
                }
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-[#EDEDEC] transition-colors cursor-pointer"
              >
                <span>Show More Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
