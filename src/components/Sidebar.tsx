import React from 'react';
import { Code2, Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  theme: 'light' | 'dark';
  onSetTheme: (theme: 'light' | 'dark', e?: React.MouseEvent<HTMLButtonElement>) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const NAV_ITEMS: { id: SectionId; number: string; label: string; meta: string }[] = [
  { id: 'home', number: '01', label: 'Overview', meta: 'Root' },
  { id: 'about', number: '02', label: 'About', meta: 'Bio' },
  { id: 'projects', number: '03', label: 'Projects', meta: `${PORTFOLIO_DATA.projects.length} Works` },
  { id: 'skills', number: '04', label: 'Skills & CS', meta: 'Stack' },
  { id: 'experience', number: '05', label: 'Experience', meta: 'Growth' },
  { id: 'contact', number: '06', label: 'Contact', meta: 'Mail' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  theme,
  onSetTheme,
  mobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const { personal, contact } = PORTFOLIO_DATA;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    onNavigate(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      onToggleMobileMenu();
    }
  };

  return (
    <>
      {/* Top-Right Tactile Theme Rocker Switch (Desktop) */}
      <div className="fixed top-4 right-5 z-40 hidden md:flex items-center gap-3">
        <div
          className="inline-flex items-center p-1 rounded-lg bg-linen-200/95 dark:bg-espresso-800/95 border border-linen-border dark:border-espresso-border backdrop-blur-md shadow-xs"
          role="group"
          aria-label="Color theme selector"
        >
          <button
            type="button"
            onClick={(e) => onSetTheme('light', e)}
            aria-pressed={theme === 'light'}
            aria-label="Switch to light theme"
            className={`p-2 text-xs font-mono font-medium rounded-md transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer ${
              theme === 'light'
                ? 'bg-espresso-850 text-linen-50 shadow-xs'
                : 'text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC]'
            }`}
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => onSetTheme('dark', e)}
            aria-pressed={theme === 'dark'}
            aria-label="Switch to dark theme"
            className={`p-2 text-xs font-mono font-medium rounded-md transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer ${
              theme === 'dark'
                ? 'bg-linen-100 text-espresso-900 shadow-xs'
                : 'text-espresso-muted hover:text-espresso-850 dark:hover:text-[#EDEDEC]'
            }`}
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Top Bar (< 768px) */}
      <header className="md:hidden sticky top-0 z-40 w-full bg-linen-100/95 dark:bg-espresso-900/95 backdrop-blur-md border-b border-linen-border dark:border-espresso-border px-5 py-3 flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-editorial text-2xl tracking-tight font-bold text-espresso-850 dark:text-[#EDEDEC] whitespace-nowrap shrink-0 uppercase"
        >
          {personal.name}
        </a>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => onSetTheme(theme === 'light' ? 'dark' : 'light', e)}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            className="p-2 text-xs font-mono border border-linen-border dark:border-espresso-border bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] flex items-center justify-center shrink-0 cursor-pointer"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={onToggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-espresso-850 dark:text-[#EDEDEC] border border-linen-border dark:border-espresso-border bg-linen-50 dark:bg-espresso-850 hover:bg-linen-200 dark:hover:bg-espresso-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-espresso-950/50 backdrop-blur-xs md:hidden"
          onClick={onToggleMobileMenu}
        >
          <div
            className="absolute top-[57px] left-0 right-0 bg-linen-100 dark:bg-espresso-900 border-b border-linen-border dark:border-espresso-border p-6 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono text-espresso-muted dark:text-[#9A948D]">
              Directory Navigation
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-linen-border/60 dark:divide-espresso-border/60 font-mono text-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between py-3 transition-colors ${
                      isActive
                        ? 'text-espresso-850 dark:text-[#EDEDEC] font-semibold'
                        : 'text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white'
                    }`}
                  >
                    <span>
                      {item.number}. {item.label}
                    </span>
                    <span className="text-xs text-espresso-muted">{item.meta}</span>
                  </a>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-linen-border dark:border-espresso-border flex justify-between items-center text-xs font-mono text-espresso-muted">
              <span>{personal.location}</span>
              <span>{personal.availability}</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar (280px) */}
      <aside
        aria-label="Portfolio sidebar navigation"
        className="hidden md:flex flex-col justify-between w-[280px] shrink-0 fixed top-0 bottom-0 left-0 z-20 border-r border-linen-border dark:border-espresso-border bg-linen-100/95 dark:bg-espresso-900/95 backdrop-blur-sm p-8 select-none"
      >
        {/* Top Brandmark & Specification */}
        <div>
          <div className="mb-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="group block focus-visible:outline-2 focus-visible:outline-espresso-850 dark:focus-visible:outline-white"
            >
              <span className="font-editorial text-4xl tracking-tight font-bold text-espresso-850 dark:text-[#EDEDEC] group-hover:opacity-80 transition-opacity uppercase">
                {personal.name}
              </span>
            </a>
          </div>
          <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
            {personal.title}
          </p>

          <div className="mt-5 pt-4 border-t border-linen-border/70 dark:border-espresso-border text-xs font-mono text-espresso-muted dark:text-[#8E877F] space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="shrink-0">Status</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium text-right whitespace-nowrap text-[11px]">
                {personal.availability}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="shrink-0">Location</span>
              <span className="text-espresso-850 dark:text-[#EDEDEC] text-right truncate">
                {personal.location}
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section Navigation */}
        <nav aria-label="Portfolio navigation" className="my-auto py-6">
          <ul className="space-y-1 font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? 'bg-linen-200/90 dark:bg-espresso-800 text-espresso-850 dark:text-[#EDEDEC] font-semibold'
                        : 'text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] hover:bg-linen-200/40 dark:hover:bg-espresso-800/40'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="tabular-nums text-espresso-muted dark:text-[#8E877F]">
                        {item.number}.
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[11px] text-espresso-muted/80 dark:text-[#8E877F] tabular-nums">
                      {item.meta}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Social Links from contact.socialLinks */}
        <div>
          <div className="h-px w-full bg-linen-border dark:bg-espresso-border mb-4" />
          <div className="flex items-center justify-between">
            <a
              href={contact.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-md hover:bg-linen-200 dark:hover:bg-espresso-800 transition-colors text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contact.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-md hover:bg-linen-200 dark:hover:bg-espresso-800 transition-colors text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contact.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="p-2 rounded-md hover:bg-linen-200 dark:hover:bg-espresso-800 transition-colors text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={contact.socialLinks.email}
              aria-label="Email Arjun"
              className="p-2 rounded-md hover:bg-linen-200 dark:hover:bg-espresso-800 transition-colors text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-white"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-3 text-[11px] font-mono text-espresso-muted dark:text-[#8E877F] flex justify-between tabular-nums">
            <span>{personal.location}</span>
            <span>{personal.name}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
