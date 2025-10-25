import { type KeyboardLayout, type LetterInfo, type KeyInfo, type Lesson, type Finger } from './types';

export const ARMENIAN_ALPHABET: Record<string, LetterInfo> = {
  'ա': { armenian: 'ա', transliteration: 'a' },
  'բ': { armenian: 'բ', transliteration: 'b' },
  'գ': { armenian: 'գ', transliteration: 'g' },
  'դ': { armenian: 'դ', transliteration: 'd' },
  'ե': { armenian: 'ե', transliteration: 'e' },
  'զ': { armenian: 'զ', transliteration: 'z' },
  'է': { armenian: 'է', transliteration: 'ē' },
  'ը': { armenian: 'ը', transliteration: 'ə' },
  'թ': { armenian: 'թ', transliteration: 't’' },
  'ժ': { armenian: 'ժ', transliteration: 'ž' },
  'ի': { armenian: 'ի', transliteration: 'i' },
  'լ': { armenian: 'լ', transliteration: 'l' },
  'խ': { armenian: 'խ', transliteration: 'x' },
  'ծ': { armenian: 'ծ', transliteration: 'ts' },
  'կ': { armenian: 'կ', transliteration: 'k' },
  'հ': { armenian: 'հ', transliteration: 'h' },
  'ձ': { armenian: 'ձ', transliteration: 'dz' },
  'ղ': { armenian: 'ղ', transliteration: 'ł' },
  'ճ': { armenian: 'ճ', transliteration: 'č' },
  'մ': { armenian: 'մ', transliteration: 'm' },
  'յ': { armenian: 'յ', transliteration: 'y' },
  'ն': { armenian: 'ն', transliteration: 'n' },
  'շ': { armenian: 'շ', transliteration: 'š' },
  'ո': { armenian: 'ո', transliteration: 'o' },
  'չ': { armenian: 'չ', transliteration: 'č’' },
  'պ': { armenian: 'պ', transliteration: 'p' },
  'ջ': { armenian: 'ջ', transliteration: 'j' },
  'ռ': { armenian: 'ռ', transliteration: 'ṙ' },
  'ս': { armenian: 'ս', transliteration: 's' },
  'վ': { armenian: 'վ', transliteration: 'v' },
  'տ': { armenian: 'տ', transliteration: 't' },
  'ր': { armenian: 'ր', transliteration: 'r' },
  'ց': { armenian: 'ց', transliteration: 'c’' },
  'ւ': { armenian: 'ւ', transliteration: 'w' },
  'փ': { armenian: 'փ', transliteration: 'p’' },
  'ք': { armenian: 'ք', transliteration: 'k’' },
  'օ': { armenian: 'օ', transliteration: 'ō' },
  'ֆ': { armenian: 'ֆ', transliteration: 'f' },
  'և': { armenian: 'և', transliteration: 'ev' },
  '.': { armenian: '.', transliteration: '.' },
  ',': { armenian: ',', transliteration: ',' },
  ':': { armenian: ':', transliteration: ':' },
  ';': { armenian: ';', transliteration: ';' },
  '?': { armenian: '՞', transliteration: '?' },
  '!': { armenian: '!', transliteration: '!' },
  ' ': { armenian: ' ', transliteration: ' ' },
};

export const SOUND_MAP: Record<string, string> = {
  'ա': 'a',
  'բ': 'b',
  'գ': 'g',
  'դ': 'd',
  'ե': 'y',
  'զ': 'z',
  'է': 'e',
  'ը': 'ee',
  'թ': 'th',
  'ժ': 'j',
  'ի': 'i',
  'լ': 'l',
  'խ': 'kh',
  'ծ': 'ts',
  'կ': 'k',
  'հ': 'h',
  'ձ': 'dz',
  'ղ': 'gh',
  'ճ': 'tsh',
  'մ': 'm',
  'յ': 'ye',
  'ն': 'n',
  'շ': 'sh',
  'ո': 'v',
  'չ': 'tch',
  'պ': 'p',
  'ջ': 'dj',
  'ռ': 'r',
  'ս': 's',
  'վ': 've',
  'տ': 't',
  'ր': 'ze',
  'ց': 'tse',
  'ւ': 'u',
  'փ': 'ph',
  'ք': 'khe',
  'օ': 'o',
  'ֆ': 'vee',
  'և': 'yev',
};

