/**
 * Borrowed Tongues — Language Extensions
 * src/types/languages.ts
 */

export type VocabSource = 'canon' | 'derived' | 'fan-dict' | 'new';

export interface VocabEntry {
  /** Canonical dictionary form — the lookup key for the tooltip system. */
  word: string;
  /** Primary English gloss. One short phrase; extended notes go in `notes`. */
  definition: string;
  source: VocabSource;
  /** Optional components for compound words. Each string is a word key. */
  components?: string[];
  /** Extended derivation notes, grammar behavior, etc. Shown on language page only. */
  notes?: string;
  /** Release slugs where this word appears in annotated lyrics. */
  appearsIn?: string[];
}

export interface GrammarNote {
  rule: string;
  detail?: string;
}

export interface SoundShift {
  from: string;
  to: string;
  example?: string;
  notes?: string;
}

export interface LanguageConfig {
  slug: string;
  displayName: string;
  nativeName?: string;
  sourceMedia: string;
  createdBy: string;
  /**
   * Maps VocabSource to the per-language display label used as a badge.
   * Preserves existing [C-D], [C-S], [N], etc. tag vocabulary in the display layer.
   */
  sourceLabels: Record<VocabSource, string>;
  grammarNotes: GrammarNote[];
  soundShifts?: SoundShift[];
  vocabulary: VocabEntry[];
}
