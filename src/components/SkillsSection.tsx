import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SkillsSectionProps {
  activeSkillFilter: string | null;
  onToggleSkillFilter: (skill: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  activeSkillFilter,
  onToggleSkillFilter,
}) => {
  const { skills } = PORTFOLIO_DATA;
  const categoryEntries = Object.entries(skills.categories);

  return (
    <section id="skills" className="scroll-mt-16 space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          04. Skills & CS
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">
          {categoryEntries.length} Categories · {skills.csFoundations.length} CS Foundations
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
            Core Technical Stack
          </h2>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Select any technology below to filter matching projects in the showcase above.
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
        {categoryEntries.map(([categoryName, skillList], idx) => (
          <div
            key={categoryName}
            className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            <div className="md:col-span-4 font-mono text-xs">
              <span className="text-espresso-muted dark:text-[#9A948D] block text-[11px] tabular-nums">
                Layer 0{idx + 1}
              </span>
              <h3 className="font-semibold text-sm text-espresso-850 dark:text-[#EDEDEC] mt-0.5">
                {categoryName}
              </h3>
            </div>

            <div className="md:col-span-8 flex flex-wrap gap-2">
              {skillList.map((skill) => {
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

      {/* CS Foundations Section from skills.csFoundations */}
      <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 space-y-4">
        <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
          04.1 · Computer Science Foundations
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.csFoundations.map((item, idx) => (
            <div
              key={item.concept}
              className="p-4 bg-linen-100/80 dark:bg-espresso-900/80 border border-linen-border/80 dark:border-espresso-border flex items-center justify-between gap-3 font-mono text-xs"
            >
              <span className="text-espresso-850 dark:text-[#EDEDEC] font-medium">
                <span className="text-espresso-muted mr-1.5 tabular-nums">
                  0{idx + 1}.
                </span>
                {item.concept}
              </span>
              {item.leetCodeUrl && (
                <a
                  href={item.leetCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-espresso-850 dark:text-[#EDEDEC] underline underline-offset-4 hover:opacity-80 whitespace-nowrap shrink-0"
                >
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
