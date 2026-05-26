import type { LanguageConfig } from '../../types/languages';

export const klingon: LanguageConfig = {
  slug: 'klingon',
  displayName: 'Klingon',
  nativeName: 'tlhIngan Hol',
  sourceMedia: 'Star Trek franchise',
  createdBy: 'Marc Okrand',
  sourceLabels: {
    canon:    '[C-TK] The Klingon Dictionary / Okrand canon',
    derived:  '[D] Extended from canon morphology',
    'fan-dict': '[C-KLI] KLI / boQwI\' attested',
    new:      '[N] New construction',
  },
  grammarNotes: [
    {
      rule: 'OVS word order',
      detail: 'Object-Verb-Subject — opposite of English. Objects land at line-start, subjects at line-end. This naturally creates aggressive declarative energy: "Your arm — I will tear it from you."',
    },
    {
      rule: 'Verb prefixes encode both subject and object',
      detail: 'vI- = I-it (1sg subject, 3sg object). Da- = you-it. jI- = I (intransitive). bI- = you (intransitive). Getting the prefix wrong changes what the verb says entirely.',
    },
    {
      rule: 'Case-sensitive orthography',
      detail: 'Q and q are different sounds (uvular vs. velar stop). S is retroflex. D is retroflex. This is why two lyric versions exist: Version A for correct orthography, Version B for AI-readable phonetics.',
    },
    {
      rule: 'Noun suffix -Daq (locative)',
      detail: 'Marks location: "at/in/on." HeHDaq = at the edge. bIQ\'a\'Daq = in the ocean.',
    },
    {
      rule: 'Agglutinative morphology',
      detail: 'Klingon stacks suffixes. SuvwI\'pu\' = Suv (fight) + wI\' (one who does) + pu\' (plural, rational beings) = warriors. Each suffix adds meaning.',
    },
    {
      rule: 'This page: how we used Klingon',
      detail: 'Klingon is well-documented via boQwI\' and Hol \'ampaS. This page focuses on the adaptation choices — which words we used for concepts requiring creative extension, what new constructions we coined, and where canonical vocabulary carried metaphorical weight beyond its dictionary definition.',
    },
  ],
  vocabulary: [
    // ── Title compounds and album-level coinages ──────────────────────────────
    {
      word: "yoHbe'ghach nagh",
      definition: "the coward's stone; stone of not-bravery",
      source: 'new',
      components: ["yoH", "be'ghach", 'nagh'],
      notes: "[N] Compound: yoH (to be brave) + be'ghach (nominalizer on negation = the act of not X-ing) + nagh (stone). The talisman Gawain accepts. The title names the shame directly — in Klingon there is no euphemism for what the stone represents. The be'ghach construction is grammatically supported by Klingon's productive nominalizer system; unattested in canon for this specific pairing.",
      appearsIn: ['yohbeghach-nagh'],
    },
    {
      word: "yoHbe'ghach",
      definition: 'cowardice; the act of not being brave',
      source: 'new',
      notes: "[N] Constructed via: yoH (brave) + be' (negation) + ghach (nominalizer). The state/act of not being brave. Grammar supports this; unattested. Used as the noun core of the title compound.",
      appearsIn: ['yohbeghach-nagh'],
    },
    {
      word: "qul bat'leth",
      definition: "fire bat'leth; the fire-blade (album title)",
      source: 'new',
      components: ["qul", "baS'In"],
      notes: "[N] Album title. qul (fire) + bat'leth (the Klingon honor-blade). Used as the album title only — not a narrative element in the lyrics themselves. The pairing invokes both the funeral pyre (Track 7) and Grendel's assault on the fire-hall (Tracks 1–3).",
      appearsIn: ['qul-batleth'],
    },
    {
      word: 'qul Qav',
      definition: 'the last fire; the final flame',
      source: 'new',
      components: ['qul', 'Qav'],
      notes: '[N] Track 7 title. qul (fire) + Qav (to be last/final). The funeral pyre. In Klingon framing this is not defeat — the last fire is the greatest fire. Used throughout Track 7 as both event and concept.',
      appearsIn: ['beowulf-track-07'],
    },
    {
      word: "bIQ'a' QIj",
      definition: 'the black lake',
      source: 'new',
      components: ["bIQ'a'", 'QIj'],
      notes: "[N] Track 4 title. bIQ'a' (great water/lake) + QIj (to be black/dark). Grendel's mother's mere. Grammatically standard Klingon (adjective follows noun); the pairing is original to this work.",
      appearsIn: ['beowulf-track-04'],
    },

    // ── Key adaptation choices ────────────────────────────────────────────────
    {
      word: 'toDuj',
      definition: "bravery; the quality of being a rescuer",
      source: 'canon',
      notes: "[C-TK] Canon word, documented choice. Root toD = rescue/save. toDuj = bravery, literally encodes that bravery is about saving others, not personal glory. Used specifically for Wiglaf (Track 6) — he stays not for honor but to save Beowulf. Contrast with yoH (raw courage) used for Beowulf's own self-assertion. These two Klingon words for bravery mean different things; that distinction carries the emotional arc of the Beowulf cycle.",
      appearsIn: ['beowulf-track-06', 'beowulf-track-07'],
    },
    {
      word: "qa'Hom",
      definition: 'small spirit; lesser soul; creature of diminished honor',
      source: 'canon',
      notes: "[C-TK] Canon: qa'Hom = diminutive of qa' (spirit/soul). Used consistently for Grendel and his mother across Tracks 1–4. The deliberate translation choice: Grendel is not a blood-enemy (which would be 'Iw-) or a worthy opponent but something spiritually incomplete. Klingon ontology: Grendel cannot die an honorable death because he was never fully alive in the honorable sense. This framing also explains why Beowulf fights bare-handed — you don't bring a bat'leth to fight a qa'Hom.",
      appearsIn: ['beowulf-track-01', 'beowulf-track-02', 'beowulf-track-03', 'beowulf-track-04'],
    },
    {
      word: 'SaQ',
      definition: 'to cry; to weep',
      source: 'canon',
      notes: "[C-TK] Used without apology for Hrothgar in Track 1 Verse 4 and Track 5. The choice to have the king explicitly weep is significant in Klingon cultural framing. Track 5 reframes it: weeping is the correct emotional response when honor cannot save those you are sworn to protect. The project refuses to hide Hrothgar's grief behind Klingon stoicism.",
      appearsIn: ['beowulf-track-01', 'beowulf-track-05'],
    },
    {
      word: "may'morgh",
      definition: 'battle preparations; readiness for war',
      source: 'canon',
      notes: "[C-TK] Canon compound: may' (battle) + morgh (be prepared). Used in Track 2: 'may'morgh pagh — DIr je porgh neH jIngDaq' = 'no battle-preparations — only skin and body between us.' The choice of may'morgh rather than nuH (weapon) emphasizes that Beowulf stripped all readiness, not just weapons.",
      appearsIn: ['beowulf-track-02'],
    },
    {
      word: 'quH',
      definition: 'heritage; ancestral claim; inheritance from those who came before',
      source: 'canon',
      notes: "[C-TK] Thematic spine of the Gawain single. Gawain's honor code maps to quH — obligation from bloodline, not just personal courage. Used three times in the chorus: 'vaj quH — loD yoH quHDaj — toblu'DI' quH!' = 'So, heritage! — a brave man's heritage — when proven, heritage!' Note: the phonetic rendering in Version B as 'kooj' suggests possible author confusion of H and j sounds — see Gawain back-derivation notes.",
      appearsIn: ['yohbeghach-nagh'],
    },

    // ── New constructions ──────────────────────────────────────────────────────
    {
      word: "mach law'qu' jIH",
      definition: 'I am truly the most insignificant (superlative self-deprecation)',
      source: 'new',
      notes: "[N] Constructed superlative phrase from the Gawain single, Verse 1. Standard Klingon comparative requires 'A Q law' B Q puS' = 'A is more Q than B.' Here the emphatic -qu' replaces the puS element: 'mach law'qu' jIH' = 'I am truly very small.' Poetic compression of the full comparative. Gawain's self-deprecation before Arthur is strategic in Klingon terms: by asserting he is most expendable, he claims the right to take the challenge.",
      appearsIn: ['yohbeghach-nagh'],
    },
    {
      word: "may' wa'",
      definition: 'one last battle; one more fight',
      source: 'new',
      components: ["may'", "wa'"],
      notes: "[N] Track 5 recurring phrase. may' (battle) + wa' (one). The aged Hrothgar's declaration: before my final gathering, one battle remains. The simplicity of 'may' wa'' is the entire emotional argument of Track 5 — not glory-seeking but stubborn refusal to stop while alive.",
      appearsIn: ['beowulf-track-05'],
    },
    {
      word: "QoyrI'",
      definition: 'will echo; will resound (future-irreversible)',
      source: 'new',
      notes: "[N] Extended from QoQ-related root with future suffix -rI'. Standard Klingon lacks a simple verb 'to echo.' Track 1: 'qach boch'e' DaH bey neH QoyrI'' = 'the bright hall will now only echo with grief.' The -rI' suffix marks irreversibility — this echoing will happen and cannot be stopped.",
      appearsIn: ['beowulf-track-01'],
    },
  ],
};
