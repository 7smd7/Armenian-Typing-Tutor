import {
    type KeyboardLayout,
    type LetterInfo,
    type KeyInfo,
    type Lesson,
    type Finger,
} from "./types";

export const ARMENIAN_ALPHABET: Record<string, LetterInfo> = {
    ա: { armenian: "ա", transliteration: "a" },
    բ: { armenian: "բ", transliteration: "b" },
    գ: { armenian: "գ", transliteration: "g" },
    դ: { armenian: "դ", transliteration: "d" },
    ե: { armenian: "ե", transliteration: "e" },
    զ: { armenian: "զ", transliteration: "z" },
    է: { armenian: "է", transliteration: "ē" },
    ը: { armenian: "ը", transliteration: "ə" },
    թ: { armenian: "թ", transliteration: "t’" },
    ժ: { armenian: "ժ", transliteration: "ž" },
    ի: { armenian: "ի", transliteration: "i" },
    լ: { armenian: "լ", transliteration: "l" },
    խ: { armenian: "խ", transliteration: "x" },
    ծ: { armenian: "ծ", transliteration: "ts" },
    կ: { armenian: "կ", transliteration: "k" },
    հ: { armenian: "հ", transliteration: "h" },
    ձ: { armenian: "ձ", transliteration: "dz" },
    ղ: { armenian: "ղ", transliteration: "ł" },
    ճ: { armenian: "ճ", transliteration: "č" },
    մ: { armenian: "մ", transliteration: "m" },
    յ: { armenian: "յ", transliteration: "y" },
    ն: { armenian: "ն", transliteration: "n" },
    շ: { armenian: "շ", transliteration: "š" },
    ո: { armenian: "ո", transliteration: "o" },
    չ: { armenian: "չ", transliteration: "č’" },
    պ: { armenian: "պ", transliteration: "p" },
    ջ: { armenian: "ջ", transliteration: "j" },
    ռ: { armenian: "ռ", transliteration: "ṙ" },
    ս: { armenian: "ս", transliteration: "s" },
    վ: { armenian: "վ", transliteration: "v" },
    տ: { armenian: "տ", transliteration: "t" },
    ր: { armenian: "ր", transliteration: "r" },
    ց: { armenian: "ց", transliteration: "c’" },
    ւ: { armenian: "ւ", transliteration: "w" },
    փ: { armenian: "փ", transliteration: "p’" },
    ք: { armenian: "ք", transliteration: "k’" },
    օ: { armenian: "օ", transliteration: "ō" },
    ֆ: { armenian: "ֆ", transliteration: "f" },
    և: { armenian: "և", transliteration: "ev" },
    ".": { armenian: ".", transliteration: "." },
    ",": { armenian: ",", transliteration: "," },
    ":": { armenian: ":", transliteration: ":" },
    ";": { armenian: ";", transliteration: ";" },
    "?": { armenian: "՞", transliteration: "?" },
    "!": { armenian: "!", transliteration: "!" },
    " ": { armenian: " ", transliteration: " " },
};

export const SOUND_MAP: Record<string, string> = {
    ա: "a",
    բ: "b",
    գ: "g",
    դ: "d",
    ե: "y",
    զ: "z",
    է: "e",
    ը: "ee",
    թ: "th",
    ժ: "j",
    ի: "i",
    լ: "l",
    խ: "kh",
    ծ: "ts",
    կ: "k",
    հ: "h",
    ձ: "dz",
    ղ: "gh",
    ճ: "tsh",
    մ: "m",
    յ: "ye",
    ն: "n",
    շ: "sh",
    ո: "v",
    չ: "tch",
    պ: "p",
    ջ: "dj",
    ռ: "r",
    ս: "s",
    վ: "ve",
    տ: "t",
    ր: "ze",
    ց: "tse",
    ւ: "u",
    փ: "ph",
    ք: "khe",
    օ: "o",
    ֆ: "vee",
    և: "yev",
};

