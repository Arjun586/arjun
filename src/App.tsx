import React, { useEffect, useMemo, useState } from 'react';
import {
  INITIAL_INQUIRIES,
  PROFILE_DATA,
  PROJECTS_DATA,
  type ContactInquiry,
  type LoadTier,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';
import { filterAndSortProjects } from './utils/portfolioLogic';
import { Sidebar, type SectionId } from './components/Sidebar';
import { HeroAbout } from './components/HeroAbout';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project Showcase state
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);
  const [loadTier, setLoadTier] = useState<LoadTier>('baseline');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  // Resume modal & clipboard state
  const [resumeOpen, setResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Contact inquiries state
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(INITIAL_INQUIRIES);

  // Sync theme with <html class="dark">
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Scroll spy for sidebar active section
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home',
      'about',
      'experience',
      'projects',
      'skills',
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
      filterAndSortProjects(PROJECTS_DATA, {
        category: selectedCategory,
        searchQuery,
        skillFilter: activeSkillFilter,
      }),
    [selectedCategory, searchQuery, activeSkillFilter]
  );

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(PROFILE_DATA.email).catch(() => {});
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
      <div className="min-h-screen flex flex-col md:flex-row max-w-[1560px] mx-auto relative">
        {/* Sidebar & Mobile Navigation */}
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
          theme={theme}
          onSetTheme={setTheme}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        />

        {/* Desktop Fixed Sidebar Spacer */}
        <div className="hidden md:block w-[280px] shrink-0" aria-hidden="true" />

        {/* Scrollable Right Content Area */}
        <main className="flex-1 w-full min-w-0 p-6 md:p-12 lg:p-16 space-y-24 md:space-y-28">
          <HeroAbout
            onOpenResume={() => setResumeOpen(true)}
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
          />

          <ExperienceSection />

          <ProjectShowcase
            projects={filteredProjects}
            totalCount={PROJECTS_DATA.length}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeSkillFilter={activeSkillFilter}
            onClearSkillFilter={() => setActiveSkillFilter(null)}
            loadTier={loadTier}
            onChangeLoadTier={setLoadTier}
            onOpenCaseStudy={setActiveCaseStudy}
          />

          <SkillsSection
            activeSkillFilter={activeSkillFilter}
            onToggleSkillFilter={handleToggleSkillFilter}
          />

          <ContactSection
            inquiries={inquiries}
            onAddInquiry={handleAddInquiry}
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
          />

          {/* Quiet Editorial Footer */}
          <footer className="pt-10 border-t border-linen-border dark:border-espresso-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-espresso-muted dark:text-[#9A948D] gap-2">
            <div>{PROFILE_DATA.name} · Systems & Full Stack Engineering Portfolio</div>
            <div>© 2026 · Built with React & Tailwind CSS</div>
          </footer>
        </main>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        loadTier={loadTier}
        onChangeLoadTier={setLoadTier}
        onClose={() => setActiveCaseStudy(null)}
      />

      {/* Interactive Resume Preview Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
