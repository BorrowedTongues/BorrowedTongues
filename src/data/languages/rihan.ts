import type { LanguageConfig } from '../../types/languages';

export const rihan: LanguageConfig = {
  slug: 'rihan',
  displayName: 'Rihan',
  sourceMedia: 'Rihannsu novel series (My Enemy, My Ally; The Romulan Way; Swordhunt; Honor Blade; The Empty Chair) · also known as Romulan',
  createdBy: 'Diane Duane',
  sourceLabels: {
    canon:      '[C-DD] Diane Duane / Rihannsu canon',
    derived:    '[D] Extended from Rihan roots',
    'fan-dict': '[C-F] Fan dictionary / community attested',
    new:        '[N] New construction',
  },

  grammarNotes: [
    {
      rule: 'About Rihan',
      detail:
        'Rihan is the language of the Rihannsu — the Romulan people — as developed by author Diane Duane in the Rihannsu novel series. It descends from Old High Vulcan, diverging when a faction of Vulcans rejected Surak\'s philosophy of pure logic and went into exile, eventually settling on Romulus and Remus. The language reflects this history: related to Vulcan but evolved in a different direction, retaining emotional complexity while developing the political precision a culture of hidden motives requires.',
    },
    {
      rule: 'Language family: Old High Vulcan (divergent branch)',
      detail:
        'Rihan and Vulcan share a common ancestor but have been mutually unintelligible for millennia. Where Vulcan pruned emotional vocabulary, Rihan expanded it. The -sahe suffix (ruling passion) and compound-heavy grammar are distinctly Rihan developments with no close Vulcan parallel.',
    },
    {
      rule: 'Word order: Subject-Verb-Object (SVO)',
      detail:
        'Rihan follows SVO order, broadly similar to English. Unlike Klingon\'s aggressive OVS inversion, Rihan syntax feels more direct: the subject speaks first, then acts, then acts upon something. This mirrors the Rihannsu self-image — identity precedes action.',
    },
    {
      rule: 'Adjectives follow nouns',
      detail:
        'Modifiers come after the noun they describe. "The forbidden earth" renders as fvil neh (earth / not-for-us), not neh fvil.',
    },
    {
      rule: 'No definite or indefinite articles',
      detail:
        'Rihan has no equivalents of "the" or "a." Context and word order carry definiteness. This gives the lyrics their compressed, declarative quality — every noun stands unqualified.',
    },
    {
      rule: "Apostrophes mark morpheme boundaries or glottal stops — not decorative",
      detail:
        "haen'hei (brother) = haen (kin-bond) + hei (male-kin marker). The apostrophe is a meaningful boundary. Rihan words with apostrophes carry more semantic load than words without — they are compounds fused at the seam. Rhaarh and rh'aen are different: rh'aen is aspirated with a glottal reset; rhaarh is a single continuant.",
    },
    {
      rule: 'The suffix -sahe (ruling passion / compelling force)',
      detail:
        'One of the most productive suffixes in Rihan. A -sahe word names not just an act or quality but the state of being consumed by it — the ruling passion that drives behavior. mnhei\'sahe = the ruling passion of honor (the central Rihannsu concept). arhem\'sahe = the binding law as a ruling force. rhienn\'sahe = blood-law, the compulsion of kin-obligation. hssai\'sahe = defiance as a passion, chosen refusal as identity.',
    },
    {
      rule: 'The nominalising suffix -ae turns verbs into nouns',
      detail:
        'ihwhei (to bury) → ihwhei\'ae (the act of burial). anna (to bind/betroth) → anna\'ae (the betrothal ceremony). The suffix is regular and productive; any verb can theoretically be nominalised this way.',
    },
    {
      rule: 'Compound words are preferred over multi-word phrases',
      detail:
        "Rihan compresses. Where English uses three words, Rihan uses one. hwaveyiir (command hall / empty throne room) is a single lexeme. uan'lihr (grief-proclamation / dying curse) fuses two concepts that English separates. This preference shapes how the lyrics read: dense, noun-heavy lines where each word carries a scene.",
    },
    {
      rule: 'Writing system',
      detail:
        "Rihan uses the Roman alphabet in transliteration throughout Duane's novels. The in-universe Rihan script exists but is not formally documented in the published source material. Fan communities have proposed several script designs; none is canonical. All Borrowed Tongues transcriptions use Roman-alphabet romanisation.",
    },
    {
      rule: 'This page: how we used Rihan',
      detail:
        "The Antigone single draws on Duane canon where available, extends from attested roots where it doesn't, and coins new constructions for concepts the existing vocabulary doesn't cover — particularly the legal/political vocabulary Antigone demands (binding decree, blood-law, defiance as principle). All derivation choices are documented in the vocabulary notes below.",
    },
  ],

  soundShifts: [
    {
      from: 'rh-',
      to: 'aspirated / fricative r',
      example: "rh'aen, rhienn, arhem, rhaarh",
      notes: 'A distinct phoneme — not separable r + h. Signals native Rihan vocabulary. Romanised as rh throughout Duane\'s work.',
    },
    {
      from: 'fv-',
      to: 'labiodental fricative cluster',
      example: 'fvil, fvaerh, fvillha, fvoerrh',
      notes: 'Rare cross-linguistically. One of the most recognizable Rihan sound signatures. Where fv- appears, the word is almost certainly native Rihan rather than borrowed.',
    },
    {
      from: 'll-',
      to: 'geminate lateral',
      example: "llhei (sister), fvillha",
      notes: 'Double-l as a single sustained phoneme. Tends to appear in kinship terms and emotionally loaded vocabulary.',
    },
    {
      from: 'hh-',
      to: 'heavy aspiration / voiced aspirate',
      example: 'fvillha hhaemn (he held / his arms held)',
      notes: 'Heavy aspiration signals compound boundaries and emphasis. The doubling is phonemically significant, not orthographic redundancy.',
    },
    {
      from: '-ae, -ei, -oe, -ai, -ie',
      to: 'diphthong — single syllable each',
      example: "haen'hei, ejhoi, anna'ae",
      notes: "Each vowel pair counts as one syllable. These diphthongs give Rihan its flowing, singable quality compared to Klingon's stop-heavy phonology.",
    },
    {
      from: 'Stress',
      to: 'falls on first syllable of native words',
      example: 'MNH-ei-sahe, FV-il, HA-en-hei',
      notes: 'First-syllable stress is consistent for native Rihan roots. Compound words stress the first element. This creates a forward-leaning rhythmic feel.',
    },
  ],

  vocabulary: [
    // ── Canon: Diane Duane attested ──────────────────────────────────────────
    {
      word: "mnhei'sahe",
      definition: 'The Ruling Passion — honor; the governing force of Rihannsu identity',
      source: 'canon',
      notes:
        "[C-DD] The central concept of the Rihannsu novels. Literally 'the ruling passion that is honor.' Not merely a virtue but an ontological state — a Rihannsu who has lost mnhei'sahe has lost the right to exist in the community. Used as the thematic spine of the Antigone adaptation: Antigone's choice to bury Polynices is mnhei'sahe. Creon's decree against it is arhem'sahe without mnhei'sahe — law without honor.",
    },
    {
      word: 'hfihar',
      definition: 'family; clan; the web of blood-obligation',
      source: 'canon',
      notes:
        "[C-DD] Duane canon. Broader than English 'family' — encompasses clan, lineage, and the obligations those entail. The Antigone conflict is fundamentally a hfihar conflict: which kin-obligation supersedes which?",
    },
    {
      word: 'i-jol',
      definition: 'love',
      source: 'canon',
      notes:
        '[C-DD] Attested in Duane. Appears in Fvil Neh-Ihwhei chorus and verse 2. Used for all forms of love — romantic, familial, principled. The two-kinds-of-love passage (verse 2) turns entirely on i-jol: the love that keeps you safe and the love that walks into the dark.',
      appearsIn: ['antigone'],
    },
    {
      word: 'rhienn',
      definition: 'blood',
      source: 'canon',
      notes:
        "[C-DD] Duane canon. The root of rhienn'sahe (blood-law) and rhienn'laorh (blood-catastrophe). Blood in Rihan is not merely biological — it carries obligation, identity, and the claim of the dead on the living.",
    },
    {
      word: 'arhem',
      definition: 'binding agreement; husband; that which compels',
      source: 'canon',
      notes:
        "[C-DD] Duane canon. Root of arhem'sahe (the binding law as ruling passion). The word covers both intimate and political binding — a marriage agreement and a legal decree share the same root. Antigone uses this deliberately: Creon's decree is arhem, but so is her obligation to her brother.",
    },
    {
      word: "jolan'tru",
      definition: 'greeting; welcome; the opening of peace',
      source: 'canon',
      notes:
        '[C-DD] The most widely known Rihan word outside the novels, appearing in Star Trek media. Not used in the Antigone lyrics but included as a canonical anchor point for readers approaching the language.',
    },
    {
      word: 'mnekha',
      definition: 'good; well; right',
      source: 'canon',
      notes:
        '[C-DD] General-purpose positive evaluator. Attested in Duane. Not used in Antigone.',
    },
    {
      word: 'kholhr',
      definition: 'to avenge; to settle a blood-debt',
      source: 'canon',
      notes:
        "[C-DD] Duane canon. The word used in Eurydice's final curse in the Daefv final chorus: '(Eurydice — hrrau kholhr)' — toward vengeance, into the settling of a debt. The parenthetical stage direction uses kholhr as destination.",
      appearsIn: ['antigone'],
    },
    {
      word: 'gaeth',
      definition: 'to go; to walk; to move with purpose',
      source: 'canon',
      notes:
        "[C-DD] Attested: 'Ael gaeth' in My Enemy, My Ally. One of the most rhythmically useful Rihan verbs — short, clean, and carrying forward motion. Used throughout Fvil Neh-Ihwhei as Antigone acts rather than deliberates: Au gaeth (I go), gaeth hrrau (going toward).",
      appearsIn: ['antigone'],
    },
    {
      word: 'phralae',
      definition: 'to speak; to declare; to make a formal statement',
      source: 'canon',
      notes:
        '[C-DD] Duane canon. More formal than casual speech — implies a statement made with weight. Used at verse 2 line 5 (Antigone explaining her choice to Ismene: she speaks, she does not merely talk) and verse 4 line 1 (her confrontation with Creon is a declaration, not a conversation). Appears in the Daefv final chorus stage directions.',
      appearsIn: ['antigone'],
    },
    {
      word: "llhei",
      definition: 'sister; female kin of equal generation',
      source: 'canon',
      notes:
        "[C-DD] Duane canon. The geminate ll- marks emotional intensity in the kinship term. Used for Ismene throughout Fvil Neh-Ihwhei. The parallel with haen'hei (brother) is intentional — both words carry the 'hei' kin-suffix.",
      appearsIn: ['antigone'],
    },
    {
      word: "haen'hei",
      definition: 'brother; male kin of equal generation',
      source: 'canon',
      notes:
        "[C-DD] haen = kin-bond + hei = male-kin marker. One of the most repeated words in Fvil Neh-Ihwhei — Antigone names her brother six times in the opening two verses. The repetition is the argument: he is haen'hei, therefore the decree is wrong.",
      appearsIn: ['antigone'],
    },
    {
      word: 'afvu',
      definition: 'darkness; the dark; night without stars',
      source: 'canon',
      notes:
        "[C-DD] Attested in Duane. Used in both Antigone tracks as a location as much as a state — Antigone goes into darkness voluntarily (Fvil Neh-Ihwhei verse 2), finds Haemon in darkness (Daefv verse 3), and the final collapse happens in darkness. The word accumulates meaning across both tracks.",
      appearsIn: ['antigone'],
    },
    {
      word: 'fvil',
      definition: 'earth; soil; the ground below',
      source: 'canon',
      notes:
        '[C-DD] The title word of Track 1. The forbidden earth — the ground Antigone touches to bury Polynices. Used throughout Fvil Neh-Ihwhei: as setting, as act, as argument. The chorus makes it explicit: fvil is not the king\'s, it belongs to a law older than Creon.',
      appearsIn: ['antigone'],
    },
    {
      word: 'tam',
      definition: 'still; quiet; at rest; held motionless',
      source: 'canon',
      notes:
        '[C-DD] Used in Daefv to describe the cave (uaefv: fvil fvaerh — tam hna = cave: stone, stone — still, this) and Haemon after death (Haemon heisae — tam). The word moves from descriptive to elegiac across the two uses.',
      appearsIn: ['antigone'],
    },

    // ── Derived: extended from Rihan roots ───────────────────────────────────
    {
      word: "arhem'sahe",
      definition: 'the binding law; law as ruling passion; decree-as-compulsion',
      source: 'derived',
      components: ['arhem', '-sahe'],
      notes:
        "[D] Derived: arhem (binding agreement) + -sahe (ruling passion suffix). Creon's decree is arhem'sahe — the law that has become his consuming force, displacing mnhei'sahe (honor) entirely. The word appears six times across Fvil Neh-Ihwhei, each use Creon's voice becoming louder.",
      appearsIn: ['antigone'],
    },
    {
      word: "rhienn'sahe",
      definition: 'blood-law; the law of blood; kin-obligation as ruling passion',
      source: 'derived',
      components: ['rhienn', '-sahe'],
      notes:
        "[D] Derived: rhienn (blood) + -sahe. The counter-principle to arhem'sahe. Antigone's argument in one word: blood-law predates state law. Appears in verse 4 of Fvil Neh-Ihwhei as the principle she dies for, and in the Daefv final chorus as the law she affirmed.",
      appearsIn: ['antigone'],
    },
    {
      word: "hssai'sahe",
      definition: 'defiance as ruling passion; chosen refusal as identity',
      source: 'derived',
      components: ['hssai', '-sahe'],
      notes:
        "[D] Derived: hssai (defiance, open challenge) + -sahe. Creon's accusation against Antigone — he calls her act hssai'sahe, meaning she has made defiance itself her ruling passion. Antigone does not disagree. Three appearances in Fvil Neh-Ihwhei's middle verses.",
      appearsIn: ['antigone'],
    },
    {
      word: "ihwhei'talla",
      definition: "burial duty; the obligation to bury; the rite that cannot be refused",
      source: 'derived',
      components: ['ihwhei', '-talla'],
      notes:
        "[D] Derived: ihwhei (to bury) + -talla (duty/obligation suffix, derived from attested Rihan constructions). The word that names what Antigone did not choose — it chose her. Appears in Daefv verse 2, line 7: 'Ihwhei'talla — neh lihr' = burial-duty, not mine to refuse.",
      appearsIn: ['antigone'],
    },
    {
      word: "uan'lihr",
      definition: "grief-proclamation; dying curse; the last words of the grieving",
      source: 'derived',
      components: ['uan', 'lihr'],
      notes:
        '[D] Derived: uan (grief/anguish) + lihr (proclamation/statement). A compound naming the specific act: the formal curse of a dying person, spoken in grief and therefore carrying weight. Used for Eurydice\'s final words in Daefv verse 4 and final chorus. The word appears twice in verse 4 — first when Eurydice hears the news, second after she has gone to her chamber.',
      appearsIn: ['antigone'],
    },

    // ── Fan dictionary / community attested ──────────────────────────────────
    {
      word: 'daefv',
      definition: 'veil; formal covering; sash extended to mean ceremonial cloth',
      source: 'fan-dict',
      notes:
        "[C-F] Extended from the attested Rihan belt/sash vocabulary. The extension to 'veil' is documented in fan dictionary resources. Antigone's veil is the object that gives Track 2 its name — the thing Haemon gave her for their wedding that she repurposes for her death. Central to both tracks: the word appears at the end of Fvil Neh-Ihwhei (outro) and throughout Daefv.",
      appearsIn: ['antigone'],
    },
    {
      word: 'uaefv',
      definition: 'cave; sealed stone chamber; place of enclosure',
      source: 'fan-dict',
      notes:
        "[C-F] Community attested. Opens Daefv: 'Uaefv: fvil fvaerh — tam hna' = Cave: earth, stone — still, this. The word's similarity to daefv (veil) is deliberate in the source lyrics — both words name coverings, both words name things Antigone is enclosed by.",
      appearsIn: ['antigone'],
    },
    {
      word: 'fvaerh',
      definition: 'stone; rock; hard ground',
      source: 'fan-dict',
      notes:
        '[C-F] Community attested. Appears in Daefv verse 1 (the cave walls) and the final chorus stage direction: (phralae — hrrau fvaerh) = she said it to the stone walls.',
      appearsIn: ['antigone'],
    },
    {
      word: 'mosaram',
      definition: 'wind; weather; season; the movement of the world',
      source: 'fan-dict',
      notes:
        "[C-F] Community attested. Used in Daefv for the grove scene (verse 2: Rhe'ae mosaram — the weather/season of that time) and as a personified force in verse 3 (Mosaram — rhe — afvu = wind, coming, darkness). The word carries the passage of time as much as weather.",
      appearsIn: ['antigone'],
    },
    {
      word: 'ejhoi',
      definition: 'to choose with finality; to make the irrevocable choice',
      source: 'fan-dict',
      notes:
        '[C-F] Community attested. The key verb of Daefv — Antigone\'s choice to die on her own terms is ejhoi, not merely "to decide." Five appearances in the Daefv chorus: Au ejhoi (I choose), each repetition more definitive. The word also appears at the close of Fvil Neh-Ihwhei: Rhe ejhoi hna (this choosing, this finality).',
      appearsIn: ['antigone'],
    },

    // ── New constructions ─────────────────────────────────────────────────────
    {
      word: 'uihvu\'han',
      definition: "traitor; one who betrayed their blood; oath-breaker",
      source: 'new',
      notes:
        "[N] Constructed for Fvil Neh-Ihwhei. uihvu = betrayal/breaking + han = person-suffix. The word Creon uses for Polynices in the herald's decree. Antigone hears it and thinks: 'that is my brother.' The word appears only once — in the second line of verse 1 — but it is the word the entire track argues against.",
      appearsIn: ['antigone'],
    },
    {
      word: "heis'an",
      definition: 'the dead ones; those who have gone; the dead as a collective',
      source: 'new',
      notes:
        "[N] Constructed: heis = death/dying + -an (collective suffix). The plural/collective form distinguishing 'the dead as a class' from heisae (to die as an act). Used in the Fvil Neh-Ihwhei chorus: 'Heis'an neh — rhienn —' = the dead are not the king's — they belong to blood-law.",
      appearsIn: ['antigone'],
    },
    {
      word: 'ihwhei',
      definition: 'to bury; to return to the earth; to give the dead their due',
      source: 'new',
      notes:
        "[N] Base verb form; ihwhei'talla is the derived obligation form. Used in Fvil Neh-Ihwhei chorus: 'Au ihwhei hrrau fvil' = I bury toward the earth / I return him to the earth. Also appears in Daefv verse 4: 'Rrh'e ihwhei — fvillha khoi' = she was buried, he locked away.",
      appearsIn: ['antigone'],
    },
    {
      word: "anna'hei",
      definition: 'betrothed; promised one; the one bound to you',
      source: 'new',
      notes:
        "[N] Constructed: anna (binding/betrothal) + hei (person-suffix, as in haen'hei, llhei). Haemon's title throughout Fvil Neh-Ihwhei verse 4: Antigone names him twice before she says she still chose burial. The name makes the sacrifice explicit. 'Anna'ae' (the betrothal ceremony) appears in the outro without annotation — the ceremony Antigone is repurposing.",
      appearsIn: ['antigone'],
    },
    {
      word: 'orheika',
      definition: 'ancestor; that which came before; the force of ancestral precedent',
      source: 'new',
      notes:
        '[N] Constructed for the Fvil Neh-Ihwhei verse 1 and 2 closing lines. orheika names Polynices not as a person but as what he represents to Antigone — the ancestral line, the one she learned to walk behind. Used three times in verses 1–2, each time as what Creon\'s decree fails to account for.',
      appearsIn: ['antigone'],
    },
    {
      word: 'uan',
      definition: 'grief; anguish; weight carried after loss',
      source: 'new',
      notes:
        "[N] Base noun form; uan'lihr is the derived compound. Used in Daefv verse 3 (Phralae uan = speak/declare grief) and the final chorus (Uan neh hssai — grief is not defiance, Eurydice's line). The word is deliberately simple — one syllable, no compound — because grief is not political in Rihan, it just is.",
      appearsIn: ['antigone'],
    },
    {
      word: 'haenhe',
      definition: "hands; arms; the physical body's extensions of intent",
      source: 'new',
      notes:
        "[N] Constructed: related to haen (kin-bond) but shifted to the physical. haenhe names hands as instruments of connection and act. Used in Daefv for Creon reaching out to Haemon (Creon — hisl u' haenhe), for Haemon's death posture (Fvillha hhaemn — afvu = he held her / his arms, dark), and in the final chorus stage direction (Haemon — haenhe).",
      appearsIn: ['antigone'],
    },
    {
      word: 'heisae',
      definition: 'to die; to cease; to end',
      source: 'new',
      notes:
        '[N] Base verb form; heis\'an (the dead ones) is the derived collective. Used once in Daefv verse 3: Haemon heisae — tam = Haemon died — still. The placement of tam (still/quiet) after the verb turns death into a state rather than an act.',
      appearsIn: ['antigone'],
    },
    {
      word: 'khoi',
      definition: 'to lock; to close off; to seal',
      source: 'new',
      notes:
        '[N] Used throughout Daefv verse 4 as the verb for every closing: the messenger locks his words (Nneikha lehrei — khoi), Eurydice locks her door (Eurydice vaed — khoi), Antigone is locked in the cave (Rrh\'e ihwhei — fvillha khoi), the messenger departs and locks out (Ve\' itaeru — khoi). Four appearances in one verse — the whole verse is a closing.',
      appearsIn: ['antigone'],
    },
    {
      word: 'fvoerrh',
      definition: 'last; final; the end of a sequence',
      source: 'new',
      notes:
        "[N] Used twice in Daefv verse 4, both times with uan'lihr: 'Phralae fvoerrh — uan'lihr' = the last declaration, the dying curse. The word's fv- opening ties it phonologically to fvil (earth) and fvaerh (stone) — endings, in Rihan, taste of stone.",
      appearsIn: ['antigone'],
    },
    {
      word: 'hwaveyiir',
      definition: 'command hall; empty throne room; the space where power has failed',
      source: 'new',
      notes:
        "[N] Constructed compound for Daefv's final chorus stage directions. Two appearances: '(Creon — hwaveyiir afvu)' = Creon in the empty command hall, darkness. The word is the destination of the entire play: Creon wins every argument and ends alone in hwaveyiir.",
      appearsIn: ['antigone'],
    },
    {
      word: "rhienn'laorh",
      definition: "blood-catastrophe; the tragedy born of blood-law",
      source: 'new',
      components: ['rhienn', 'laorh'],
      notes:
        "[N] Constructed: rhienn (blood) + laorh (catastrophe/ruin). The word that names what the play is about from Creon's perspective — he reads Antigone's act as rhienn'laorh, the catastrophe that blood-obligation produces when it refuses political order. The word appears once in Fvil Neh-Ihwhei verse 4 and once as the penultimate line of Daefv's final chorus — the play's last named concept before 'En. En.'",
      appearsIn: ['antigone'],
    },
  ],
};