// This map provides English-readable phonetic strings for the computer voice (TTS)
// to use. This avoids issues where a user might not have an Armenian ('hy-AM')
// voice pack installed, which would cause the TTS to be silent. This is a robust fallback.
export const COMPUTER_VOICE_PHONETIC_MAP: Record<string, string> = {
    ա: "ah",
    բ: "buh",
    գ: "guh",
    դ: "duh",
    ե: "yeh",
    զ: "zeh",
    է: "eh",
    ը: "uh",
    թ: "tuh",
    ժ: "zh",
    ի: "ee",
    լ: "leh",
    խ: "kh",
    ծ: "ts",
    կ: "keh",
    հ: "huh",
    ձ: "dz",
    ղ: "gh",
    ճ: "ch",
    մ: "meh",
    յ: "yuh",
    ն: "neh",
    շ: "sh",
    ո: "o",
    չ: "ch",
    պ: "peh",
    ջ: "j",
    ռ: "rrr",
    ս: "seh",
    վ: "veh",
    տ: "teh",
    ր: "ruh",
    ց: "ts",
    ւ: "v",
    փ: "puh",
    ք: "kuh",
    օ: "oh",
    ֆ: "feh",
    և: "yev",
};

const createKey = (
    code: string,
    armenian: string,
    shiftArmenian?: string
): KeyInfo => {
    const keyInfo: KeyInfo = {
        code,
        ...ARMENIAN_ALPHABET[armenian],
    };
    if (shiftArmenian && ARMENIAN_ALPHABET[shiftArmenian]) {
        keyInfo.shift = ARMENIAN_ALPHABET[shiftArmenian];
    }
    return keyInfo;
};

export const KEYBOARD_LAYOUT: KeyboardLayout = [
    [
        createKey("Backquote", "է"),
        createKey("Digit1", "ձ"),
        null, // Was 'յ', duplicate of KeyJ
        createKey("Digit3", "և"),
        createKey("Digit4", "ր"),
        createKey("Digit5", "չ"),
        createKey("Digit6", "ճ"),
        createKey("Digit7", "ժ"),
        createKey("Digit8", "ծ"),
        null, // Was 'ց', duplicate of KeyC
        createKey("Digit0", "ძ"),
        null, // Was 'ռ', duplicate of KeyR
        createKey("Equal", "ջ"),
        null,
    ],
    [
        null,
        createKey("KeyQ", "ք"),
        createKey("KeyW", "ո"),
        createKey("KeyE", "ե"),
        createKey("KeyR", "ռ"),
        createKey("KeyT", "տ"),
        createKey("KeyY", "ը"),
        createKey("KeyU", "ւ"),
        createKey("KeyI", "ի"),
        createKey("KeyO", "օ"),
        createKey("KeyP", "պ"),
        null, // Was 'խ', duplicate of KeyX
        createKey("BracketRight", "շ"),
    ],
    [
        null,
        createKey("KeyA", "ա"),
        createKey("KeyS", "ս"),
        createKey("KeyD", "դ"),
        createKey("KeyF", "ֆ"),
        createKey("KeyG", "գ"),
        createKey("KeyH", "հ"),
        createKey("KeyJ", "յ"),
        createKey("KeyK", "կ"),
        createKey("KeyL", "լ"),
        createKey("Semicolon", "թ"),
        createKey("Quote", "փ"),
        null,
    ],
    [
        null,
        createKey("KeyZ", "զ"),
        createKey("KeyX", "խ"),
        createKey("KeyC", "ց"),
        createKey("KeyV", "վ"),
        createKey("KeyB", "բ"),
        createKey("KeyN", "ն"),
        createKey("KeyM", "մ"),
        createKey("Comma", ","),
        createKey("Period", "."),
        createKey("Slash", "ղ"),
        null,
    ],
    [null],
];

