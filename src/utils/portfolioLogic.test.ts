import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  createContactRecord,
  filterProjects,
  validateContactSubmission,
} from './portfolioLogic';

test('filterProjects returns all 12 projects with featured projects on top when category is All', () => {
  const result = filterProjects(PORTFOLIO_DATA.projects, {
    category: 'All',
    searchQuery: '',
  });
  assert.equal(result.length, 12);
  assert.deepEqual(
    result.slice(0, 4).map((p) => p.title),
    ['Nexus', 'Rate Limiter', 'Search-Test', 'Distributed Job-Queue']
  );
});

test('filterProjects returns the 4 featured projects when category is Featured', () => {
  const featured = filterProjects(PORTFOLIO_DATA.projects, {
    category: 'Featured',
    searchQuery: '',
  });
  assert.equal(featured.length, 4);
  assert.deepEqual(
    featured.map((p) => p.title),
    ['Nexus', 'Rate Limiter', 'Search-Test', 'Distributed Job-Queue']
  );
});

test('filterProjects filters by category and search query accurately', () => {
  const hackathon = filterProjects(PORTFOLIO_DATA.projects, {
    category: 'Hackathon',
    searchQuery: '',
  });
  assert.equal(hackathon.length, 2);
  assert.deepEqual(
    hackathon.map((p) => p.title),
    ['RESQ360', 'VeriChain']
  );

  const bySearch = filterProjects(PORTFOLIO_DATA.projects, {
    category: 'All',
    searchQuery: 'Hocuspocus',
  });
  assert.equal(bySearch.length, 1);
  assert.equal(bySearch[0].title, 'Nexus');
});

test('filterProjects supports skill cross-filtering', () => {
  const bySkill = filterProjects(PORTFOLIO_DATA.projects, {
    category: 'All',
    searchQuery: '',
    skillFilter: 'Elasticsearch',
  });
  assert.equal(bySkill.length, 1);
  assert.equal(bySkill[0].title, 'Search-Test');
});

test('validateContactSubmission rejects invalid fields and accepts valid input', () => {
  const invalid = validateContactSubmission({
    name: 'A',
    email: 'invalid-email',
    message: 'Too short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactSubmission({
    name: 'Arjun Test',
    email: 'test@example.com',
    message: 'Looking to collaborate on a full-stack web application project.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('createContactRecord generates trimmed inquiry with sequential reference code', () => {
  const record = createContactRecord(
    {
      name: '  Elena Rostova ',
      email: ' elena@engineering.co ',
      topic: 'API Development',
      message: '  Let us schedule an API architecture discussion next week. ',
    },
    1
  );
  assert.equal(record.name, 'Elena Rostova');
  assert.equal(record.email, 'elena@engineering.co');
  assert.equal(record.referenceCode, 'INQ-101');
  assert.equal(record.createdAt, 'Just now');
});
