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

  return projects.filter((project) => {
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
}

export interface ContactFormInput {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function validateContactSubmission(
  input: ContactFormInput
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedTopic = input.topic.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!trimmedTopic) {
    errors.topic = 'Please select an inquiry topic.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please include a short message (at least 10 characters).';
  } else if (trimmedMessage.length > 1000) {
    errors.message = 'Message must be under 1,000 characters.';
  }

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
    topic: input.topic.trim(),
    message: input.message.trim(),
    createdAt: 'Just now',
    referenceCode: code,
  };
}