// This map provides English-readable phonetic strings for the computer voice (TTS)
// to use. This avoids issues where a user might not have an Armenian ('hy-AM')
// voice pack installed, which would cause the TTS to be silent. This is a robust fallback.
export const COMPUTER_VOICE_PHONETIC_MAP: Record<string, string> = {
  'ա': 'ah',
  'բ': 'buh',
  'գ': 'guh',
  'դ': 'duh',
  'ե': 'yeh',
  'զ': 'zeh',
  'է': 'eh',
  'ը': 'uh',
  'թ': 'tuh',
  'ժ': 'zh',
  'ի': 'ee',
  'լ': 'leh',
  'խ': 'kh',
  'ծ': 'ts',
  'կ': 'keh',
  'հ': 'huh',
  'ձ': 'dz',
  'ղ': 'gh',
  'ճ': 'ch',
  'մ': 'meh',
  'յ': 'yuh',
  'ն': 'neh',
  'շ': 'sh',
  'ո': 'o',
  'չ': 'ch',
  'պ': 'peh',
  'ջ': 'j',
  'ռ': 'rrr',
  'ս': 'seh',
  'վ': 'veh',
  'տ': 'teh',
  'ր': 'ruh',
  'ց': 'ts',
  'ւ': 'v',
  'փ': 'puh',
  'ք': 'kuh',
  'օ': 'oh',
  'ֆ': 'feh',
  'և': 'yev',
};

const createKey = (code: string, armenian: string, shiftArmenian?: string): KeyInfo => {
    const keyInfo: KeyInfo = {
        code,
        ...ARMENIAN_ALPHABET[armenian]
    };
    if (shiftArmenian && ARMENIAN_ALPHABET[shiftArmenian]) {
        keyInfo.shift = ARMENIAN_ALPHABET[shiftArmenian];
    }
    return keyInfo;
};

export const KEYBOARD_LAYOUT: KeyboardLayout = [
    [
        createKey('Backquote', 'է'),
        createKey('Digit1', 'ձ'),
        null, // Was 'յ', duplicate of KeyJ
        createKey('Digit3', 'և'),
        createKey('Digit4', 'ր'),
        createKey('Digit5', 'չ'),
        createKey('Digit6', 'ճ'),
        createKey('Digit7', 'ժ'),
        createKey('Digit8', 'ծ'),
        null, // Was 'ց', duplicate of KeyC
        createKey('Digit0', 'ძ'),
        null, // Was 'ռ', duplicate of KeyR
        createKey('Equal', 'ջ'),
        null,
    ],
    [
        null,
        createKey('KeyQ', 'ք'),
        createKey('KeyW', 'ո'),
        createKey('KeyE', 'ե'),
        createKey('KeyR', 'ռ'),
        createKey('KeyT', 'տ'),
        createKey('KeyY', 'ը'),
        createKey('KeyU', 'ւ'),
        createKey('KeyI', 'ի'),
        createKey('KeyO', 'օ'),
        createKey('KeyP', 'պ'),
        null, // Was 'խ', duplicate of KeyX
        createKey('BracketRight', 'շ'),
    ],
    [
        null,
        createKey('KeyA', 'ա'),
        createKey('KeyS', 'ս'),
        createKey('KeyD', 'դ'),
        createKey('KeyF', 'ֆ'),
        createKey('KeyG', 'գ'),
        createKey('KeyH', 'հ'),
        createKey('KeyJ', 'յ'),
        createKey('KeyK', 'կ'),
        createKey('KeyL', 'լ'),
        createKey('Semicolon', 'թ'),
        createKey('Quote', 'փ'),
        null
    ],
    [
        null,
        createKey('KeyZ', 'զ'),
        createKey('KeyX', 'խ'),
        createKey('KeyC', 'ց'),
        createKey('KeyV', 'վ'),
        createKey('KeyB', 'բ'),
        createKey('KeyN', 'ն'),
        createKey('KeyM', 'մ'),
        createKey('Comma', ','),
        createKey('Period', '.'),
        createKey('Slash', 'ղ'),
        null
    ],
    [null]
];

export const FINGER_MAP: Record<string, Finger> = {
  // Left Hand
  Backquote: 'LeftPinky',
  Digit1: 'LeftPinky',
  Digit2: 'LeftRing',
  Digit3: 'LeftMiddle',
  Digit4: 'LeftIndex',
  Digit5: 'LeftIndex',
  KeyQ: 'LeftPinky',
  KeyW: 'LeftRing',
  KeyE: 'LeftMiddle',
  KeyR: 'LeftIndex',
  KeyT: 'LeftIndex',
  KeyA: 'LeftPinky',
  KeyS: 'LeftRing',
  KeyD: 'LeftMiddle',
  KeyF: 'LeftIndex',
  KeyG: 'LeftIndex',
  KeyZ: 'LeftPinky',
  KeyX: 'LeftRing',
  KeyC: 'LeftMiddle',
  KeyV: 'LeftIndex',
  KeyB: 'LeftIndex',

  // Right Hand
  Digit6: 'RightIndex',
  Digit7: 'RightIndex',
  Digit8: 'RightMiddle',
  Digit9: 'RightRing',
  Digit0: 'RightPinky',
  Minus: 'RightPinky',
  Equal: 'RightPinky',
  KeyY: 'RightIndex',
  KeyU: 'RightIndex',
  KeyI: 'RightMiddle',
  KeyO: 'RightRing',
  KeyP: 'RightPinky',
  BracketLeft: 'RightPinky',
  BracketRight: 'RightPinky',
  KeyH: 'RightIndex',
  KeyJ: 'RightIndex',
  KeyK: 'RightMiddle',
  KeyL: 'RightRing',
  Semicolon: 'RightPinky',
  Quote: 'RightPinky',
  KeyN: 'RightIndex',
  KeyM: 'RightIndex',
  Comma: 'RightMiddle',
  Period: 'RightRing',
  Slash: 'RightPinky',

  // Thumbs
  Space: 'BothThumbs',
};

