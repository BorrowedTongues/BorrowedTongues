import type { LanguageConfig } from '../types/languages';
import { highValyrian } from '../data/languages/high-valyrian';
import { suhAnkripton } from '../data/languages/suh-ankripton';
import { klingon } from '../data/languages/klingon';

export const languages: LanguageConfig[] = [
  highValyrian,
  suhAnkripton,
  klingon,
];

export function getLanguage(slug: string): LanguageConfig | undefined {
  return languages.find((l) => l.slug === slug);
}

export type { LanguageConfig } from '../types/languages';
