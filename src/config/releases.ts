export interface Track {
  title: string;
  soundcloudUrl: string;
  lyrics?: string;          // English translation
  lyricsOriginal?: string;  // Conlang version (tlhIngan Hol, Rihan, High Valyrian, etc.)
}

export interface Release {
  id: string;
  title: string;
  subtitle: string;
  type: 'album' | 'single';
  language: string;
  genre: string;
  sourceText: string;
  year: number;
  coverArt: string;
  description: string;
  tracks: Track[];
  soundcloudPlaylistUrl?: string;
}

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  githubUrl: string;
  soundcloudUrl: string;
  baseUrl: string;
}

export const releases: Release[] = [
  {
    id: 'yohbeghach-nagh',
    title: "yoHbe'ghach nagh",
    subtitle: "The Coward's Stone",
    type: 'single',
    language: 'tlhIngan Hol (Klingon)',
    genre: 'Acid Punk',
    sourceText: 'Sir Gawain and the Green Knight (c. 14th century)',
    year: 2026,
    coverArt: 'gawain-cover.png',
    description:
      "An acid punk retelling of Sir Gawain and the Green Knight. A warrior accepts a supernatural beheading game. He has one year to walk to his own death. Along the way, he is offered an escape — and he takes it, breaking his oath. The punishment is not death. It is the knowledge that he almost had enough honor, and did not.",
    tracks: [
      {
        title: "yoHbe'ghach nagh (The Coward's Stone)",
        soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2307280451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        lyrics: `In the season when the year turns cold and kings sit fat with feasting,
A rider came to Camelot who had no business being green.
His horse was green. His armor, green. His beard, like moss on tombstones.
And in his hand he held an axe that sang when it touched the air.

He said: "I've heard you're brave, you knights of this round table,
So here's a game that brave men play when they have nothing left to prove.
One swing. One clean and honest swing — take my head, and welcome.
But in a year and in a day, you come find me, and I take yours."
The hall went quiet. Every knight stared hard into his cup.
Arthur's hand moved toward the axe — but Gawain caught his wrist.
"My king, I am the least of these. My life subtracts the smallest sum.
Let me be the one who plays the dead man's game."

He swung. The head came off like a secret
Everybody knew but no one said aloud.
And the body — the headless, impossible body —
Picked it up, and the dead mouth spoke:

"Find me at the Green Chapel when the year has turned!
Come with your neck bare and your debts unpaid!
A warrior honors what his blade has earned —
Or was that swing the only brave thing you've ever done?"

Three hundred days of walking toward the place where you'll be killed.
Three hundred nights of lying down and picturing the axe.
Gawain rode north through winter — past the wolves, past the silence,
Past the point where even prayer felt like talking to an empty room.
He found a castle in the snow, and the lord inside was laughing,
And the lord said: "Stay! Three days of rest before you meet your end.
But let us make a game of it — whatever you gain beneath my roof,
You give to me. And whatever I gain in the hunt, I give to you."

The first day: the lord brought back a deer.
Gawain had gained nothing. Fair exchange.
The second day: the lord brought back a boar.
Gawain had gained nothing. Fair exchange.
The third day — the lord's wife came with something in her hands:
A sash, a charm, a whispered thing — "Wear this, and no blade can find you.
Wear this, and the Green Knight's axe will pass through you like wind through wheat.
All you have to do is keep it. All you have to do is not tell him."

And Gawain — who had walked three hundred days toward death,
Who had held his nerve through every frozen mile —
Took it. Tucked it underneath his armor.
And when the lord came home with a fox,
Gawain gave him nothing.

For the first time in a year of walking toward the axe,
He chose to live.
And the choice tasted like rust.

The Green Chapel was a wound in the hillside,
And the Green Knight stood there sharpening like a man
Who had all the time in the world, because he did.
Gawain knelt. Bared his neck. Closed his eyes.
The first swing — he flinched. The Knight laughed.
"I thought you were the one who walked three hundred days.
Flinching is for men who haven't decided yet."
The second swing stopped a hair's width from the skin.
"That was for the deer, and for the boar. Debts paid."
The third swing — bit. A nick. A trickle.
Gawain's hand went to his neck and came back red.

"That cut is for the sash you kept, the oath you broke!
You chose to live — and I don't blame you for it.
But a warrior who breaks his word must wear the scar,
And you will wear it till the world forgets your name!
Now stand up, Gawain. Stand up!
You are alive, and that's the hardest kind of honor —
Living with the knowledge that you almost were enough."

He wore the green sash every day after that.
Not to hide it — to show it.
Because the bravest thing he ever did
Wasn't swinging the axe, or walking north, or kneeling at the chapel.
It was wearing the proof of his failure
Where everyone could see it,
And never once pretending he was better than he was.

That — even a Klingon would respect.`,
        lyricsOriginal: `bov choHDI' DIS 'ej ta'pu' tIb Sop ba'taHvIS,
loDvetlh ghoSpu' Camelot — SuD porghDaj naQ.
SuD SarghDaj. SuD may'morghDaj. SuD rolDaj — nagh molDaq mI'wI' rur.
'ej nItlhDajDaq — obmaQ qengbogh — muD'e' choptaHDI' bom.

jatlh: "yoH SuvwI'pu' raS mIS, 'e' vIQoypu' —
vaj Quj — loD yoH QujDaj — toblu'DI' Quj!
wa'logh — nachwIj yIpe' — pItlh QaQ nob.
'ach DIS wa' jaj wa' ghIq — cho'el, 'ej nachraj vIpe'!"
qach tam. yaS Hoch — HIvje'Daj legh neH.
Arthur obmaQ ghop ghoS — 'ach Gawain nItlhDaj ghopta'.
"ta'wI', mach law'qu' jIH. yInwIj Haw'DI' — mach choH.
HIchaw' — Hegh Quj vIQuj."

ghaH qIp. nach nargh — peghmey rur
Hoch Sov 'ach pagh jatlhbogh.
'ej porgh — nach Hutlhbogh, laHbe'bogh porgh —
nachDaj tlhapqa', 'ej jat Heghpu'bogh jatlh:

"Chapel SuDDaq jISam — DIS choHDI'!
monglIj Hub Hutlh 'ej tlhIlraj nob Hutlh!
SuvwI' — tajDaj chavpu'bogh quv —
pagh qIpvetlh — yoHghach wa' neH DaghajDI'?"

wejvatlh jaj — yItDI' Daq HoHlu'bogh.
wejvatlh ram — QongDI' 'ej obmaQ Daj.
Gawain 'ev jaH — DIS bIrDaq — qa'ro' juSDI', tam juSDI',
tlhobtaHghach — pa' chIm jatlhtaH rur — juSDI' je.
qach Sampu' peD retlhDaq, 'ej joH mon paDaq,
jatlh joH: "yIratlh! jaj wej — vanpa' HeglIj.
'ach Quj wImagh — qachlIjDaq DachavtaHbogh —
HInob. 'ej chot'e' vISambogh — qanob."

jaj wa': joH chegh — Sargh Ha'DIbaH qengDI'.
Gawain chavpu' pagh. nob nIb — QaQ.
jaj cha': joH chegh — targhmey qengDI'.
Gawain chavpu' pagh. nob nIb — QaQ.
jaj wej — joH be' ghoS — ghopDajDaq vay' qeng:
Sugh — mI'wI' — jatlh: "'oH yIDIgh — taj pagh DughomlaH.
'oH yIDIgh — obmaQ SuD — SuS naQ bIH rur peD.
yIpolneH neH. yIja'Qo' neH."

'ej Gawain — wejvatlh jaj HeghDaq yItpu'bogh,
toDuj polpu'bogh qaStaHvIS Hoch HeH peD —
tlhappu'. may'morgh bIngDaq polpu'.
'ej joH cheghDI' — yIH qengDI' —
Gawain nob — pagh.

wa'DIch — DIS wa' obmaQDaq yItDI' —
yIn wIvpu'.
'ej wIvvetlh — nagh HuH rur.

Chapel SuD — HuD qabDaq rIQqa' rur,
'ej loDvetlh SuD pa' QamtaH — jej — loD rur
poH naQ qo'Daq ghajbogh, ghajmo'.
Gawain tor. mongDaj cha'. mInDaj SoQmoH.
qIp wa'DIch — Gawain vIH. loDvetlh SuD mon.
"loD wejvatlh jaj yItbogh DaDellaw'ta' —
vIHtaHghach — loD wIvbe'bogh."
qIp cha'DIch — DIr retlhDaq mev, juch wa' neH.
"Sargh Ha'DIbaH — targhmey — nob nIb. tlhIl noblu'."
qIp wejDIch — chop. mach. wa' 'Iw QIt.
Gawain ghop mongDaj ghoS — Doq chegh.

"chop'e' — Sugh polbogh, 'Ip ghorbogh!
yIn DawIvpu' — pIch vIghajbe'.
'ach SuvwI' 'IpDaj ghorbogh — rIQ yIDIgh,
'ej DIDIgh — qo' pongraj lIjpa'!
DaH yIQam, Gawain. yIQam!
bIyIn — 'ej 'oH batlh Qatlh law' Hoch Qatlh puS —
bIyIntaH — yap DaghaHlaw' 'e' DaSov."

Sugh SuD DIghpu' ghaH — jaj Hoch, ghIq.
So'meH ghobe' — cha'meH.
yoHghach Dun law' Hoch Dun puS ta'pu'bogh
obmaQ qIptaHghach ghobe', 'ev yIttaHghach ghobe',
Chapel torDI' ghobe'.
lujDaj tob — leghlaH Hoch Daq — DIghDI',
'ej not 'e' Hech — QaQ law' ghaH ghaHtaHbogh.

'oH — tlhIngan je — quv.`
      },
    ],
  },
  // {
  //   id: 'qul-batleth',
  //   title: "qul bat'leth",
  //   subtitle: 'The Beowulf Cycle',
  //   type: 'album',
  //   language: 'tlhIngan Hol (Klingon)',
  //   genre: 'Acid Punk',
  //   sourceText: 'Beowulf (c. 700–1000 CE)',
  //   year: 2026,
  //   coverArt: 'beowulf-cover.jpg',
  //   soundcloudPlaylistUrl: 'REPLACE_WITH_SOUNDCLOUD_PLAYLIST_EMBED_URL',
  //   description:
  //     "Seven tracks in tlhIngan Hol. One epic poem. One warrior's journey from glory to the grave. Beowulf is one of the oldest stories in the English language — a poem about a man who fights monsters with his bare hands, rules wisely for fifty years, and dies killing a dragon because he was too stubborn to stop being brave.",
  //   tracks: [
  //     { title: 'Heorot (The Golden Hall)', soundcloudUrl: 'REPLACE_1', lyrics: `[Track 1 lyrics]` },
  //     { title: "SuvwI' vIghaj (I Am a Warrior)", soundcloudUrl: 'REPLACE_2', lyrics: `[Track 2 lyrics]` },
  //     { title: "ghop'a' (Bare Hands)", soundcloudUrl: 'REPLACE_3', lyrics: `[Track 3 lyrics]` },
  //     { title: "bIQ'a' QIj (The Black Lake)", soundcloudUrl: 'REPLACE_4', lyrics: `[Track 4 lyrics]` },
  //     { title: "ta' qan (The Aged King)", soundcloudUrl: 'REPLACE_5', lyrics: `[Track 5 lyrics]` },
  //     { title: 'Wiglaf', soundcloudUrl: 'REPLACE_6', lyrics: `[Track 6 lyrics]` },
  //     { title: 'qul Qav (The Last Fire)', soundcloudUrl: 'REPLACE_7', lyrics: `[Track 7 lyrics]` },
  //   ],
  // },
];

export const siteConfig: SiteConfig = {
  title: 'Borrowed Tongues',
  tagline: 'Ancient texts. Alien tongues. Amplified myth.',
  description:
    'Music in constructed and historical languages. Acid punk in Klingon. Grunge in High Valyrian. Adapted from myths no one owns anymore.',
  githubUrl: 'https://github.com/BorrowedTongues',
  soundcloudUrl: 'https://soundcloud.com/borrowed_tongues',
  baseUrl: '/BorrowedTongues',
};

// Helpers
export function isPlaceholderUrl(url: string): boolean {
  return url.startsWith('REPLACE');
}

export function isPlaceholderLyrics(lyrics: string | undefined): boolean {
  if (!lyrics) return true;
  return lyrics.startsWith('[') && lyrics.endsWith(']');
}

export function buildEmbedUrl(trackUrl: string, accentHex = 'c8972a'): string {
  // If the URL is already a SoundCloud embed URL, use it directly
  if (trackUrl.startsWith('https://w.soundcloud.com/player/')) {
    return trackUrl;
  }
  const encoded = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23${accentHex}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;
}
