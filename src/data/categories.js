export const categories = [
  {
    slug: 'finance',
    name: 'Finance',
    tagline: 'Loans, tax, investments, property — worked out to the rupee.',
    icon: 'finance',
  },
  {
    slug: 'business',
    name: 'Business',
    tagline: 'Invoices, margins, cashflow & office productivity.',
    icon: 'business',
  },
  {
    slug: 'health',
    name: 'Health',
    tagline: 'Everyday health numbers, explained simply.',
    icon: 'health',
  },
  {
    slug: 'education',
    name: 'Education',
    tagline: 'Marks, grades and attendance, sorted.',
    icon: 'education',
  },
  {
    slug: 'everyday',
    name: 'Everyday',
    tagline: 'Small utilities for daily life and work.',
    icon: 'everyday',
  },
  {
    slug: 'math',
    name: 'Math',
    tagline: 'Quick arithmetic without opening a spreadsheet.',
    icon: 'math',
  },
  {
    slug: 'developer',
    name: 'Developer',
    tagline: 'Formatters and testers for people who ship code.',
    icon: 'developer',
  },
]

export const categoryBySlug = (slug) => categories.find((c) => c.slug === slug)