export const LESSONS: Lesson[] = [
    {
        title: 'Lesson 1',
        description: 'New keys: Home row',
        exercises: [
            { name: 'New key exercise 1', text: 'ֆյ ֆյ ֆյֆյ յֆյֆ ֆ յ ֆ յ ֆֆ յյ' },
            { name: 'New key exercise 2', text: 'դկ դկ ֆյդկ ֆյդկ դդ կկ ֆֆ յյ դֆյկ' },
            { name: 'New key exercise 3', text: 'սլ սլ սլսլ դկֆյ սլ դկ ֆյ սս լլ սլդկֆյ' },
            { name: 'Key exercise 1', text: 'աթ աթ աթաթ սլդկֆյ աթ սլ դկ ֆյ աա թթ' },
            { name: 'Key exercise 2', text: 'գհ գհ գհգհ աթսլդկֆյ գհ աթ սլ դկ ֆյ գգ հհ' },
            { name: 'Key exercise 3', text: 'ֆյդկսլաթգհ ֆյդկ սլաթ գհ յֆ կդ լս թա հգ' },
            { name: 'Word exercise', text: 'գյադ լաթս ֆհկդ յսլա գդկֆ հթյս' },
        ]
    },
    {
        title: 'Lesson 2',
        description: 'New keys: ե, ի',
        exercises: [
            { name: 'New key exercise', text: 'եի եի եիեի դե դե կի կի դե կի դեի կիե' },
        ]
    },
    {
        title: 'Lesson 3',
        description: 'New keys: ռ, ւ',
        exercises: [
            { name: 'New key exercise', text: 'ռւ ռւ ռւռւ ֆռ ֆռ յւ յւ ֆռ յւ ֆռւ յւռ' },
        ]
    },
    {
        title: 'Lesson 4',
        description: 'New keys: ո, օ',
        exercises: [
            { name: 'New key exercise', text: 'ոօ ոօ ոօոօ սո սո լօ լօ սո լօ սոօ լօո' },
        ]
    },
    {
        title: 'Lesson 5',
        description: 'New keys: ք, պ',
        exercises: [
            { name: 'New key exercise', text: 'քպ քպ քպքպ աք աք թպ թպ աք թպ աքպ թպք' },
        ]
    },
    {
        title: 'Lesson 6',
        description: 'New keys: տ, ը',
        exercises: [
            { name: 'New key exercise', text: 'տը տը տըտը ֆտ ֆտ յը յը ֆտ յը ֆտը յըտ' },
        ]
    },
    {
        title: 'Lesson 7',
        description: 'Review Home and Top Rows',
        exercises: [
            { name: 'Key exercise', text: 'քոերտ իւպ աթսլդկֆյ գհ' },
            { name: 'Word exercise', text: 'մարդ արև սեր տուն' },
        ]
    },
    {
        title: 'Lesson 8',
        description: 'New keys: վ, ն',
        exercises: [
            { name: 'New key exercise', text: 'վն վն վնվն ֆվ ֆվ յն յն ֆվ յն ֆվն յնվ' },
        ]
    },
    {
        title: 'Lesson 9',
        description: 'New keys: ց, մ',
        exercises: [
            { name: 'New key exercise', text: 'ցմ ցմ ցմցմ դց դց կմ կմ դց կմ դցմ կմց' },
        ]
    },
    {
        title: 'Lesson 10',
        description: 'First words',
        exercises: [
            { name: 'Word exercise 1', text: 'սա դու նա սա դու նա' },
            { name: 'Word exercise 2', text: 'այո նաև թե ինչ' },
        ]
    },
     {
        title: 'Lesson 11',
        description: 'More words',
        exercises: [
            { name: 'Word exercise', text: 'բարև աշխարհ' },
            { name: 'Phrase exercise', text: 'ինչպես ես' },
        ]
    },
    {
        title: 'Lesson 12',
        description: 'Full sentences',
        exercises: [
            { name: 'Sentence 1', text: 'սա հայերենի այբուբենն է' },
            { name: 'Sentence 2', text: 'ես սիրում եմ սովորել' },
        ]
    },
    {
        title: 'Lesson 13',
        description: 'Punctuation',
        exercises: [
             { name: 'Punctuation practice', text: 'բարև, աշխարհ. ինչպես ես:' },
        ]
    },
    {
        title: 'Lesson 14',
        description: 'Numbers Row',
        exercises: [
             { name: 'Numbers practice', text: 'ձևրչճժծ' },
        ]
    },
    {
        title: 'Lesson 15',
        description: 'Final Test',
        exercises: [
            { name: 'Final text', text: 'բոլոր մարդիկ ծնվում են ազատ ու հավասար' },
        ]
    }
];