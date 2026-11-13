import React, { useState } from 'react';
import {
  ArrowDownRight,
  BookOpen,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroAboutProps {
  onOpenResume: () => void;
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const HeroAbout: React.FC<HeroAboutProps> = ({
  onOpenResume,
  onCopyEmail,
  emailCopied,
}) => {
  const [imageError, setImageError] = useState(false);
  const { personal, education, experience, contact } = PORTFOLIO_DATA;

  return (
    <div className="space-y-24 md:space-y-28">
      {/* 01. Overview Section */}
      <section id="home" className="scroll-mt-12 space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
          <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
            01. Overview
          </span>
          <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
          <span className="tabular-nums">{personal.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: High-Contrast Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between animate-fade-up">
            <div className="relative overflow-hidden border border-linen-border dark:border-espresso-border bg-linen-200 dark:bg-espresso-800">
              {!imageError ? (
                <img
                  src={personal.profileImage}
                  alt={`Editorial monochrome portrait of ${personal.name}, ${personal.title}`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full aspect-square object-cover grayscale contrast-115 hover:scale-[1.015] transition-transform duration-500 ease-out"
                />
              ) : (
                <div className="w-full aspect-square flex flex-col items-center justify-center p-8 text-center bg-linen-200 dark:bg-espresso-850">
                  <span className="font-editorial text-5xl font-bold text-espresso-850 dark:text-[#EDEDEC] uppercase">
                    {personal.name}
                  </span>
                  <span className="font-mono text-xs text-espresso-muted mt-2">
                    {personal.title}
                  </span>
                </div>
              )}

              <div className="px-4 py-2.5 bg-linen-50/95 dark:bg-espresso-900/95 border-t border-linen-border dark:border-espresso-border flex items-center justify-between font-mono text-xs">
                <span className="text-espresso-muted dark:text-[#9A948D]">
                  {personal.title}
                </span>
                <span className="text-espresso-850 dark:text-[#EDEDEC] font-medium uppercase">
                  {personal.name}
                </span>
              </div>
            </div>

            {/* Specification Metadata below portrait */}
            <div className="mt-4 pt-3 border-t border-linen-border dark:border-espresso-border space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between gap-3 text-espresso-muted dark:text-[#9A948D]">
                <span className="shrink-0">Availability</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium text-right">
                  {personal.availability}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 text-espresso-muted dark:text-[#9A948D]">
                <span className="shrink-0">Location</span>
                <span className="text-espresso-850 dark:text-[#EDEDEC] text-right">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Bio & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 animate-fade-up">
            <div className="space-y-3">
              <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
                {personal.discipline}
              </p>
              <h1
                className="font-editorial text-3xl sm:text-5xl lg:text-[52px] tracking-tight leading-[1.08] text-espresso-850 dark:text-[#EDEDEC]"
                style={{ textWrap: 'balance' }}
              >
                {personal.heroBio}
              </h1>
            </div>

            {/* Overview Lead Paragraphs */}
            <div className="space-y-3.5 text-espresso-850/85 dark:text-[#D1CBC5] text-sm sm:text-base leading-relaxed font-sans max-w-[68ch]">
              {personal.overviewBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Primary & Secondary Action Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-linen-border dark:border-espresso-border">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 hover:opacity-90 transition-opacity border border-espresso-850 dark:border-white whitespace-nowrap shrink-0"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={contact.resume.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-semibold bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-[#EDEDEC] transition-colors whitespace-nowrap shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>

              <a
                href={contact.resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-semibold bg-linen-50 dark:bg-espresso-850 text-espresso-850 dark:text-[#EDEDEC] border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-[#EDEDEC] transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-3 font-mono text-xs text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick CV View</span>
              </button>

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-3 font-mono text-xs text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                      Copied Email
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Row from experience.metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 divide-y sm:divide-y-0 sm:divide-x divide-linen-border dark:divide-espresso-border">
          <div className="p-4 sm:p-5">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              Degree
            </div>
            <div className="font-editorial text-xl sm:text-2xl font-bold text-espresso-850 dark:text-[#EDEDEC] mt-1">
              {experience.metrics.degree}
            </div>
            <div className="font-mono text-[11px] text-espresso-muted mt-1">
              {education.institution}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              Status
            </div>
            <div className="font-editorial text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {experience.metrics.status}
            </div>
            <div className="font-mono text-[11px] text-espresso-muted mt-1">
              {personal.location}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              Projects Built
            </div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-espresso-850 dark:text-[#EDEDEC] mt-1 tabular-nums">
              {experience.metrics.projectsBuilt}
            </div>
            <div className="font-mono text-[11px] text-espresso-muted mt-1">
              Full-Stack & Backend Systems
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              Years Coding
            </div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-espresso-850 dark:text-[#EDEDEC] mt-1 tabular-nums">
              {experience.metrics.yearsCoding}
            </div>
            <div className="font-mono text-[11px] text-espresso-muted mt-1">
              {education.period}
            </div>
          </div>
        </div>
      </section>

      {/* 02. About Section */}
      <section id="about" className="scroll-mt-16 space-y-6">
        <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
          <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
            02. About
          </span>
          <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
          <span className="tabular-nums">Narrative, Focus & Education</span>
        </div>

        {/* 02.1 Engineering Narrative */}
        <div className="p-6 sm:p-8 bg-linen-50/80 dark:bg-espresso-850/80 border border-linen-border dark:border-espresso-border space-y-4">
          <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] flex items-center justify-between">
            <span>02.1 · Engineering Narrative</span>
            <span>{personal.title}</span>
          </div>
          <div className="space-y-3.5 text-espresso-850/90 dark:text-[#D1CBC5] text-sm sm:text-base leading-relaxed font-sans max-w-[72ch]">
            {personal.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Current Focus & Education Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 p-6 bg-linen-50/80 dark:bg-espresso-850/80 border border-linen-border dark:border-espresso-border flex flex-col justify-between space-y-3">
            <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
              02.2 · Current Focus
            </span>
            <div className="font-sans text-base text-espresso-850 dark:text-[#EDEDEC] font-medium leading-snug">
              {personal.currentFocus.map((item, idx) => (
                <React.Fragment key={item}>
                  {idx > 0 && (
                    <span aria-hidden="true" className="mx-2 text-espresso-muted">
                      ·
                    </span>
                  )}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
            <p className="font-mono text-[11px] text-espresso-muted dark:text-[#9A948D]">
              {personal.discipline}
            </p>
          </div>

          <div className="lg:col-span-6 p-6 bg-linen-50/80 dark:bg-espresso-850/80 border border-linen-border dark:border-espresso-border flex flex-col justify-between space-y-2">
            <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
              02.3 · Education ({education.period})
            </span>
            <p className="font-sans text-base text-espresso-850 dark:text-[#EDEDEC] font-semibold leading-snug">
              {education.degree} — {education.institution}
            </p>
            <p className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] leading-snug">
              {education.fieldOfStudy} · {education.location}
            </p>
          </div>
        </div>

        {/* Interests & Currently Reading */}
        <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/60 dark:bg-espresso-850/60 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] flex items-center justify-between">
              <span>02.4 · Beyond Development & Interests</span>
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <p className="font-sans text-sm text-espresso-850/90 dark:text-[#D1CBC5] leading-relaxed">
              {personal.interests.statement}
            </p>
          </div>

          <div className="pt-3 border-t border-linen-border/70 dark:border-espresso-border flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <span className="text-espresso-muted dark:text-[#9A948D]">
              Currently Reading
            </span>
            <span className="text-espresso-850 dark:text-[#EDEDEC] font-medium">
              “{personal.interests.currentlyReading.title}” ·{' '}
              {personal.interests.currentlyReading.author}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