export const FINGER_MAP: Record<string, Finger> = {
    // Left Hand
    Backquote: "LeftPinky",
    Digit1: "LeftPinky",
    Digit2: "LeftRing",
    Digit3: "LeftMiddle",
    Digit4: "LeftIndex",
    Digit5: "LeftIndex",
    KeyQ: "LeftPinky",
    KeyW: "LeftRing",
    KeyE: "LeftMiddle",
    KeyR: "LeftIndex",
    KeyT: "LeftIndex",
    KeyA: "LeftPinky",
    KeyS: "LeftRing",
    KeyD: "LeftMiddle",
    KeyF: "LeftIndex",
    KeyG: "LeftIndex",
    KeyZ: "LeftPinky",
    KeyX: "LeftRing",
    KeyC: "LeftMiddle",
    KeyV: "LeftIndex",
    KeyB: "LeftIndex",

    // Right Hand
    Digit6: "RightIndex",
    Digit7: "RightIndex",
    Digit8: "RightMiddle",
    Digit9: "RightRing",
    Digit0: "RightPinky",
    Minus: "RightPinky",
    Equal: "RightPinky",
    KeyY: "RightIndex",
    KeyU: "RightIndex",
    KeyI: "RightMiddle",
    KeyO: "RightRing",
    KeyP: "RightPinky",
    BracketLeft: "RightPinky",
    BracketRight: "RightPinky",
    KeyH: "RightIndex",
    KeyJ: "RightIndex",
    KeyK: "RightMiddle",
    KeyL: "RightRing",
    Semicolon: "RightPinky",
    Quote: "RightPinky",
    KeyN: "RightIndex",
    KeyM: "RightIndex",
    Comma: "RightMiddle",
    Period: "RightRing",
    Slash: "RightPinky",

    // Thumbs
    Space: "BothThumbs",
};

