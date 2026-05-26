export interface Track {
  title: string;
  soundcloudUrl: string;
  lyrics?: string;            // English translation
  lyricsOriginal?: string;    // Conlang version (tlhIngan Hol, Rihan, High Valyrian, etc.)
  lyricsAnnotated?: string;   // Marked-up conlang for inline tooltips. Syntax: [[word]] or [[display|canonical]]
}

export interface Release {
  id: string;
  title: string;
  subtitle: string;
  type: 'album' | 'single';
  language: string;           // Display string: "tlhIngan Hol (Klingon)"
  languageSlug?: string;      // LanguageConfig.slug for tooltip system: "klingon", "high-valyrian", etc.
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
    languageSlug: 'klingon',
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
  {
    id: 'qul-batleth',
    title: "qul bat'leth",
    subtitle: 'The Beowulf Cycle',
    type: 'album',
    language: 'Klingon',
    languageSlug: 'klingon',
    genre: 'Acid Punk',
    sourceText: 'Beowulf (c. 700–1000 CE)',
    year: 2026,
    coverArt: 'Beowulf_Album_Art.png',
    soundcloudPlaylistUrl: 'https://soundcloud.com/borrowed_tongues/sets/qul-batleth-the-beowulf-cycle',
    description:
      "A seven-track acid punk concept album in tlhIngan Hol (Klingon), adapting the Old English epic poem Beowulf (c. 700-1000 CE, public domain). Each track is written as a song in Klingon — not a literal translation, but lyrics composed to sing in the language's natural rhythm, aggression, and compactness.",
    tracks: [
      {
        title: 'Heorot (The Golden Hall)',
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/heorot-the-golden-hall-1?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=53b12877c8a24f028bd5fad9719a97ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `Where the grey sea breaks against the northern stone
And the wind sings cold through the hollow bone of winter,
There rose a hall in the age before the sorrow —
Timbers tall as ships, and rafters carved with glory.
Hrothgar called it Heorot, and the name rang true:
A crown of oak and gold beneath the endless sky.

Every lord and thane from every wind-scarred shore
Came bearing mead and memory to fill those benches.
The scops sang tales of battles no man living saw,
And the firelight threw their shadows long against the walls.
No hunger there, no exile, and no bitter word —
Just the roar of fellowship that made the darkness small.

But somewhere past the marshes,
Past the places where the moonlight will not go,
Something heard the laughter
And it learned the shape of everything it hated.

Heorot! Heorot!
Golden hall, how bright you burn against the night!
Heorot! Heorot!
Can your walls hold back what crawls beyond the light?

He came without a name that any tongue could carry,
A shape between the shadows and the swallowing dark —
Grendel, born of exile, cursed before the making,
Older than the memory of the stones beneath the marsh.
He tore the door like parchment, and the screaming started,
And the benches ran with blood before the torches died.

Morning found the living kneeling in the wreckage,
Counting all the faces that the night had taken.
Hrothgar wept — a king unmade by something shapeless —
And the hall that once rang gold now rang with grief alone.
They scrubbed the floors. They lit the fires. They prayed.
And the next night, Grendel came again.

Heorot! Heorot!
Golden hall, the blood has stained your oaken floor!
Heorot! Heorot!
Twelve long winters — who will stand and fight once more?

Twelve years the monster feasted.
Twelve years the warriors fell like wheat before the scythe.
No blade could find his body.
No prayer could stop the sound of footsteps in the night.
The mead-hall stood, but empty —
A monument to everything that courage couldn't save.

Heorot... Heorot...
The golden hall waits, and the darkness remembers your name.`,
        lyricsOriginal: `bIQ'a' bIr HeHDaq, nagh vorgh retlhDaq,
SuS 'oy' bey rur, qaStaHvIS DIS bIr Hoch,
qach Dun chenpu' — tIq law' Duj tIq puS,
Sor Dun rur, DungDaj chal ghom'a' patlh.
Hrothgar pong nob — "Heorot" — 'ej teH pong:
mIp boch'e', batlh qach'e', chal bIngDaq Quch.

joq Hoch HeHvo' ghoSpu' joH je yaS,
HIq nob, lut qen nob, raS naQ teb chaH.
lutmey bom qonwI'pu' — may' tIQ law'qu',
'ej qul wov lIwDaj tInqu' chenmoH.
pa' ghung tu'be', pa' naw' tu'be',
jup bey QoQ neH — Hurgh mach chenmoH.

'ach ngech HurghtaH retlh,
maS wov jaHbe'bogh DaqDaq,
vay' Qoy'pu' —
maw'meH Hoch, muSmeH Hoch, Sov'eghpu'.

Heorot! Heorot!
qach SuD, qach boch — ram DechDI' chIS SoH!
Heorot! Heorot!
tlhoy'lIj — QIb ghoStaHbogh bot'a'?

pong ghajbe' ghaH — jat pagh qonlaH,
QIb jIngDaq qaS, Hurgh SoptaHbogh rur.
Grendel — naw' chenpu'bogh, quvHa' qen law',
nagh bIngDaq yIntaHbogh ngech qan law'.
lojmIt not poSmoH — Huv neH, pujmoH —
'ej bey taH, 'Iw taH, Soj Hop qul Hegh.

po Daq lIng — yIntaHbogh pumDI' QIt,
qab law' toD, qab law' Qaw' — ram tlhap Hoch.
ta' SaQ — ta' Qaw' — vay' QIb porghbe' HoH —
'ej qach boch'e' DaH bey neH QoyrI'.
QaD luDIchqa'. qul luqemqa'. tlhob chaH.
'ej ram veb — Grendel cheghqa'.

Heorot! Heorot!
qach SuD, qach boch — 'Iw DaH Sor rur QaD!
Heorot! Heorot!
wa'maH cha' DIS bIr — 'Iv DaH Qamqa' 'ej Suv?

wa'maH cha' DIS — qa'Hom Sop taH.
wa'maH cha' DIS — SuvwI'pu' pum, tlhIl rur bey.
taj pagh ghom — porgh HotlaHbe'.
tlhob pagh Qoj — 'ach peDtaH 'aqroS retlh yIt.
qach QamtaH — 'ach chIm qach'e' —
vay' Hoch toDlaHbe'bogh toDuj'e' nagh'e'.

Heorot... Heorot...
qach SuD loStaH. Hurgh pongraj qaw.`,
      },
      {
        title: "SuvwI' vIghaj (I Am a Warrior)",
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/suvwi-vighaj-i-am-a-warrior-2?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=2b5f9584a85941928db0cd0b5ce1adcf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `I was born where the storms make wreckage of the coast,
Where the sea takes everything that isn't nailed to bedrock.
My father's name was thunder in the halls of fourteen kings,
And I carried it like iron long before I earned my own.
I have wrestled in the deep where the water has no bottom,
Held the throats of sea-beasts till the ocean turned to red.
I have walked into the places where the bravest men turn back
And I've come home every time with someone else's story ended.

They told me of a kingdom where the night has teeth,
Where a creature no one names still feeds on sleeping men.
They told me not to go —
And that's the only reason that I'm here.

I am a warrior! These hands — this heart — this fury!
I am a warrior! I was not made to kneel!
I am a warrior! My name will ring in halls I've never entered,
And when the last of me is gone, the song remains!

Old king, I see the ruin written in your eyes —
Twelve winters and the weight of every man you couldn't save.
I didn't cross the whale-road for your gold or for your praise.
I came because a hall should ring with laughter, not with grief.
Grendel carries no blade — so neither will I.
Let it be fist and fury, let it be the raw and honest way.
I will meet him as he is: a thing of claw and malice,
And I'll answer him with nothing but the strength that I was born to.

No armor and no edge between my skin and his —
Just the question every warrior was born to finally answer:
When the darkness comes for you,
Do you have enough inside to send it back?

I am a warrior! These hands — this heart — this fury!
I am a warrior! I was not made to kneel!
I am a warrior! My name will ring in halls I've never entered,
And when the last of me is gone, the song remains!

If I fall, then let me fall with my hands around his throat.
If I die, then write it down: he died reaching forward.
A life spent running from the dark
Is just a slower kind of death —
And I have never been the kind to die that slowly.

I am a warrior.
I am a warrior.
Tonight, the hall will learn my name.`,
        lyricsOriginal: `jIboghpu' — SuS qul Duj Qaw'bogh HeHDaq,
bIQ'a' tlhap vay' Hoch — nagh HoS neH taHlaH.
vavwI' pong — 'oH rav ghor wa'maH loS tach'e',
'ej vIqengpu' — 'ach pong'e' vIchavnIS.
bIQ qIj'e' jISuvpu' — bIng Hutlhbe'bogh bIQ,
bIQ Ha'DIbaH Hugh vIghoppu', bIQ Doq chenpu'.
He yoHwI'pu' cheghbogh Daq vIyItpu' —
'ej reH jIcheghpu', latlh lut vanpu'.

wo' vIja'lu'pu' — ram Ho' ghajbogh Daq,
qa'Hom pong ghajbe' — QongwI'pu' Sop taH.
"yIjaHQo'!" jatlh chaH —
'ej 'oH meq wa' neH — naDev jIQam!

SuvwI' jIH! ghopvam — tIqvam — QeHvam!
SuvwI' jIH! jItor — not jItobbe'!
SuvwI' jIH! pongwIj bey'a' taH tach jISuchbe'bogh —
'ej jIvanDI' — bom taH!

ta' qan — mInlIjDaq Qaw' vIlaD,
wa'maH cha' DIS bIr, SuvwI' tobbe'bogh tIq nIb Hoch.
bIQ'a' vIchIjbe' — mIplIj, naD'e' — qatlhmo' ghobe'.
qach bey QoQ taH — SaQ taHbe' — 'oH vIneH!
Grendel nuH qengbe' — nuH vIqengbe' je.
ghop qab'e' neH, qu' val'e' neH, ghob'e' neH.
vIghom ghaH 'oHtaHghach — mIgh, ghop, muS,
'ej boghDI' HoS neH — jang vIjanglaH!

may'morgh pagh — DIr je porgh neH jIngDaq,
ghel wa'DIch — SuvwI' Hoch jangmeH boghpu':
Hurgh ghoSDI' —
nItlhDaq yap DaghajlaH'a'?

SuvwI' jIH! ghopvam — tIqvam — QeHvam!
SuvwI' jIH! jItor — not jItobbe'!
SuvwI' jIH! pongwIj bey'a' taH tach jISuchbe'bogh —
'ej jIvanDI' — bom taH!

jIpumchugh — Grendel Hugh retlhDaq ghopwIj yItu'!
jIHeghchugh — yIghItlh: "HeDaj yIlegh — vIH'eghpu'!"
yIn — Hurgh Haw'taHghach —
'oH Hegh QIt rur neH —
'ej not jIHegh QIt — not!

SuvwI' jIH.
SuvwI' jIH.
DaHjaj ram — pongwIj ghoj qach.`,
      },
      {
        title: "ghop'a' (Bare Hands)",
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/ghopa-bare-hands-3?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=bcf4935bb48a44b19f38ed600230ba68&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `The torches die. The warriors lie in rows like offered things.
I keep my eyes half-shuttered, and I slow my breathing down.
Let him think I'm sleeping. Let him think I'm meat.
I can hear the marshes dripping from his footsteps on the stone.
The door doesn't open — it surrenders.
And the smell that comes before him is the smell of every grave.

He takes the first man like a loaf of bread —
I hear the wet, unmakeable sound of a body coming apart,
And I hold still, I hold still, I hold still —
Because the beast must come to me. The beast must choose me.
And then his fingers find my arm,
And everything inside me turns to war.

You thought I was another sleeping lamb?
You thought this hall had nothing left to give?

Bare hands! Bare hands!
I've got you now — there is no going back!
Bare hands! Bare hands!
I'll tear the arm from off your wretched back!
You came here for a feast —
Tonight, the feast is you!

He pulls — I pull harder. He twists — I twist him down.
The hall erupts around us: timbers cracking, benches flying,
Warriors scrambling for the walls as two forces
Older than the argument of iron
Settle it the oldest way there is.
His eyes are wide — he's never felt this before.
No one has ever held him back. No one has ever matched him.
And I can feel the socket giving way.

Bare hands! Bare hands!
I've got you now — there is no going back!
Bare hands! Bare hands!
I'll tear the arm from off your wretched back!
You came here for a feast —
Tonight, the feast is you!

The sinew stretches like a rope about to snap.
The blood runs hot across my knuckles — his or mine, it doesn't matter.
One last pull. One last sound like the world
Ripping at the seam —

BARE HANDS! BARE HANDS!
The arm comes free! The monster screams and runs!
BARE HANDS! BARE HANDS!
Let him die crawling in his mother's filthy dark —
I hold the proof above my head,
And Heorot belongs to men again!`,
        lyricsOriginal: `qul Hegh. SuvwI'pu' QongDaq ratlh, nob rur.
tlhuH vImachmoH — mInwIj vISoQmoH.
Soj 'e' yIHar! Ha'DIbaH 'e' yIHar!
ngech bIQ peDtaH — yItDaj nagh'e' Qoy.
lojmIt not poSmoH — lojmIt jIvmoH neH —
pIvlob ghaH — molDaq pIv Hoch ghoS.

wa'DIch SuvwI' tlhap — tIr ngoQ rur —
QoytaHbe'bogh wab — porgh wav'e' —
'ej jIQamtaH, jIQamtaH, jIQamtaH —
qa'Hom ghoSnIS jIH. qa'Hom wIvnIS jIH.
ghopDaj nItlhwIj SamDI' —
porghwIj naQ noH chenmoH!

QongwI' latlh 'e' DaQub'a'?
qach noblI' pagh ghajqa' 'e' DaQub'a'?

ghop'a'! ghop'a'!
qaghoppu' — DaH bInarghlaHbe'!
ghop'a'! ghop'a'!
DeSlIj — porghlIjvo' — vIpeSlaH!
Soj DaneHpu' —
DaHjaj ram — SoH Soj SoH!

ghaH lup — jIHvaD lup law'! ghaH nIH — jIHvaD nIH bIng!
qach ghor — Sor pum — raSmey pumtaH,
SuvwI'pu' tlhoy' Haw', HoS cha' tay'taHvIS —
nuj je nItlh law' tIQ — nuj je nItlh qan law'
noH tIQ law' QI'lop noH qan puS.
mInDu'Daj poSqu' — not 'oH vIqotlhpu'.
not vay' botpu'. not vay' nIbpu'.
'ej tlhuQ peSlu'taH — jISov!

ghop'a'! ghop'a'!
qaghoppu' — DaH bInarghlaHbe'!
ghop'a'! ghop'a'!
DeSlIj — porghlIjvo' — vIpeSlaH!
Soj DaneHpu' —
DaHjaj ram — SoH Soj SoH!

to' boch tlhay rur — peSlu'meH poH ghaH.
'Iw tujqu' ghopwIjDaq — ghopDaj pagh ghopwIj — potlhbe'.
wa'logh Qav. wa'logh wab — qo'
yermey peS rur —

GHOP'A'! GHOP'A'!
DeSDaj narghpu'! qa'Hom bey 'ej Haw'!
GHOP'A'! GHOP'A'!
SoSDaj QIbDaq HeghmeH — 'ej Haw' ghaH!
toQ Dung Dungvo' — vIlan —
'ej Heorot — loDpu'vaD je — Soj je!`,
      },
      {
        title: "bIQ'a' QIj (The Black Lake)",
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/biqa-qij-the-black-lake-4?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=dd389e9b737c4e9abe94e766eaa6e51e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `They thought the story ended with the arm nailed to the rafter,
With the feasting and the songs and Hrothgar's golden gifts.
But grief has got a mother, and her memory is long,
And she came up from the black lake
On a night that tasted like the end of everything.
She took his oldest friend — the one who'd stood beside the throne
Through every one of those twelve winters —
And she dragged him screaming to a place no living man has seen.

They showed me where the water starts to darken past the trees,
Where the stags would rather die of thirst than drink.
The branches hang like fingers and the surface doesn't ripple —
It just waits, the way a throat waits for the swallowing.
The other men stood back. I didn't blame them.
I put on my ring-mail. I took a borrowed sword.
And I walked into the water like a man walks into prayer:
Eyes open, lungs full, ready for the answer to be no.

Down, and down, and down —
Past the reach of daylight,
Past the place where pressure makes a cathedral of your skull,
Into the deep where ancient things have built their churches.

Black water, take me deeper —
I have come to find the thing that feeds on sorrow!
Black water, I'm not drowning —
I'm arriving. And I haven't come to bargain.

She hit me like a landslide in the half-light of her cave,
All fury and remembrance and a mother's sacred rage.
The borrowed sword bit nothing — just skated off her hide
Like a prayer thrown at a god who isn't listening.
But there — against the cavern wall, among the hoarded bones —
A blade forged in an age before the ages,
Too heavy for a common man to lift,
And I am not, I have never been, a common man.

Black water, hear me roaring —
I have found the blade that giants left behind!
Black water, she is falling —
The ancient edge remembers what it was designed to do!

I took her head.
The blood dissolved the blade down to the hilt —
As if the sword had lived for only this one purpose
And was glad, at last, to die.
The water brightened. The creatures fled.
And I rose toward the surface with the proof of what I'd done,
Into a sky that had already started mourning me.

They'd given up. The water had been boiling red for hours.
But I walked out of the lake like a man returning
From a conversation with the bottom of the world —
And I had won the argument.`,
        lyricsOriginal: `DeSbogh lut vanpu' 'e' luQub — toQ lanbogh rur,
SoptaH 'ej bomtaH 'ej Hrothgar mIp nob.
'ach bIQ ngech — SoSDaj SoS'a'Daj ghaj ghaH,
'ej qawDaj tIq — 'ej bIQ'a' QIjvo' cheghpu',
ram'e' Hoch vanbogh rur.
jupDaj tIQ law' — raS retlhDaq QamtaHbogh'e',
qaStaHvIS wa'maH cha' DIS bIr Hoch'e' —
'ej bey SaQtaHvIS luppu' — legh pagh Daq.

Daq cha'lu' — bIQ QIjchoHbogh Sor retlh,
'Iw SarghDaq Hegh'eghqang — 'ach tlhutlhbe'.
nItlh rur 'ay Sor — 'ej bIQ ngoDbe' —
loStaH neH, Hugh loDDI' loStaH rur.
latlh mev. pIch vIghajbe'.
may'morgh may'Duj, etlh ngaqlu'bogh vItlhap.
bIQDaq jIyIt — tlhobtaHbogh loDDaq yIt rur:
mIn poSqu', tlhuH yap, jangmeH — "ghobe'" — jIghuH.

bIng, bIng, bIng law' —
jaj wov ghoSbe'bogh retlh Daq,
nachDaj qach Dun rur'eghmoH 'uyDaq,
bIngDaq — nagh tIQ qach Dun chenmoHbogh Daq.

bIQ'a' QIj — jISupqu'!
bIQ ngech SaQtaH Soptabogh'e' vISam!
bIQ'a' QIj — jIQabbe' —
jIpaw'. 'ej jImagh — jImagh — jImagh!

nagh nIHDI' rur muqIppu' — pa' wovHa'Daq,
QeH naQ 'ej qaw naQ 'ej SoS bortaS quv.
etlh ngaqlu'bogh — DIrDaj chIpbe' neH —
tlhob rur — Qun QoyQo'bogh tlhoblu'bogh.
'ach pa' — pa' tlhoy' nagh retlh, nagh HomDaq —
etlh chen'eghpu' DIS qen law' DIS qen puS,
loD motlh pItlh'e' — latlhqu' —
'ej jIH — not jIghaHpu', not jIghaH — loD motlh!

bIQ'a' QIj — jIbey DaH!
etlh Dun qempu'bogh qama' tIQ vISampu'!
bIQ'a' QIj — ghaH pumtaH!
etlh tIQ qaw — ta'meH qen Dun — Sov'egh!

nachDaj vIpeSpu'.
'Iw — etlh lampu' — 'echlet neH ratlh —
rur'egh etlh — ngoQvam wa' neH yInpu'
'ej Hegh — QuchDI' — Qav.
bIQ wovmoH. Ha'DIbaH Haw'.
'ej chal yoS vIjaH — ta'pu'wIj tobbogh vIqeng,
chalDaq — jIbIQnISpu' rur Qub chaH.

bIH mev. bIQ 'Iw Doq tuj — rep law'.
'ach bIQ'a'vo' jInarghpu' — loD rur
qo' bIngDaq — jatlhtaHghach vanpu'bogh —
'ej Qappu' jatlhtaHghach'e'.`,
      },
      {
        title: "ta' qan (The Aged King)",
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/ta-qan-the-aged-king-5?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=5073bb9ad1f64deeaabc2c54aad17856&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `Fifty winters sit behind me like a mountain range of days,
Each one heavy with the memory of something I defended.
I was young once — if you'd believe it — fast and foolish,
Full of certainty that I could hold the darkness back with grip alone.
Now the grip is slower, and the mornings take their time,
And the mirror shows a man who's running out of wall to lean against.
But I built something. Gods, I built something real.
A kingdom where the children don't grow up afraid to sleep.

Then a thief — a nothing man, a shadow barely breathing —
Crept into the barrow where the dragon kept its gold.
One cup. One small and stupid cup, and fifty years of silence
Cracked like ice across a lake that everybody thought was solid.
The dragon woke with fire in its throat and fury in its wings,
And it burned the farmsteads first, because it didn't care
About the difference between a king's hall and a shepherd's home —
Fire is a democrat. Fire takes everything.

My advisors say I'm too old.
My body agrees with them, most mornings.
But there's a thing inside me that has never learned to stop,
And it's putting on its armor one more time.

I am the aged king, but I am not yet done.
There is one more fight inside this chest before the sunset.
I am the aged king — my sword arm knows the way
Even when the rest of me has half-forgotten.
If this is where the road ends,
Then I'll make the ending worth the road.

I've sent the messengers. I've sharpened what will sharpen.
I've said the things you say to people when you might not be coming back —
Not goodbyes, exactly. More like... finishing the sentences
I'd been leaving open all these years, just in case.
My shield is heavy and my breath comes harder than it used to,
But the dragon doesn't know what I've survived to get this far.
It knows fire. I know something older:
The stubborn, stupid, beautiful refusal to lie down.

I am the aged king, but I am not yet done.
There is one more fight inside this chest before the sunset.
I am the aged king — my sword arm knows the way
Even when the rest of me has half-forgotten.
If this is where the road ends,
Then I'll make the ending worth the road.

Every king must have a final walk —
Through the hall, past the faces, out the door.
The trick is not to look back.
The trick is to walk like you believe
That what you're walking toward
Is better than what you're leaving.

One more fight.
One more morning with a blade in my hand.
One more chance to prove
That the fire inside burns longer than the fire outside.`,
        lyricsOriginal: `vaghmaH DIS bIr — HuDmey rur — jaj tIq Hoch,
vay' vIQanpu'bogh tIq nIb Hoch qaw.
jIQuppu' — wej DaHar'a'? — nom, Dogh,
Hurgh vIbotlaH — ghopwIj HoS neH — Sov naQ.
DaH ghop QIt, 'ej po tIq tlhap,
'ej SIla' cha' — loD ratlhmeH tlhoy' Hutlhqu'bogh.
'ach vay' vIchenmoHpu'. Qun'e'! vay' teH!
wo' — puqpu' QongDI' Hotbe'bogh!

vaj nIHwI' — pagh'e' loD, QIb 'ach tlhuH —
nagh'e' qach'e' lung mIp polbogh 'elpu'.
wa' HIvje'. wa' HIvje' mach, Dogh, 'ej vaghmaH DIS jImev
yermey ru'Ha' rur — nagh HoS Hoch Harchugh.
lung vem — qulDaj monDaq, QeH telDajDaq —
'ej pa'mey SopwI' meQ, potlhbe' ghaHvaD —
ta' tach je be'nI' tach jIngDaq pIm pagh —
qul vot — qul tlhap Hoch — qul che'be'.

jIqanqu' — QojwI'pu' jatlh.
po law' — porghwIj chup je.
'ach vay' porghwIjDaq — mevmeH ghojbe'bogh —
'ej may'morgh lanqu'taH — wa'logh latlh.

ta' qan jIH — 'ach not jIvanpu'!
Heghpa' QoSwIj — may' wa' ratlhtaH tIqvamDaq!
ta' qan jIH — DeSwIj He Sov —
porghwIj Qav lIjDI' je!
He vanDI' —
He'e' 'oHmeH yap'e' — van vIchenmoH!

QumwI'pu' vIngeHpu'. jejqu'bogh vIjejpu'.
mu'mey jatlhlu' — loD cheghbe'law'bogh jatlhDI' —
"maj qa'" jatlhbe' — nIteb... mu'tlheghmey vanlu'
DIS law' poSqu'bogh — 'DaH SoQmoHmeH.'
yoDwIj tIq, tlhuHwIj Doy' law' qen puS,
'ach lung Sovbe' — chIlmeH jIyInpu'bogh vay'.
qul Sov ghaH. jIH — vay' qan law' Sov:
Dogh, 'IH, val, mevQo'taHghach!

ta' qan jIH — 'ach not jIvanpu'!
Heghpa' QoSwIj — may' wa' ratlhtaH tIqvamDaq!
ta' qan jIH — DeSwIj He Sov —
porghwIj Qav lIjDI' je!
He vanDI' —
He'e' 'oHmeH yap'e' — van vIchenmoH!

ta' Hoch — yIt Qav ghajnIS —
tach 'el, qab juS, lojmIt nargh.
He'Daq yInobQo'.
He'Daq yIt — bIHar'egh rur yIt —
DaqDaq bIjaHtaHbogh
lambogh'e' — law'qu' — ratlhbogh'e'.

may' wa' latlh.
po wa' latlh — taj ghopDaq.
qul porghDaq law' — qul DebDaq puS —
tobtaHmeH poH wa' latlh.`,
      },
      {
        title: 'Wiglaf',
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/wiglaf-6?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=041fc0bab8f54ea0bf83225e6e1acc47&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `I watched them run — every last one of them,
The ones who'd sworn their swords and sworn their blood
And sworn their children's names upon the oath of loyalty.
They ran like deer. They ran like water finding lower ground.
And I stood there with my father's shield and my unproven blade
And a choice so simple it was almost laughable:
Stay, and probably die beside a dying king.
Leave, and live forever with the knowledge that I left.

They'll call it courage, later, in the songs.
They'll say I was the brave one, the worthy one, the true.
But standing there, watching the others flee,
It didn't feel like bravery.
It felt like being the only one in the room
Who couldn't find the exit.

Wiglaf! Wiglaf! Stand beside your king!
The dragon's fire is a furnace and the world is turning black,
But you are here — you are HERE —
And that is all that honor ever asked!
Wiglaf! Wiglaf! Hold the line!
The old man's blood is on the ground, his sword is broken through —
But you are young, and your blade is whole,
And the belly of the beast is soft!

He struck the dragon's head — I saw the ancient iron
Shatter like a promise made by someone who meant well.
The beast came back with fire and its jaws found the king's throat,
And I thought: this is where the story ends, this is the final verse —
But something in me moved before the thought was finished,
Something older than my name, older than my fear.
I drove my blade beneath the scales where the fire can't reach,
And the dragon screamed a sound like continents divorcing.

Wiglaf! Wiglaf! The beast is falling!
Two swords — one broken, one still ringing true —
And together, TOGETHER, the impossible collapses!
Wiglaf! Wiglaf! The dragon dies!
The king is bleeding out against the barrow stone,
But his eyes are open, and he's smiling,
And he says my name like it's the last word he'll ever need.

He reached for me with hands that had held kingdoms,
That had torn the arm from Grendel in a hall that's now a legend,
That had carried fifty years of other people's safety —
And they were trembling now, and light as paper,
And I held them both in mine
And told him every lie a dying man deserves to hear.

You did enough. You did enough.
The dragon's dead. The kingdom stands.
You did enough.
Rest now, my king.
The fire's out.
Rest now.`,
        lyricsOriginal: `Haw' vIleghpu' — wa' Hoch Hoch,
'Ip'eghpu'bogh'e' — etlh 'Ip, 'Iw 'Ip,
puqloD pong 'Ip — quv'Ip naQ —
Sargh rur Haw'. bIQ rur — bIngDaq ghoS.
jIQamtaH — vavwI' yoD, etlh toblu'be',
wIv motlhqu' — rur'eghDI' bey mach:
yIratlh — chaq HeghDI' ta' HeghDaq —
yIjaH — 'ej yIn naQ, Sov'egh — jIjaHpu'.

bomDaq — toDuj lupongDI', ghIq.
"yoH'e'" lupong, "quv'e'", "teH'e'" —
'ach pa' QamtaHvIS, latlhpu' Haw'DI',
toDuj rur'eghbe'.
rur'egh — pa' wa' neH Daq naDev'e'
lojmIt Sambe'bogh.

Wiglaf! Wiglaf! ta'lIj retlhDaq yIQam!
lung qul — qach meQ, qo' Hurghqu'choHtaH —
'ach naDev SoH — naDev SOH —
'ej 'oH neH — batlh poQpu'bogh!
Wiglaf! Wiglaf! yIbot!
loD qan 'Iw yavDaq, etlhDaj ghorlu' —
'ach SoH Qup — etlhlIj naQ —
'ej lung burgh — tuj law'!

lung nach qIp — etlh tIQ vIlegh —
lay' rur ghor — loD QaQ 'e' Hech.
lung chegh — qul monDajvo' 'ej ta' Hugh Sam —
'ej jIQub: naDev lut van — naDev bom Qav —
'ach vay' vIH — Qub van'e' pa' —
vay' pongwIj qan law', Hotwij qan law'.
lung DeS bIng — qulDaj ghoSbe'bogh tajwIj lan —
'ej lung bey — bey qo'mey narghbogh rur.

Wiglaf! Wiglaf! lung pumtaH!
etlh cha' — wa' ghor, wa' beytaH —
'ej tay', TAY', laHbe'bogh'e' pummoH!
Wiglaf! Wiglaf! lung Hegh!
nagh'e' retlhDaq ta' 'Iw lam —
'ach mInDu'Daj poStaH, 'ej mon —
'ej pongwIj jatlh — mu' Qav ghaHbogh rur.

ghopDu' — wo' ghoppu'bogh — muSampu',
Grendel DeS peSpu'bogh tachDaq, DaH lut ghaH —
DIS vaghmaH latlh nuvpu' QanmeH qengpu'bogh —
'ej DaH Hay'taH, 'ej wovqu', 'ej nav rur —
'ej jIghoppu' — cha'logh —
'ej HeghmeH loD'e' Qoyla'bogh ngaS vInobpu'.

yap Data'pu'. yap Data'pu'.
lung Heghpu'. wo' QamtaH.
yap Data'pu'.
DaH yIleS, ta'wI'.
qul Heghpu'.
DaH yIleS.`,
      },
      {
        title: "qul Qav (The Last Fire)",
        soundcloudUrl: 'https://soundcloud.com/borrowed_tongues/qul-qav-the-last-fire-7?in=borrowed_tongues/sets/qul-batleth-the-beowulf-cycle&si=f68679899fc0437b8409dc9d1efa0aa8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        lyrics: `Build the pyre on the headland where the sailors first see shore,
Stack it high with shields and helms and every gift he gave.
Let the wood be oak — the kind that doesn't burn so much as
Turns itself to light, the way a life turns into story.
Lay him in the center with his armor and his blade —
The one that broke against the dragon's skull — lay that there too.
Even broken things deserve to go home with the man who swung them.
Even broken things remember what they were.

The women came with torches, and the men came with their silence,
And the children came because they didn't understand
That what they were about to watch was not just wood and fire
But the closing of a book that held the last page anyone would write
In the language of the kind of man who walks toward the dark
And doesn't stop to ask if it's a good idea.
They lit the pyre at dusk, when the sky was half-surrendered,
And the flames reached up like hands trying to give something back.

The smoke climbed past the tree line,
Past the cliffs, past the place where eagles turn around.
And every ship at sea that night
Could see the light, and knew what it meant,
And the sailors wept
For a man most of them had never met.

The last fire burns! The last fire burns!
Carry him home on the back of the smoke and the light!
The last fire burns! The last fire burns!
Let every star make room — a warrior is rising tonight!

They built the barrow after — ten days of hauling stone,
A tower on the headland like a fist raised at the sea.
They filled it with the dragon's gold because he'd earned it,
Though he never got to spend a single coin.
Twelve riders circled it on horseback, singing low —
Not war songs, not the boasting kind, but the other ones,
The ones you sing when someone was so good
That the only honest thing left is to say so, and to weep.

They said he was the kindest king who ever held a sword.
They said he was the gentlest man who ever broke a monster.
They said his name like it was something you could hold —
A stone worn smooth by every mouth that spoke it,
Warm to the touch, and heavy with the years.

The last fire burns! The last fire burns!
The barrow stands where every eye can find it!
The last fire burns! The last fire burns!
The story lives — the story lives — the story lives!
Beyond the pyre, beyond the stone, beyond the sea,
Beyond the memory of the ones who built the fire —
The story lives.

Beowulf.
That was his name.
And it still means something,
A thousand years from now,
In a language he would not have recognized,
Sung by voices he will never hear.
But the song knows him.
The song always knew.`,
        lyricsOriginal: `Dung HeHDaq — Dujpu' wa'DIch leghbogh Daq —
qul nagh yIchenmoH — 'IH law', Dun law'.
yoDmey, mIvmey, nobDaj Hoch — yIlanqu'.
Sor — ej'e' Sor — meQbe'bogh rur —
wovmoH'egh neH, yIn lutDaq choH rur.
qoD'e' yIlan — may'morgh, tajDaj je —
lung nachDaq ghorbogh'e' — 'oH je yIlan.
vay' ghorbogh'e' — juHDaq jaH — loD lo'pu'bogh tlhej.
vay' ghorbogh'e' — ghaHpu'bogh qaw.

be'pu' ghoS — Siqmey qeng, loDpu' ghoS — tamDaj qeng,
puqpu' ghoS — yajbe'mo' —
Sor neH 'ej qul neH tu'be' — leghbogh'e'
'ach paq Qav — SoQlu'taHbogh — mu'DajDaq Qav'e'
Hurgh ghoSbogh loDpu' He jatlhlaHbogh
'ej QaQlaw' 'e' ghel mevbogh.
choS qem chaH — chal bID jIvDI',
'ej qul ghop rur — vay' nobqa'nISbogh ghoS.

tlhIch jaH — Sor Dung juS,
nagh juS, toQDuj cheghbogh Daq juS.
'ej bIQ'a'Daq — ramvetlh — Duj Hoch
wov leghlaH, 'ej meq Sov,
'ej Dujpu'vo' SaQtaH
loD not ghompu'bogh law'qu'.

qul Qav meQ! qul Qav meQ!
tlhIch DungDaq, wov DungDaq — juHDaq yIqeng!
qul Qav meQ! qul Qav meQ!
Hov Hoch Daq chenmoH — SuvwI' juntaH DaHjaj ram!

nagh qach chenmoH — ghIq — wa'maH jaj nagh qeng,
HeHDaq — bIQ'a'Daq — ro' rur nItlh lanlu'bogh.
lung mIp tebmoH — chavDaj — 'ach not Huch
wa' neH lo'laHbe' ghaH.
wa'maH cha' loDpu' Sargh Dech, bom QIt —
may' bom ghobe', HemtaHghach bom ghobe' — 'ach latlh bom,
bom'e' — loD QaQqu'DI' —
val jatlhmeH ratlhbogh'e' wa' neH — jatlh, 'ej SaQ.

jatlh chaH — ta' tIq law' Hoch tIq puS — taj qengbogh.
jatlh chaH — loD jIl law' Hoch jIl puS — qa'Hom ghorbogh.
pongDaj jatlh chaH — ghopDaj ghajlaHbogh vay' rur —
nagh QIt, jat Hoch lampu'bogh,
tujqu' 'ej DIS tIq'e' law'.

qul Qav meQ! qul Qav meQ!
nagh qach QamtaH — mIn Hoch SamlaHbogh Daq!
qul Qav meQ! qul Qav meQ!
lut taH! lut taH! lut taH!
qul retlh, nagh retlh, bIQ'a' retlh,
qul chenpu'bogh qaw retlh —
lut taH!

Beowulf.
pongDaj 'oH.
'ej DIS SaD ghIq —
Hol'e' ghov ghaHbe'bogh —
ghogh not QoylaHbogh — bom ghaH.
'ach bom — ghaH Sov.
reH Sovpu' bom.`,
      },
    ],
  },
  {
    id: 'mirros-naejot-daoruni',
    title: 'Mirros Naejot Daoruni',
    subtitle: 'Nothing Stands Before Me',
    type: 'single',
    language: 'High Valyrian',
    languageSlug: 'high-valyrian',
    genre: 'Grunge',
    sourceText: 'Ozymandias — Percy Bysshe Shelley (1818, public domain)',
    year: 2026,
    coverArt: 'mirros-naejot-daoruni-cover.png',
    description:
      "A grunge adaptation of Shelley's Ozymandias through the lens of the fallen Valyrian Freehold. A wanderer crosses the cursed peninsula generations after the Doom, finds a shattered statue of a Dragonlord, and reads the king's inscription — not with awe, but refusal. Paired with Banchova Hatu: the same poem, an opposite register.",
    tracks: [
      {
        title: 'Mirros Naejot Daoruni (Nothing Stands Before Me)',
        soundcloudUrl: 'https://on.soundcloud.com/DPPOJw7y5RnxG5nBuI',
        lyrics: `I came across the burnt land.
Black stone-legs, before me, standing.
Half-buried by dust.
Eyes still cold; a broken mouth.
All of it kept by stone,
by the man's hand.

The maker's hand is dust.
The king's swollen heart is dust.
The eyes that see. The hand that broke the stone.
Both dust now,
beneath the same fire,
both kept only by stone.

On the broken stone,
the great old speech remains —
Valyria's tongue, the fire-bringer people:

"I am king. I am dragon-king.
Look upon my works, you latecomers —
and believe nothing."

Nothing else remains.
Within the great broken works,
nothing — level ground, level dust.
No name.
No god.
Nothing — nothing — nothing.

Valyria died by fire.
The Doom came.
And the dragonlords shouted in their tongue,
but no one heard them —
only the stone heard them,
and the stone sings of them still.

"Look upon my works —
look upon my works —
and believe nothing."

Mirros. Daoruni.`,
        lyricsOriginal: `Nyke perzys-tegot māzitan —
zōbrie dōron-krisi, naejot, iōragis,
prūbroso jesoso —
laesī iosre, relgos pryjata,
mērī dōronosa rāeltas,
valo ondoso.

Māzittio ondos jesor issa.
Dāryro hōzie prūmia jesor issa.
Laesī urnesi. Ondos dōron pryjattas.
Mērī jeson āejot,
hēnka perzro syt,
mērī henka dōronoso umbis.

Pryjata dōronon bē,
rōva eglie udir umbis —
Valyrīho udir, qogror perzys-māzitto:

"Nyke iksan dārys. Nyke iksan zaldrīz-dārys.
Ñuhī gaomoti obūlās, naejot māzittī —
se daor pāsās!"

Mirros āena umbis.
Rōvī pryjatī gaomotī iemnȳ,
mirros — gīda tegon, gīda jeson.
Brōzi daor.
Jaes daor.
Daoruni — daoruni — daoruni.

Valyria perzosa morghontas.
Vējes māzitos.
Se zaldrīz-dārī udiroso arghugar,
yn skoros ziry rȳbatas daor —
dōron henka ziry rȳbatas,
yn dōron vēdes syt ziry āejot.

"Ñuhī gaomoti obūlās —
ñuhī gaomoti obūlās —
se daor pāsās."

Mirros. Daoruni.`,
        lyricsAnnotated: `[[Nyke]] [[perzys-tegot]] [[māzitan|māzigon]] —
[[zōbrie]] [[dōron-krisi]], [[naejot]], [[iōragis|iōragon]],
[[prūbroso]] [[jesoso|jesor]] —
[[laesī|laes]] [[iosre]], [[relgos]] [[pryjata|pryjagon]],
[[mērī]] [[dōronosa|dōron]] [[rāeltas|rāelagon]],
[[valo|vala]] [[ondoso|ondos]].

[[Māzittio|māzitto]] [[ondos]] [[jesor]] [[issa|sagon]].
[[Dāryro|dārys]] [[hōzie]] [[prūmia]] [[jesor]] [[issa|sagon]].
[[Laesī|laes]] [[urnesi|urnegon]]. [[Ondos]] [[dōron]] [[pryjattas|pryjagon]].
[[Mērī]] [[jeson|jesor]] [[āejot]],
[[hēnka]] [[perzro|perzo]] [[syt]],
[[mērī]] [[hēnka]] [[dōronosa|dōron]] [[umbis|umbagon]].

[[Pryjata|pryjagon]] [[dōronon|dōron]] [[bē]],
[[rōva]] [[eglie]] [[udir]] [[umbis|umbagon]] —
Valyrīho [[udir]], [[qogror]] [[perzys-māzitto]]:

"[[Nyke]] [[iksan|sagon]] [[dārys]]. [[Nyke]] [[iksan|sagon]] [[zaldrīz-dārys]].
[[Ñuhī|ñuha]] [[gaomoti|gaomagon]] [[obūlās|obūlagon]], [[naejot]] [[māzittī|māzitto]] —
[[se]] [[daor]] [[pāsās|pāsagon]]!"

[[Mirros]] [[āena]] [[umbis|umbagon]].
[[Rōvī|rōva]] [[pryjatī|pryjagon]] [[gaomotī|gaomagon]] [[iemnȳ]],
[[mirros]] — [[gīda]] [[tegon]], [[gīda]] [[jeson|jesor]].
[[Brōzi]] [[daor]].
[[Jaes]] [[daor]].
[[Daoruni]] — [[daoruni]] — [[daoruni]].

Valyria [[perzosa|perzo]] [[morghontas|morghūljagon]].
[[Vējes]] [[māzitos|māzigon]].
[[Se]] [[zaldrīz-dārī|zaldrīz-dārys]] [[udiroso|udir]] [[arghugar|arghugon]],
[[yn]] [[skoros]] [[ziry]] [[rȳbatas|rȳbagon]] [[daor]] —
[[dōron]] [[hēnka]] [[ziry]] [[rȳbatas|rȳbagon]],
[[yn]] [[dōron]] [[vēdes|vēdegon]] [[syt]] [[ziry]] [[āejot]].

"[[Ñuhī|ñuha]] [[gaomoti|gaomagon]] [[obūlās|obūlagon]] —
[[ñuhī|ñuha]] [[gaomoti|gaomagon]] [[obūlās|obūlagon]] —
[[se]] [[daor]] [[pāsās|pāsagon]]."

[[Mirros]]. [[Daoruni]].`,
      },
    ],
  },
  {
    id: 'banchova-hatu',
    title: 'Banchova Hatu',
    subtitle: 'Hope Will Be Gone',
    type: 'single',
    language: 'Suh Ankripton (Kryptonian)',
    languageSlug: 'suh-ankripton',
    genre: 'Post-Rock / Appalachian Folk',
    sourceText: 'Ozymandias — Percy Bysshe Shelley (1818, public domain)',
    year: 2026,
    coverArt: 'banchova-hatu-cover.png',
    description:
      "A post-rock and Appalachian folk adaptation of Shelley's Ozymandias, sung in Suh Ankripton (Peterson's 2025 Superman-film Kryptonian). A Kryptonian narrator stands in the failing soil generations before the planet's destruction, finds a fallen statue of an ancient ruler, and re-reads its inscription as confession rather than command. Paired with Mirros Naejot Daoruni: the same poem, an opposite register.",
    tracks: [
      {
        title: 'Banchova Hatu (Hope Will Be Gone)',
        soundcloudUrl: 'https://on.soundcloud.com/3z5dTEBvvRcybylENt',
        lyrics: `A walker told us of the wide land:
two stone legs stand in the dust.
The body — without. Near, a face —
half-buried, broken mouth, cold eyes,
the proud gaze of one before whom we knelt.

The maker truly saw him.
The carving hand did not soften.
Pride outlasted the stone.
The maker's hand is gone.
The proud heart is gone.

And on the broken pedestal —
in the old script, in my mother-tongue —
these words remain:

"I am the great one. I am the king of Krypton.
Look upon my works, you who come after —
and despair."

What remains — without.
Around the broken great-work,
nameless wasteland.
Lone dust, level dust,
under Rao,
through the great hours.

Our houses are falling.
The land does not hold the seed.
The wise ones whisper:
Krypton is gone.
And I stand in the great dust,
and I see again the old words,
and I hear them differently —
my meaning; the king's meaning, none.

"Look upon my works —
look upon my works —
and despair."

Hatu... banchova.`,
        lyricsOriginal: `Maryach yovrhaz ye yu ichoth-naks:
duwa drom-kriso yostan yu kelor.
Kilaz vath. Bara, pravor —
gwabros, kosh reg, zhi laso,
zoworel zoh ankal yovbahnek-el.

Jever yovworel pravor sath.
Iondaz pryjat yov-nil.
Zoh-feken yokuolm idromaz.
Iondaz jever banchova.
Zoh-feken banchova.

Yok yu kosh-iduronaz —
yu valsuh, yu ne-muna-suh —
ke-rado yorel:

"Il yorelos naks. Il yorelos Dar an-Kripton.
Inejavaz yowor ya, kelo-yamaz —
yok yochuv hatu-vath!"

Yorel vath.
Bara kosh idaron-jevaz,
sad rad-vath.
Solo kelor, pim kelor,
yu Rao,
yu woluo-naks.

Feroso yopum-tah.
Ichothaz yo-no-kuolm isumaz.
Anhah-yachat ka-yorel:
Kripton banchova.
Yok il yostan yu daron-kelor,
yok il yowor ka val-rado,
yok il yobahum re-meq —
ne-meq, yu-meq dar vath.

"Inejavaz yowor ya —
inejavaz yowor ya —
yok yochuv hatu-vath."

Hatu... banchova.`,
        lyricsAnnotated: `[[Maryach|maryach]] [[yovrhaz|rhaz]] [[ye]] [[yu]] [[ichoth-naks]]:
[[duwa]] [[drom-kriso]] [[yostan|stan]] [[yu]] [[kelor]].
[[Kilaz|kil]] [[vath]]. [[Bara|bara]], [[pravor]] —
[[gwabros]], [[kosh]] [[reg]], [[zhi]] [[laso]],
[[zoworel]] [[zoh]] [[ankal]] [[yovbahnek-el|bahnek]].

[[Jever|jever]] [[yovworel|wor]] [[pravor]] [[sath]].
[[Iondaz|ond]] [[pryjat]] [[yov-nil|nil]].
[[Zoh-feken|zoh-feken]] [[yokuolm|kuolm]] [[idromaz|drom]].
[[Iondaz|ond]] [[jever|jever]] [[banchova]].
[[Zoh-feken|zoh-feken]] [[banchova]].

[[Yok|yok]] [[yu]] [[kosh-iduronaz|kosh-duron]] —
[[yu]] [[valsuh]], [[yu]] [[ne-muna-suh|muna-suh]] —
[[ke-rado|rado]] [[yorel|rel]]:

"[[Il|il]] [[yorelos|rel]] [[naks]]. [[Il|il]] [[yorelos|rel]] [[Dar|dar]] [[an-Kripton|Kripton]].
[[Inejavaz|java]] [[yowor|wor]] [[ya]], [[kelo-yamaz|kelo-yama]] —
[[yok]] [[yochuv|chuv]] [[hatu-vath]]!"

[[Yorel|rel]] [[vath]].
[[Bara|bara]] [[kosh]] [[idaron-jevaz|daron-java]],
[[sad]] [[rad-vath]].
[[Solo|solo]] [[kelor]], [[pim]] [[kelor]],
[[yu]] [[Rao|rao]],
[[yu]] [[woluo-naks]].

[[Feroso|rosh]] [[yopum-tah|pum]].
[[Ichothaz|ichoth]] [[yo-no-kuolm|kuolm]] [[isumaz|sum]].
[[Anhah-yachat|anhah-yachat]] [[ka-yorel|rel]]:
[[Kripton]] [[banchova]].
[[Yok|yok]] [[il]] [[yostan|stan]] [[yu]] [[daron-kelor]],
[[yok]] [[il]] [[yowor|wor]] [[ka]] [[val-rado|rado]],
[[yok]] [[il]] [[yobahum|bah]] [[re-meq|meq]] —
[[ne-meq|meq]], [[yu-meq|meq]] [[dar]] [[vath]].

"[[Inejavaz|java]] [[yowor|wor]] [[ya]] —
[[inejavaz|java]] [[yowor|wor]] [[ya]] —
[[yok]] [[yochuv|chuv]] [[hatu-vath]]."

[[Hatu|hatu]]... [[banchova]].`,
      },
    ],
  },
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
