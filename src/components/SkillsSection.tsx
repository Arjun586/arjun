import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

interface SkillsSectionProps {
  activeSkillFilter: string | null;
  onToggleSkillFilter: (skill: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  activeSkillFilter,
  onToggleSkillFilter,
}) => {
  return (
    <section id="skills" className="scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D] mb-8">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          05. Technical Competencies & Toolkit
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">04 Architectural Layers</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
            Core Technical Stack
          </h2>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Organized by runtime layer. Select any technology below to filter related engineering projects above.
          </p>
        </div>
        {activeSkillFilter && (
          <button
            type="button"
            onClick={() => onToggleSkillFilter(activeSkillFilter)}
            className="font-mono text-xs text-espresso-850 dark:text-[#EDEDEC] underline underline-offset-4 self-start md:self-auto cursor-pointer"
          >
            Clear active filter ({activeSkillFilter})
          </button>
        )}
      </div>

      {/* Categorized Layer Matrix */}
      <div className="border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 divide-y divide-linen-border dark:divide-espresso-border">
        {SKILLS_DATA.map((group) => (
          <div
            key={group.id}
            className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            <div className="md:col-span-4 font-mono text-xs">
              <span className="text-espresso-muted dark:text-[#9A948D] block text-[11px]">
                {group.layerCode}
              </span>
              <h3 className="font-semibold text-sm text-espresso-850 dark:text-[#EDEDEC] mt-0.5">
                {group.title}
              </h3>
            </div>

            <div className="md:col-span-8 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const isSelected = activeSkillFilter === skill;
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      onToggleSkillFilter(skill);
                      const projectsEl = document.getElementById('projects');
                      if (projectsEl && !isSelected) {
                        projectsEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    aria-pressed={isSelected}
                    className={`px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 border-espresso-850 dark:border-white font-semibold'
                        : 'bg-linen-200/75 dark:bg-espresso-800 text-espresso-850 dark:text-[#EDEDEC] border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-[#EDEDEC]'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