export const LESSONS: Lesson[] = [
    {
        title: "Lesson 1",
        description: "Home Row: Base Position (ֆ, յ)",
        exercises: [
            { name: "Left Index: ֆ", text: "ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ" },
            { name: "Right Index: յ", text: "յյյ յյյ յյյ յյյ յյյ յյյ յյյ յյյ" },
            { name: "Combined ֆ-յ", text: "ֆյ ֆյ ֆյ ֆյ յֆ յֆ յֆ յֆ ֆյֆյ յֆյֆ" },
        ],
    },
    {
        title: "Lesson 2",
        description: "Home Row: Left Hand (դ, ս)",
        exercises: [
            { name: "Left Middle: դ", text: "դդդ դդդ ֆդֆ դֆդ ֆդֆ դֆդ դդդ ֆֆֆ" },
            { name: "Left Ring: ս", text: "սսս սսս ֆսֆ սֆս ֆսֆ սֆս սսս ֆֆֆ" },
            { name: "Practice All", text: "դս սդ ֆդս սդֆ դսֆ ֆսդ դսդ սդս" },
        ],
    },
    {
        title: "Lesson 3",
        description: "Home Row: Right Hand (կ, լ)",
        exercises: [
            { name: "Right Middle: կ", text: "կկկկ յկյ կյկ յկյ կյկ կկկկ յյյ" },
            { name: "Right Ring: լ", text: "լլլլ յլյ լյլ յլյ լյլ լլլլ յյյ" },
            { name: "Practice All", text: "կլ լկ յկլ լկյ կլյ յլկ կլկ լկլ" },
            { name: "Combined Home", text: "ֆդսյկլ սդֆլկյ դֆյլկս կլյֆդս" },
        ],
    },
    {
        title: "Lesson 4",
        description: "Home Row: Additional Keys (ա, գ, հ, թ, փ)",
        exercises: [
            { name: "Left Pinky: ա", text: "աաա աաա ֆաֆ աֆա ֆաֆ աֆա աաա ֆֆֆ" },
            { name: "Left Index 2: գ", text: "գգգ ֆգֆ գֆգ դգդ գդգ սգս գսգ" },
            { name: "Right Index 2: հ", text: "հհհհ յհյ հյհ կհկ հկհ լհլ հլհ" },
            { name: "Right Pinky: թ", text: "թթթ յթյ թյթ կթկ թկթ լթլ թլթ" },
            { name: "Right Pinky 2: փ", text: "փփփ յփյ փյթ յթյ թյթ թթթ յյյ" },
            { name: "Practice All", text: "ագհթփ գհթփա հթփագ թթագհ թագհթ" },
            {
                name: "Full Home Row",
                text: "աֆդսգյկլհթթ սդֆլկյագհթթ դֆյլկսթթհգա",
            },
        ],
    },
    {
        title: "Lesson 5",
        description: "Top Row: Index Fingers (ե, ի)",
        exercises: [
            { name: "Left Index: ե", text: "եեե ֆեֆ եֆե ֆեֆ եֆե դեդ սես" },
            { name: "Right Index: ի", text: "իիի յիյ իյի յիյ իյի կիկ լիլ" },
            {
                name: "Combined Practice",
                text: "եի իե ֆեի իեֆ եիյ յիե եիե իեի",
            },
            { name: "With Home Row", text: "դեի կիե սեի լիե ֆեի յիե աեի փիե" },
        ],
    },
    {
        title: "Lesson 6",
        description: "Top Row: Middle Keys (ռ, տ, ը, ւ, օ)",
        exercises: [
            { name: "Left Middle: ռ", text: "ռռռ դռդ ռդռ եռե ռեռ ֆռֆ ռֆռ" },
            { name: "Left Index: տ", text: "տտտ ֆտֆ տֆտ դտդ տդտ ետե տետ" },
            { name: "Right Index: ը", text: "ըըը յըյ ըյը կըկ ըկը իըի ըին" },
            { name: "Right Index 2: ւ", text: "ւււ յւյ ւյւ կւկ ւկւ իւի ւիւ" },
            { name: "Right Middle: օ", text: "օօօ կօկ օկօ իօի օիօ յօյ օյօ" },
            { name: "Combined Practice", text: "տըւօ ըւօտ ւօտը օտըւ" },
            { name: "With Previous", text: "ռտըւօ տըւօռ ըւօռտ ւօռտը օռտըւ" },
        ],
    },
    {
        title: "Lesson 7",
        description: "Top Row: Ring Fingers (ո, պ)",
        exercises: [
            { name: "Left Ring: ո", text: "ոոո սոս ոսո ռոռ ոռո եոե ոեո" },
            { name: "Right Ring: պ", text: "պպպ լպլ պլպ օպօ պօպ իպի պիպ" },
            {
                name: "Combined Practice",
                text: "ոպ պո ռոպ պոռ ոպի իպո ոպո պոպ",
            },
        ],
    },
    {
        title: "Lesson 8",
        description: "Top Row: Pinky Fingers (ք, շ)",
        exercises: [
            { name: "Left Pinky: ք", text: "րրր աքա քաք ոքո քոք եքե քեք" },
            { name: "Right Pinky: շ", text: "շշշ փշփ շփշ պշպ շպշ իշի շիշ" },
            {
                name: "Combined Practice",
                text: "քշ շք ոքշ շքո քշի իշք քշք շքշ",
            },
            { name: "Full Top Row", text: "քոեռիօպշ ոեռիօպշք եռիօպշքո" },
        ],
    },
    {
        title: "Lesson 9",
        description: "Bottom Row: Index Fingers (վ, մ)",
        exercises: [
            { name: "Left Index: վ", text: "վվվ ֆվֆ վֆվ դվդ վդվ եվե վեվ" },
            { name: "Right Index: մ", text: "մմմ յմյ մյմ կմկ մկմ իմի միմ" },
            {
                name: "Combined Practice",
                text: "վմ մվ ֆվմ մվֆ վմյ յմվ վմվ մվմ",
            },
        ],
    },
    {
        title: "Lesson 10",
        description: "Bottom Row: Middle Fingers (ց, ն)",
        exercises: [
            { name: "Left Middle: ց", text: "ցցց դցդ ցդց վցվ ցվց ռցռ ցռց" },
            { name: "Right Middle: ն", text: "ննն կնկ նկն մնմ նմն օնօ նօն" },
            {
                name: "Combined Practice",
                text: "ցն նց վցն նցվ ցնմ մնց ցնց նցն",
            },
        ],
    },
    {
        title: "Lesson 11",
        description: "Bottom Row: Ring and Pinky (զ, խ, բ, ղ)",
        exercises: [
            { name: "Left Side: զ խ", text: "զզզ խխխ զխզ խզխ սզս խսխ" },
            { name: "Right Side: բ ղ", text: "բբբ ղղղ բղբ ղբղ լբլ ղլղ" },
            { name: "Combined Practice", text: "զխբղ ղբխզ զբխղ ղխբզ" },
            { name: "Full Bottom Row", text: "զխվցմնբղ խվցմնբղզ վցմնբղզխ" },
        ],
    },
    {
        title: "Lesson 12",
        description: "Capital Letters - Home Row",
        exercises: [
            {
                name: "Left Hand Capitals",
                text: "Աա Սս Դդ Ֆֆ Գգ աս սդ դֆ գա Աս Սդ Դֆ Գա",
            },
            {
                name: "Right Hand Capitals",
                text: "Յյ Կկ Լլ Փփ Հհ Թթ յկ կլ լհ թփ Յկ Կլ Հթ Փյ",
            },
            {
                name: "Mixed Practice",
                text: "Աֆ Սյ Դկ Ֆլ Գհ Յս Կդ Լֆ Թա Փգ Հյ",
            },
            { name: "Simple Words", text: "Աս Դու Սա Այս Հայ Գալ Դաս Լաց" },
        ],
    },
    {
        title: "Lesson 13",
        description: "Capital Letters - Top Row",
        exercises: [
            {
                name: "Left Hand Capitals",
                text: "Քք Ոո Եե Ռռ Տտ քո ոե եռ տք Քո Ոե Եռ Տք",
            },
            {
                name: "Right Hand Capitals",
                text: "Իի Օօ Պպ Շշ Ըը Ււ իօ օպ պշ ըւ Իօ Օպ Պշ Ըւ",
            },
            {
                name: "Mixed Practice",
                text: "Քի Ոօ Եպ Ռշ Տը Իո Օե Պռ Շք Թթ Ւի",
            },
            { name: "Simple Words", text: "Որ Երկ Տուն Իր Օր Պար Շատ Որպես" },
        ],
    },
    {
        title: "Lesson 14",
        description: "Capital Letters - Bottom Row & Numbers",
        exercises: [
            {
                name: "Bottom Row Capitals",
                text: "Զզ Խխ Վվ Ցց Մմ Նն Բբ Ղղ զխ վց մն բղ Զխ Վց Մն Բղ",
            },
            {
                name: "Numbers Row Capitals",
                text: "Էէ Ձձ Եև Րր Չչ Ճճ Ժժ Ծծ Ջջ էձ ևր չճ ժծ Էձ Եևր Չճ Ծջ",
            },
            {
                name: "Mixed Practice",
                text: "Զմ Խն Վբ Ցղ Էր Ձչ Եևզ Ճմ Ժն Ծբ Ջղ",
            },
            {
                name: "Simple Words",
                text: "Զարմ Խոս Վեց Ցանկ Մեկ Նոր Բարի Ղուկ",
            },
        ],
    },
    {
        title: "Lesson 15",
        description: "Numbers Row Keys",
        exercises: [
            { name: "Left Side", text: "է ձ և ր չ էձ ևր րչ էև ձր չէ" },
            { name: "Right Side", text: "ճ ժ ծ ջ ճժ ծջ ճծ ժջ ջժ" },
            {
                name: "Combined Practice",
                text: "էձևրչճժծջ ձևրչճժծջէ ևրչճժծջէձ",
            },
        ],
    },
    {
        title: "Lesson 16",
        description: "Common Words Practice",
        exercises: [
            {
                name: "Pronouns",
                text: "ես դու նա մենք դուք նրանք իմ քո նրա մեր ձեր",
            },
            {
                name: "Numbers",
                text: "մեկ երկու երեք չորս հինգ վեց յոթ ութ ինը տասը",
            },
            {
                name: "Family",
                text: "մայր հայր եղբայր քույր որդի դուստր տատիկ պապիկ",
            },
            {
                name: "Basic Verbs",
                text: "եմ ես է ենք եք են գալ գնալ տալ առնել ուզել",
            },
            {
                name: "Common Words",
                text: "այո ոչ բարև շնորհակալ խնդրեմ ներողություն հաջողություն",
            },
        ],
    },
    {
        title: "Lesson 17",
        description: "Sentences Practice",
        exercises: [
            {
                name: "Simple Sentences",
                text: "Ես սիրում եմ հայերեն։ Դու ինչպես ես։",
            },
            { name: "Questions", text: "Ի՞նչ է սա։ Ո՞վ է նա։ Որտե՞ղ է գիրքը։" },
            {
                name: "Everyday Phrases",
                text: "Բարի լույս։ Ինչպես եք։ Շատ լավ եմ։ Շնորհակալություն։",
            },
            {
                name: "Full Alphabet",
                text: "Այբուբենը՝ ա բ գ դ ե զ է ը թ ժ ի լ խ ծ կ հ ձ ղ ճ մ յ ն շ ո չ պ ջ ռ ս վ տ ր ց ւ փ ք օ ֆ և։",
            },
        ],
    },
    {
        title: "Lesson 18",
        description: "Punctuation & Special Characters",
        exercises: [
            {
                name: "Basic Punctuation",
                text: "Բարև։ Ինչպես ես, Արամ։ Շատ լավ եմ։",
            },
            {
                name: "Questions",
                text: "Ո՞վ է նա։ Ի՞նչ է սա։ Ինչպե՞ս։ Ի՞նչու։",
            },
            {
                name: "Quotations",
                text: "«Բարև ձեզ», - ասաց նա։ «Շնորհակալություն»։",
            },
            {
                name: "Complex Sentences",
                text: "Ես սիրում եմ կարդալ գիրք, լսել երաժշտություն և սովորել նոր բաներ։",
            },
        ],
    },
    {
        title: "Lesson 19",
        description: "Complete Alphabet Review",
        exercises: [
            {
                name: "All Lowercase",
                text: "ա բ գ դ ե զ է ը թ ժ ի լ խ ծ կ հ ձ ղ ճ մ յ ն շ ո չ պ ջ ռ ս վ տ ր ց ւ փ ք օ ֆ և",
            },
            {
                name: "All Uppercase",
                text: "Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ Հ Ձ Ղ Ճ Մ Յ Ն Շ Ո Չ Պ Ջ Ռ Ս Վ Տ Ր Ց Ւ Փ Ք Օ Ֆ ԵՎ",
            },
            {
                name: "Mixed Case",
                text: "Աա Բբ ԳգԴդ Եե Զզ Էէ Թթ Ժժ Իի Լլ Խխ Ծծ Կկ Հհ Ձձ Ղղ Ճճ Մմ Յյ Նն Շշ Ոո Չչ Պպ Ջջ Ռռ Սս Վվ Տտ Րր Ցց Ււ Փփ Քք Օօ Ֆֆ Եև",
            },
        ],
    },
    {
        title: "Lesson 20",
        description: "Final Assessment",
        exercises: [
            {
                name: "Speed Test - Letters",
                text: "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև",
            },
            {
                name: "Speed Test - Words",
                text: "հայ երկիր լեզու գիրք տուն արև լույս ջուր հայրենիք բարև շնորհակալ",
            },
            {
                name: "Speed Test - Sentences",
                text: "Բոլոր մարդիկ ծնվում են ազատ և հավասար իրենց արժանապատվությամբ և իրավունքներով։",
            },
            {
                name: "Poetry Line",
                text: "Մեր հայրենիքը հայոց լեզուն է։ Հայաստան անուն քաղաքն է մեր։",
            },
        ],
    },
];
