import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Send,
} from 'lucide-react';
import { PORTFOLIO_DATA, type ContactInquiry } from '../data/portfolioData';
import {
  createContactRecord,
  validateContactSubmission,
  type ContactFormInput,
} from '../utils/portfolioLogic';

interface ContactSectionProps {
  inquiries: ContactInquiry[];
  onAddInquiry: (inquiry: ContactInquiry) => void;
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  inquiries,
  onAddInquiry,
  onCopyEmail,
  emailCopied,
}) => {
  const { contact, personal } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState<ContactFormInput>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleFieldChange = (
    field: keyof ContactFormInput,
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submittedCode) {
      setSubmittedCode(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactSubmission(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newRecord = createContactRecord(formState, inquiries.length + 1);
    onAddInquiry(newRecord);
    setSubmittedCode(newRecord.referenceCode);
    setErrors({});
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="scroll-mt-16 pb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 font-mono text-xs text-espresso-muted dark:text-[#9A948D] mb-8">
        <span className="font-medium text-espresso-850 dark:text-[#EDEDEC]">
          06. Contact
        </span>
        <div className="h-px flex-1 bg-linen-border dark:bg-espresso-border" />
        <span className="tabular-nums">{contact.responseTime}</span>
      </div>

      {/* Collaboration CTA from contact.collaborationCta */}
      <div className="mb-8">
        <h2 className="font-editorial text-3xl sm:text-4xl text-espresso-850 dark:text-[#EDEDEC]">
          {contact.collaborationCta.title}
        </h2>
        <p className="font-sans text-sm text-espresso-muted dark:text-[#9A948D] mt-1 max-w-2xl">
          {contact.collaborationCta.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Interactive Contact Form */}
        <div className="lg:col-span-7 border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 p-6 sm:p-8">
          <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] mb-6 flex justify-between">
            <span>Direct Message Form</span>
            <span>{contact.responseTime}</span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block font-mono text-xs text-espresso-850 dark:text-[#EDEDEC] mb-1.5"
              >
                Your Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formState.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                placeholder="Enter your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? 'contact-name-error' : undefined
                }
                className="w-full px-3.5 py-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border text-espresso-850 dark:text-[#EDEDEC] text-sm font-sans focus:outline-none focus:border-espresso-850 dark:focus:border-white transition-colors"
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  role="alert"
                  className="mt-1.5 font-mono text-xs text-rose-600 dark:text-rose-400"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono text-xs text-espresso-850 dark:text-[#EDEDEC] mb-1.5"
              >
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formState.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'contact-email-error' : undefined
                }
                className="w-full px-3.5 py-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border text-espresso-850 dark:text-[#EDEDEC] text-sm font-sans focus:outline-none focus:border-espresso-850 dark:focus:border-white transition-colors"
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="mt-1.5 font-mono text-xs text-rose-600 dark:text-rose-400"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <label
                  htmlFor="contact-msg"
                  className="block font-mono text-xs text-espresso-850 dark:text-[#EDEDEC]"
                >
                  Project Scope or Message <span className="text-rose-600">*</span>
                </label>
                <span className="font-mono text-[11px] text-espresso-muted tabular-nums">
                  {formState.message.length}/1000
                </span>
              </div>
              <textarea
                id="contact-msg"
                rows={4}
                value={formState.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                placeholder="Share details about your project or internship opportunity..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'contact-msg-error' : undefined
                }
                className="w-full px-3.5 py-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border text-espresso-850 dark:text-[#EDEDEC] text-sm font-sans focus:outline-none focus:border-espresso-850 dark:focus:border-white transition-colors resize-none"
              />
              {errors.message && (
                <p
                  id="contact-msg-error"
                  role="alert"
                  className="mt-1.5 font-mono text-xs text-rose-600 dark:text-rose-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button & Confirmation */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold bg-espresso-850 text-linen-50 dark:bg-[#EDEDEC] dark:text-espresso-950 hover:opacity-90 transition-opacity border border-espresso-850 dark:border-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {submittedCode && (
                <div
                  role="status"
                  className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-medium"
                >
                  ✓ Message sent ({submittedCode})
                </div>
              )}
            </div>
          </form>

          {/* Session Dispatches Log (shown when user submits an inquiry) */}
          {inquiries.length > 0 && (
            <div className="mt-8 pt-6 border-t border-linen-border dark:border-espresso-border space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-espresso-850 dark:text-[#EDEDEC] font-semibold">
                  Sent Inquiries ({inquiries.length})
                </span>
              </div>
              <div className="divide-y divide-linen-border/70 dark:divide-espresso-border">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-semibold text-espresso-850 dark:text-[#EDEDEC]">
                        {inq.name}
                      </span>
                      <span className="text-espresso-muted tabular-nums">
                        {inq.referenceCode} · {inq.createdAt}
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-espresso-muted dark:text-[#9A948D]">
                      {inq.email}
                    </div>
                    <p className="font-sans text-xs text-espresso-850/85 dark:text-[#C4BEB7]">
                      {inq.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Direct Email, Resume Links, Available For & Social Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Direct Email Copy Box */}
          <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 space-y-3">
            <span className="font-mono text-xs text-espresso-muted dark:text-[#9A948D] block">
              Direct Email
            </span>
            <div className="font-mono text-sm sm:text-base font-semibold text-espresso-850 dark:text-[#EDEDEC] break-all">
              {contact.email}
            </div>
            <p className="text-xs text-espresso-muted dark:text-[#9A948D] leading-relaxed">
              Response Time: {contact.responseTime} · Location: {contact.location}
            </p>

            <button
              type="button"
              onClick={onCopyEmail}
              className="w-full py-2.5 px-4 font-mono text-xs font-medium border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-[#EDEDEC] bg-linen-100 dark:bg-espresso-900 text-espresso-850 dark:text-[#EDEDEC] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied: {contact.email}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email to Clipboard</span>
                </>
              )}
            </button>
          </div>

          {/* Availability & Resume Card */}
          <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-espresso-muted dark:text-[#9A948D]">
                Availability
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                {personal.availability}
              </span>
            </div>

            <div className="pt-3 border-t border-linen-border/70 dark:border-espresso-border flex flex-wrap gap-3 font-mono text-xs">
              <a
                href={contact.resume.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-espresso-850 dark:text-[#EDEDEC] font-semibold underline underline-offset-4 hover:opacity-80"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={contact.resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-espresso-muted dark:text-[#9A948D] hover:text-espresso-850 dark:hover:text-[#EDEDEC]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Directory */}
          <div className="p-6 border border-linen-border dark:border-espresso-border bg-linen-50/70 dark:bg-espresso-850/70 space-y-3">
            <div className="font-mono text-xs text-espresso-muted dark:text-[#9A948D]">
              Social Links
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              <a
                href={contact.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-white flex items-center justify-between text-espresso-850 dark:text-[#EDEDEC]"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-espresso-muted" />
              </a>
              <a
                href={contact.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-white flex items-center justify-between text-espresso-850 dark:text-[#EDEDEC]"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-espresso-muted" />
              </a>
              <a
                href={contact.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-linen-100 dark:bg-espresso-900 border border-linen-border dark:border-espresso-border hover:border-espresso-850 dark:hover:border-white flex items-center justify-between text-espresso-850 dark:text-[#EDEDEC]"
              >
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-espresso-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
