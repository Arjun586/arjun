import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="scroll-mt-16 space-y-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          03. Work Experience, Growth Timeline & Exploration
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">
          {experience.workExperience.length} Role · {experience.growthTimeline.length} Growth Stages
        </span>
      </div>

      {/* Part 1: Work Experience & Highlights */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
              Industry Experience
            </h2>
            <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
              Production engineering contributions across backend systems and full-stack interfaces.
            </p>
          </div>
        </div>

        <div className="border-t border-b border-linen-border dark:border-espresso-border divide-y divide-linen-border dark:divide-espresso-border">
          {experience.workExperience.map((entry) => (
            <article
              key={`${entry.company}-${entry.duration}`}
              className="py-6 px-3 sm:px-4 hover:bg-linen-50/60 dark:hover:bg-espresso-850/40 transition-colors duration-150"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                {/* Duration */}
                <div className="md:col-span-3 font-mono text-xs text-espresso-muted dark:text-[#9A948D] tabular-nums">
                  {entry.duration}
                </div>

                {/* Company, Location, Role */}
                <div className="md:col-span-3">
                  <h3 className="font-mono text-sm font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                    {entry.company}{' '}
                    <span className="text-xs font-normal text-espresso-muted dark:text-[#9A948D]">
                      / {entry.location}
                    </span>
                  </h3>
                  <div className="font-mono text-xs text-espresso-muted dark:text-[#8E877F] mt-0.5">
                    {entry.role}
                  </div>
                </div>

                {/* Description, Contributions & Technologies */}
                <div className="md:col-span-6 space-y-3">
                  <p className="text-sm font-sans text-espresso-850/90 dark:text-[#D1CBC5] leading-relaxed">
                    {entry.description}
                  </p>

                  <ul className="space-y-1.5 text-xs font-sans text-espresso-850/85 dark:text-[#C4BEB7] list-disc pl-4">
                    {entry.contributions.map((contribution) => (
                      <li key={contribution} className="leading-relaxed">
                        {contribution}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 flex flex-wrap items-center gap-y-1 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                    {entry.technologies.map((tech, idx) => (
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
              </div>
            </article>
          ))}
        </div>

        {/* Experience Highlights */}
        <div className="p-5 bg-linen-50/70 dark:bg-espresso-850/70 border border-linen-border dark:border-espresso-border space-y-2.5">
          <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
            03.1 · Key Highlights
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experience.highlights.map((highlight, idx) => (
              <div
                key={highlight}
                className="font-sans text-xs text-espresso-850/90 dark:text-[#D1CBC5] leading-relaxed"
              >
                <span className="font-mono text-espresso-muted mr-1.5 tabular-nums">
                  0{idx + 1}.
                </span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Growth Timeline (2023 – Present) */}
      <div className="space-y-6">
        <div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-espresso-850 dark:text-[#EDEDEC]">
            Engineering Growth Timeline
          </h3>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Progression from core web foundations to full-stack applications, backend systems, and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.growthTimeline.map((stage) => (
            <div
              key={stage.period}
              className="p-5 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs text-espresso-muted dark:text-[#9A948D] tabular-nums">
                  <span>{stage.period}</span>
                </div>
                <h4 className="font-mono text-sm font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                  {stage.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-3 border-t border-linen-border/70 dark:border-espresso-border flex flex-wrap items-center gap-y-1 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                {stage.skills.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="mx-2">
                        ·
                      </span>
                    )}
                    <span className="text-espresso-850 dark:text-[#EDEDEC] whitespace-nowrap">
                      {skill}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: Currently Exploring */}
      <div className="space-y-6">
        <div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-espresso-850 dark:text-[#EDEDEC]">
            Currently Exploring
          </h3>
          <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1">
            Active areas of study across backend architecture, containerization, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experience.currentlyExploring.map((item, idx) => (
            <div
              key={item.area}
              className="p-4 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 space-y-1.5"
            >
              <div className="font-mono text-xs font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                <span className="text-espresso-muted mr-1.5 tabular-nums">
                  0{idx + 1}.
                </span>
                {item.area}
              </div>
              <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
