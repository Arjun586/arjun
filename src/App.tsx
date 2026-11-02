import React, { useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  PORTFOLIO_DATA,
  type ContactInquiry,
  type ProjectItem,
} from './data/portfolioData';
import {
  filterProjects,
  type ProjectCategoryFilter,
} from './utils/portfolioLogic';
import { Sidebar, type SectionId } from './components/Sidebar';
import { HeroAbout } from './components/HeroAbout';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fallback circular ripple state when View Transitions API is unavailable
  const [fallbackReveal, setFallbackReveal] = useState<{
    x: number;
    y: number;
    radius: number;
    targetTheme: 'light' | 'dark';
  } | null>(null);

  // Project Showcase state
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(
    null
  );
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(
    null
  );

  // Resume modal & clipboard state
  const [resumeOpen, setResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Session contact inquiries state (starts clean with no fake data)
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  // Sync theme with <html class="dark">
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleSetTheme = (
    nextTheme: 'light' | 'dark',
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (nextTheme === theme) return;

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Determine circular origin coordinates from click or button center
    let x = window.innerWidth - 64;
    let y = 28;
    if (e) {
      if (e.clientX > 0 || e.clientY > 0) {
        x = e.clientX;
        y = e.clientY;
      } else if (e.currentTarget) {
        const rect = e.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);
    root.style.setProperty('--reveal-r', `${endRadius}px`);

    const doc = document as ViewTransitionDocument;

    if (!doc.startViewTransition || prefersReducedMotion) {
      if (!prefersReducedMotion) {
        setFallbackReveal({ x, y, radius: endRadius, targetTheme: nextTheme });
        setTimeout(() => {
          setTheme(nextTheme);
        }, 180);
        setTimeout(() => {
          setFallbackReveal(null);
        }, 560);
      } else {
        setTheme(nextTheme);
      }
      return;
    }

    root.classList.add('theme-transitioning');

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
      if (nextTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    });

    transition.finished.finally(() => {
      root.classList.remove('theme-transitioning');
    });
  };

  // Scroll spy for sidebar active section
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home',
      'about',
      'projects',
      'skills',
      'experience',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = useMemo(
    () =>
      filterProjects(PORTFOLIO_DATA.projects, {
        category: selectedCategory,
        searchQuery,
        skillFilter: activeSkillFilter,
      }),
    [selectedCategory, searchQuery, activeSkillFilter]
  );

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(PORTFOLIO_DATA.contact.email)
        .catch(() => {});
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleToggleSkillFilter = (skill: string) => {
    setActiveSkillFilter((prev) => (prev === skill ? null : skill));
  };

  const handleAddInquiry = (inquiry: ContactInquiry) => {
    setInquiries((prev) => [inquiry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-linen-100 text-espresso-850 dark:bg-espresso-900 dark:text-[#EDEDEC] transition-colors duration-200 font-sans">
      {fallbackReveal && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 pointer-events-none z-[100] ${
            fallbackReveal.targetTheme === 'dark'
              ? 'bg-espresso-900'
              : 'bg-linen-100'
          }`}
          style={{
            animation: 'circularFallbackReveal 550ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
            '--reveal-x': `${fallbackReveal.x}px`,
            '--reveal-y': `${fallbackReveal.y}px`,
            '--reveal-r': `${fallbackReveal.radius}px`,
          } as React.CSSProperties}
        />
      )}
      <div className="min-h-screen flex flex-col md:flex-row max-w-[1560px] mx-auto relative">
        {/* Sidebar & Mobile Navigation */}
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
          theme={theme}
          onSetTheme={handleSetTheme}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        />

        {/* Desktop Fixed Sidebar Spacer */}
        <div
          className="hidden md:block w-[280px] shrink-0"
          aria-hidden="true"
        />

        {/* Scrollable Right Content Area */}
        <main className="flex-1 w-full min-w-0 p-6 md:p-12 lg:p-16 space-y-24 md:space-y-28">
          <HeroAbout
            onOpenResume={() => setResumeOpen(true)}
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
          />

          <ProjectShowcase
            projects={filteredProjects}
            totalCount={PORTFOLIO_DATA.projects.length}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeSkillFilter={activeSkillFilter}
            onClearSkillFilter={() => setActiveSkillFilter(null)}
            onOpenCaseStudy={setActiveCaseStudy}
          />

          <SkillsSection
            activeSkillFilter={activeSkillFilter}
            onToggleSkillFilter={handleToggleSkillFilter}
          />

          <ExperienceSection />

          <ContactSection
            inquiries={inquiries}
            onAddInquiry={handleAddInquiry}
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
          />

          {/* Quiet Editorial Footer */}
          <footer className="pt-10 border-t border-linen-border dark:border-espresso-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-espresso-muted dark:text-[#9A948D] gap-2">
            <div>
              {PORTFOLIO_DATA.personal.name} · {PORTFOLIO_DATA.personal.title}
            </div>
            <div>{PORTFOLIO_DATA.personal.discipline}</div>
          </footer>
        </main>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      {/* Interactive Resume Preview Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
