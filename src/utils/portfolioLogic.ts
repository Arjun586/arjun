import type { ContactInquiry, ProjectItem } from '../data/portfolioData';

export type ProjectCategoryFilter =
  | 'All'
  | 'Featured'
  | 'Full Stack'
  | 'Backend'
  | 'Frontend'
  | 'Hackathon';

export interface ProjectFilterOptions {
  category: ProjectCategoryFilter;
  searchQuery: string;
  skillFilter?: string | null;
}

export function filterProjects(
  projects: ProjectItem[],
  options: ProjectFilterOptions
): ProjectItem[] {
  const normalizedQuery = options.searchQuery.trim().toLowerCase();
  const normalizedSkill = options.skillFilter?.trim().toLowerCase() || '';

  const filtered = projects.filter((project) => {
    if (options.category === 'Featured' && !project.featured) {
      return false;
    } else if (
      options.category !== 'All' &&
      options.category !== 'Featured'
    ) {
      const catLower = project.category.toLowerCase();
      const targetLower = options.category.toLowerCase();
      if (!catLower.includes(targetLower)) {
        return false;
      }
    }

    if (normalizedSkill) {
      const matchesSkill =
        project.technologies.some(
          (t) =>
            t.toLowerCase().includes(normalizedSkill) ||
            normalizedSkill.includes(t.toLowerCase())
        ) ||
        project.description.toLowerCase().includes(normalizedSkill) ||
        (project.caseStudy?.brief.toLowerCase().includes(normalizedSkill) ??
          false);
      if (!matchesSkill) {
        return false;
      }
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      project.title,
      project.description,
      project.category,
      project.status,
      ...project.technologies,
      project.caseStudy?.brief || '',
      ...(project.caseStudy?.keyFocus || []),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  if (options.category === 'All') {
    return [...filtered].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }

  return filtered;
}

export interface ContactFormInput {
  name: string;
  email: string;
  topic?: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_NAME_LENGTH = 2;
export const MIN_MESSAGE_LENGTH = 10;
export const MAX_MESSAGE_LENGTH = 1000;

export function validateContactField(
  field: keyof ContactFormInput,
  value: string
): string | undefined {
  const trimmed = value.trim();

  if (field === 'name') {
    if (trimmed.length < MIN_NAME_LENGTH) {
      return 'Please enter your name (at least 2 characters).';
    }
    return undefined;
  }

  if (field === 'email') {
    if (!EMAIL_REGEX.test(trimmed)) {
      return 'Please provide a valid email address.';
    }
    return undefined;
  }

  if (field === 'message') {
    if (trimmed.length < MIN_MESSAGE_LENGTH) {
      return `Please include a short message (at least ${MIN_MESSAGE_LENGTH} characters).`;
    }
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      return 'Message must be under 1,000 characters.';
    }
    return undefined;
  }

  return undefined;
}

export function validateContactSubmission(
  input: ContactFormInput
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  const nameError = validateContactField('name', input.name);
  if (nameError) errors.name = nameError;

  const emailError = validateContactField('email', input.email);
  if (emailError) errors.email = emailError;

  const messageError = validateContactField('message', input.message);
  if (messageError) errors.message = messageError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createContactRecord(
  input: ContactFormInput,
  sequenceNumber: number
): ContactInquiry {
  const code = `INQ-${String(100 + sequenceNumber).padStart(3, '0')}`;
  return {
    id: `inq-${Date.now()}-${sequenceNumber}`,
    name: input.name.trim(),
    email: input.email.trim(),
    topic: (input.topic || 'General Inquiry').trim(),
    message: input.message.trim(),
    createdAt: 'Just now',
    referenceCode: code,
  };
}
