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
    // Uppercase letters
    Ա: { armenian: "Ա", transliteration: "A" },
    Բ: { armenian: "Բ", transliteration: "B" },
    Գ: { armenian: "Գ", transliteration: "G" },
    Դ: { armenian: "Դ", transliteration: "D" },
    Ե: { armenian: "Ե", transliteration: "E" },
    Զ: { armenian: "Զ", transliteration: "Z" },
    Է: { armenian: "Է", transliteration: "Ē" },
    Ը: { armenian: "Ը", transliteration: "Ə" },
    Թ: { armenian: "Թ", transliteration: "T'" },
    Ժ: { armenian: "Ժ", transliteration: "Ž" },
    Ի: { armenian: "Ի", transliteration: "I" },
    Լ: { armenian: "Լ", transliteration: "L" },
    Խ: { armenian: "Խ", transliteration: "X" },
    Ծ: { armenian: "Ծ", transliteration: "Ts" },
    Կ: { armenian: "Կ", transliteration: "K" },
    Հ: { armenian: "Հ", transliteration: "H" },
    Ձ: { armenian: "Ձ", transliteration: "Dz" },
    Ղ: { armenian: "Ղ", transliteration: "Ł" },
    Ճ: { armenian: "Ճ", transliteration: "Č" },
    Մ: { armenian: "Մ", transliteration: "M" },
    Յ: { armenian: "Յ", transliteration: "Y" },
    Ն: { armenian: "Ն", transliteration: "N" },
    Շ: { armenian: "Շ", transliteration: "Š" },
    Ո: { armenian: "Ո", transliteration: "O" },
    Չ: { armenian: "Չ", transliteration: "Č'" },
    Պ: { armenian: "Պ", transliteration: "P" },
    Ջ: { armenian: "Ջ", transliteration: "J" },
    Ռ: { armenian: "Ռ", transliteration: "Ṙ" },
    Ս: { armenian: "Ս", transliteration: "S" },
    Վ: { armenian: "Վ", transliteration: "V" },
    Տ: { armenian: "Տ", transliteration: "T" },
    Ր: { armenian: "Ր", transliteration: "R" },
    Ց: { armenian: "Ց", transliteration: "C'" },
    Ւ: { armenian: "Ւ", transliteration: "W" },
    Փ: { armenian: "Փ", transliteration: "P'" },
    Ք: { armenian: "Ք", transliteration: "K'" },
    Օ: { armenian: "Օ", transliteration: "Ō" },
    Ֆ: { armenian: "Ֆ", transliteration: "F" },
    ԵՒ: { armenian: "ԵՒ", transliteration: "Ev" },
    ".": { armenian: ".", transliteration: "." },
    ",": { armenian: ",", transliteration: "," },
    ":": { armenian: ":", transliteration: ":" },
    ";": { armenian: ";", transliteration: ";" },
    "?": { armenian: "՞", transliteration: "?" },
    "!": { armenian: "!", transliteration: "!" },
    " ": { armenian: " ", transliteration: " " },
};

export const SOUND_MAP: Record<string, string> = {
    // Lowercase
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
    // Uppercase (same sounds as lowercase)
    Ա: "a",
    Բ: "b",
    Գ: "g",
    Դ: "d",
    Ե: "y",
    Զ: "z",
    Է: "e",
    Ը: "ee",
    Թ: "th",
    Ժ: "j",
    Ի: "i",
    Լ: "l",
    Խ: "kh",
    Ծ: "ts",
    Կ: "k",
    Հ: "h",
    Ձ: "dz",
    Ղ: "gh",
    Ճ: "tsh",
    Մ: "m",
    Յ: "ye",
    Ն: "n",
    Շ: "sh",
    Ո: "v",
    Չ: "tch",
    Պ: "p",
    Ջ: "dj",
    Ռ: "r",
    Ս: "s",
    Վ: "ve",
    Տ: "t",
    Ր: "ze",
    Ց: "tse",
    Ւ: "u",
    Փ: "ph",
    Ք: "khe",
    Օ: "o",
    Ֆ: "vee",
    ԵՒ: "yev",
};

// This map provides English-readable phonetic strings for the computer voice (TTS)
// to use. This avoids issues where a user might not have an Armenian ('hy-AM')
// voice pack installed, which would cause the TTS to be silent. This is a robust fallback.
export const COMPUTER_VOICE_PHONETIC_MAP: Record<string, string> = {
    ա: "ah", // [a] like "ask"
    բ: "buh", // [b] like "by, phone"
    գ: "guh", // [g/ɡ] like "go, ok"
    դ: "duh", // [d] like "do, thin"
    ե: "yeh", // [ɛ] like "yes"
    զ: "zeh", // [z] like "zoo"
    է: "eh", // [e] like "egg"
    ը: "uh", // [ə] like "put"
    թ: "tuh", // [tʰ] like "time"
    ժ: "zhuh", // [ʒ] like "vision"
    ի: "ee", // [i] like "ski"
    լ: "luh", // [l] like "love"
    խ: "khuh", // [χ] like "Bach"
    ծ: "tsuh", // [ts] like "cats"
    կ: "kuh", // [k] like "ok, go"
    հ: "huh", // [h] like "hi"
    ձ: "dzuh", // [dz] like "kids"
    ղ: "ghuh", // [ʁ] like "merci"
    ճ: "chuh", // [tʃ] like "urge"
    մ: "muh", // [m] like "mom"
    յ: "yuh", // [j] like "you"
    ն: "nuh", // [n] like "nice"
    շ: "shuh", // [ʃ] like "shiny"
    ո: "vo", // [v/o] like "vast, pot"
    չ: "chuh", // [tʃʰ] like "porch"
    պ: "puh", // [p] like "pen, by"
    ջ: "juh", // [dʒ] like "job"
    ռ: "ruh", // [r] like "Roma"
    ս: "suh", // [s] like "sand"
    վ: "vuh", // [v] like "vast"
    տ: "tuh", // [t] like "but"
    ր: "ruh", // [ɾ] like "red"
    ց: "tsuh", // [tsʰ] like "bits"
    ւ: "vuh", // [w,v] like "cool"
    փ: "puh", // [pʰ] like "pear"
    ք: "kuh", // [kʰ] like "king"
    օ: "oh", // [o] like "old"
    ֆ: "fuh", // [f] like "fly"
    և: "yev", // [jɛv] like "Yevett"
    // Uppercase (same sounds as lowercase)
    Ա: "ah",
    Բ: "buh",
    Գ: "guh",
    Դ: "duh",
    Ե: "yeh",
    Զ: "zeh",
    Է: "eh",
    Ը: "uh",
    Թ: "tuh",
    Ժ: "zhuh",
    Ի: "ee",
    Լ: "luh",
    Խ: "khuh",
    Ծ: "tsuh",
    Կ: "kuh",
    Հ: "huh",
    Ձ: "dzuh",
    Ղ: "ghuh",
    Ճ: "chuh",
    Մ: "muh",
    Յ: "yuh",
    Ն: "nuh",
    Շ: "shuh",
    Ո: "vo",
    Չ: "chuh",
    Պ: "puh",
    Ջ: "juh",
    Ռ: "ruh",
    Ս: "suh",
    Վ: "vuh",
    Տ: "tuh",
    Ր: "ruh",
    Ց: "tsuh",
    Ւ: "vuh",
    Փ: "puh",
    Ք: "kuh",
    Օ: "oh",
    Ֆ: "fuh",
    ԵՒ: "yev",
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
        createKey("Backquote", "է", "Է"),
        createKey("Digit1", "ձ", "Ձ"),
        null, // Was 'յ', duplicate of KeyJ
        createKey("Digit3", "և", "ԵՒ"),
        createKey("Digit4", "ր", "Ր"),
        createKey("Digit5", "չ", "Չ"),
        createKey("Digit6", "ճ", "Ճ"),
        createKey("Digit7", "ժ", "Ժ"),
        createKey("Digit8", "ծ", "Ծ"),
        null, // Was 'ց', duplicate of KeyC
        createKey("Digit0", "ძ"),
        null, // Was 'ռ', duplicate of KeyR
        createKey("Equal", "ջ", "Ջ"),
        null,
    ],
    [
        null,
        createKey("KeyQ", "ք", "Ք"),
        createKey("KeyW", "ո", "Ո"),
        createKey("KeyE", "ե", "Ե"),
        createKey("KeyR", "ռ", "Ռ"),
        createKey("KeyT", "տ", "Տ"),
        createKey("KeyY", "ը", "Ը"),
        createKey("KeyU", "ւ", "Ւ"),
        createKey("KeyI", "ի", "Ի"),
        createKey("KeyO", "օ", "Օ"),
        createKey("KeyP", "պ", "Պ"),
        null, // Was 'խ', duplicate of KeyX
        createKey("BracketRight", "շ", "Շ"),
    ],
    [
        null,
        createKey("KeyA", "ա", "Ա"),
        createKey("KeyS", "ս", "Ս"),
        createKey("KeyD", "դ", "Դ"),
        createKey("KeyF", "ֆ", "Ֆ"),
        createKey("KeyG", "գ", "Գ"),
        createKey("KeyH", "հ", "Հ"),
        createKey("KeyJ", "յ", "Յ"),
        createKey("KeyK", "կ", "Կ"),
        createKey("KeyL", "լ", "Լ"),
        createKey("Semicolon", "թ", "Թ"),
        createKey("Quote", "փ", "Փ"),
        null,
    ],
    [
        null,
        createKey("KeyZ", "զ", "Զ"),
        createKey("KeyX", "խ", "Խ"),
        createKey("KeyC", "ց", "Ց"),
        createKey("KeyV", "վ", "Վ"),
        createKey("KeyB", "բ", "Բ"),
        createKey("KeyN", "ն", "Ն"),
        createKey("KeyM", "մ", "Մ"),
        createKey("Comma", ","),
        createKey("Period", "."),
        createKey("Slash", "ղ", "Ղ"),
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
    // REINFORCEMENT LESSONS - Deep Practice for Each Letter
    {
        title: "Lesson 21",
        description: "Master ա (a) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "աաա աաա աաա աաա աաա աաա աաա աաա աաա աաա",
            },
            { name: "With Space", text: "ա ա ա ա ա ա ա ա ա ա ա ա ա ա ա" },
            { name: "Pattern 1", text: "աա աաա աա աաա աա աաա աա աաա" },
            { name: "Pattern 2", text: "ա աա աաա աա ա աա աաա աա ա" },
            { name: "With ֆ", text: "աֆ ֆա աֆ ֆա աֆաֆ ֆաֆա աֆաֆ" },
            { name: "Alternating", text: "ա ֆ ա ֆ ա ֆ աֆ ֆա աֆ ֆա" },
        ],
    },
    {
        title: "Lesson 22",
        description: "Master բ (b) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "բբբ բբբ բբբ բբբ բբբ բբբ բբբ բբբ բբբ բբբ",
            },
            { name: "With Space", text: "բ բ բ բ բ բ բ բ բ բ բ բ բ բ բ" },
            { name: "Pattern 1", text: "բբ բբբ բբ բբբ բբ բբբ բբ բբբ" },
            { name: "Pattern 2", text: "բ բբ բբբ բբ բ բբ բբբ բբ բ" },
            { name: "With Known", text: "բա աբ բաբ աբա բաբա աբաբ" },
            { name: "Complex", text: "բ ա բ ա բաբա աբաբ բաբ աբա" },
        ],
    },
    {
        title: "Lesson 23",
        description: "Master գ (g) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "գգգ գգգ գգգ գգգ գգգ գգգ գգգ գգգ գգգ գգգ",
            },
            { name: "With Space", text: "գ գ գ գ գ գ գ գ գ գ գ գ գ գ գ" },
            { name: "Pattern 1", text: "գգ գգգ գգ գգգ գգ գգգ գգ գգգ" },
            { name: "With ա", text: "գա ագ գաա աագ գագ աագա" },
            { name: "With բ", text: "գբ բգ գբգ բգբ գբա բգա" },
            { name: "All Three", text: "գաբ բագ աբգ գբա բագ աగբ" },
        ],
    },
    {
        title: "Lesson 24",
        description: "Master դ (d) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "դդդ դդդ դդդ դդդ դդդ դդդ դդդ դդդ դդդ դդդ",
            },
            { name: "With Space", text: "դ դ դ դ դ դ դ դ դ դ դ դ դ դ դ" },
            { name: "Pattern", text: "դդ դդդ դդ դդդ դդ դդդ դդ դդդ" },
            { name: "Review Mix", text: "դա ադ դաբ բադ դագ գադ" },
            { name: "Complex 1", text: "դաբագ բադագ գաբադ" },
            { name: "Complex 2", text: "դ բ գ ա դբ բգ գա ադ աբ" },
        ],
    },
    {
        title: "Lesson 25",
        description: "Master ե (e) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "եեե եեե եեե եեե եեե եեե եեե եեե եեե եեե",
            },
            { name: "With Space", text: "ե ե ե ե ե ե ե ե ե ե ե ե ե ե ե" },
            { name: "Pattern", text: "եե եեե եե եեե եե եեե եե եեե" },
            { name: "With Previous", text: "եա աե եդ դե եբ բե եգ գե" },
            { name: "Build Words", text: "ել եգ դե բե ած եակ եիկ" },
            { name: "Complex", text: "ե ա դ բ գ եադ դեբ բեգ գեա" },
        ],
    },
    {
        title: "Lesson 26",
        description: "Master զ (z) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "զզզ զզզ զզզ զզզ զզզ զզզ զզզ զզզ զզզ զզզ",
            },
            { name: "With Space", text: "զ զ զ զ զ զ զ զ զ զ զ զ զ զ զ" },
            { name: "Pattern", text: "զզ զզզ զզ զզզ զզ զզզ զզ զզզ" },
            { name: "Combinations", text: "զա ազ զե եզ զբ բզ զգ գզ" },
            { name: "Three Letter", text: "զեա աեզ զաբ բազ զեդ դեզ" },
            { name: "Complex Mix", text: "զ ե զ ա զ բ զեա բազ գեզ" },
        ],
    },
    {
        title: "Lesson 27",
        description: "Master է (ē) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "էէէ էէէ էէէ էէէ էէէ էէէ էէէ էէէ էէէ էէէ",
            },
            { name: "With Space", text: "է է է է է է է է է է է է է է է" },
            { name: "Pattern", text: "էէ էէէ էէ էէէ էէ էէէ էէ էէէ" },
            { name: "Two Letter", text: "էզ զէ էե եէ էա աէ էբ բէ" },
            { name: "Three Letter", text: "էզա զէա էեբ բեէ էագ գաէ" },
            { name: "Review All", text: "է ե զ ա բ գ դ էեզ զաբ բգդ" },
        ],
    },
    {
        title: "Lesson 28",
        description: "Master ը (ə) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ըըը ըըը ըըը ըըը ըըը ըըը ըըը ըըը ըըը ըըը",
            },
            { name: "With Space", text: "ը ը ը ը ը ը ը ը ը ը ը ը ը ը ը" },
            { name: "Pattern", text: "ըը ըըը ըը ըըը ըը ըըը ըը ըըը" },
            { name: "Pairs", text: "ըա աը ըե եը ըզ զը ըէ էը" },
            { name: "Build Up", text: "ըզե եզը ըաբ բաը ըգդ դգը" },
            { name: "Full Mix", text: "ը է զ ե դ գ բ ա ըէզե զաբգ" },
        ],
    },
    {
        title: "Lesson 29",
        description: "Master թ (t') - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "թթթ թթթ թթթ թթթ թթթ թթթ թթթ թթթ թթթ թթթ",
            },
            { name: "With Space", text: "թ թ թ թ թ թ թ թ թ թ թ թ թ թ թ" },
            { name: "Pattern", text: "թթ թթթ թթ թթթ թթ թթթ թթ թթթ" },
            { name: "Simple Pairs", text: "թա աթ թե եթ թը ըթ թզ զթ" },
            { name: "Complex", text: "թաբ բաթ թեզ զեթ թըգ գըթ" },
            { name: "All Letters", text: "թ ը է զ ե դ գ բ ա թաբ էզե" },
        ],
    },
    {
        title: "Lesson 30",
        description: "Master ժ (ž) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ժժժ ժժժ ժժժ ժժժ ժժժ ժժժ ժժժ ժժժ ժժժ ժժժ",
            },
            { name: "With Space", text: "ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ ժ" },
            { name: "Pattern", text: "ժժ ժժժ ժժ ժժժ ժժ ժժժ ժժ ժժժ" },
            { name: "Pairs", text: "ժա աժ ժե եժ ժթ թժ ժը ըժ" },
            { name: "Three Letter", text: "ժաբ բաժ ժեգ գեժ ժթդ դթժ" },
            { name: "Review", text: "ժ թ ը է զ ե դ գ բ ա ժթա էզե" },
        ],
    },
    {
        title: "Lesson 31",
        description: "Master ի (i) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "իիի իիի իիի իիի իիի իիի իիի իիի իիի իիի",
            },
            { name: "With Space", text: "ի ի ի ի ի ի ի ի ի ի ի ի ի ի ի" },
            { name: "Pattern", text: "իի իիի իի իիի իի իիի իի իիի" },
            { name: "Build Simple", text: "իա աի իե եի իզ զի իը ըի" },
            { name: "Build Complex", text: "իաբ բաի իեգ գեի իժդ դժի" },
            { name: "All Together", text: "ի ժ թ ը է զ ե դ գ բ ա իաբ զեգ" },
        ],
    },
    {
        title: "Lesson 32",
        description: "Master լ (l) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "լլլ լլլ լլլ լլլ լլլ լլլ լլլ լլլ լլլ լլլ",
            },
            { name: "With Space", text: "լ լ լ լ լ լ լ լ լ լ լ լ լ լ լ" },
            { name: "Pattern", text: "լլ լլլ լլ լլլ լլ լլլ լլ լլլ" },
            { name: "Two Letter", text: "լա ալ լե ել լի իլ լը ըլ" },
            { name: "Three Letter", text: "լաբ բալ լեգ գել լիդ դիլ" },
            { name: "Full Review", text: "լ ի ժ թ ը է զ ե դ գ բ ա լիա զեբ" },
        ],
    },
    {
        title: "Lesson 33",
        description: "Master խ (x) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "խխխ խխխ խխխ խխխ խխխ խխխ խխխ խխխ խխխ խխխ",
            },
            { name: "With Space", text: "խ խ խ խ խ խ խ խ խ խ խ խ խ խ խ" },
            { name: "Pattern", text: "խխ խխխ խխ խխխ խխ խխխ խխ խխխ" },
            { name: "Simple Mix", text: "խա ախ խե եխ խի իխ խլ լխ" },
            { name: "Build Words", text: "խաբ բախ խեգ գեխ խիլ լիխ" },
            { name: "Review All", text: "խ լ ի ժ թ ը է զ ե դ գ բ ա խալ իբ" },
        ],
    },
    {
        title: "Lesson 34",
        description: "Master ծ (ts) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ծծծ ծծծ ծծծ ծծծ ծծծ ծծծ ծծծ ծծծ ծծծ ծծծ",
            },
            { name: "With Space", text: "ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ ծ" },
            { name: "Pattern", text: "ծծ ծծծ ծծ ծծծ ծծ ծծծ ծծ ծծծ" },
            { name: "Pairs", text: "ծա ած ծե եծ ծի իծ ծլ լծ" },
            { name: "Three Letter", text: "ծաբ բած ծեգ գեծ ծիլ լիծ" },
            { name: "Practice Mix", text: "ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 35",
        description: "Master կ (k) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "կկկկ կկկկ կկկկ կկկկ կկկկ կկկկ կկկկ կկկկ",
            },
            { name: "With Space", text: "կ կ կ կ կ կ կ կ կ կ կ կ կ կ կ" },
            { name: "Pattern", text: "կկ կկկ կկ կկկ կկ կկկ կկ կկկ" },
            { name: "Build Simple", text: "կա ակ կե եկ կի իկ կլ լկ" },
            { name: "Build Complex", text: "կաբ բակ կեգ գեկ կիլ լիկ" },
            { name: "Review", text: "կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 36",
        description: "Master հ (h) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "հհհհ հհհհ հհհհ հհհհ հհհհ հհհհ հհհհ հհհհ",
            },
            { name: "With Space", text: "հ հ հ հ հ հ հ հ հ հ հ հ հ հ հ" },
            { name: "Pattern", text: "հհ հհհ հհ հհհ հհ հհհ հհ հհհ" },
            { name: "Two Letter", text: "հա ահ հե եհ հի իհ հկ կհ" },
            { name: "Three Letter", text: "հաբ բահ հեգ գեհ հիլ լիհ" },
            { name: "Full Practice", text: "հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 37",
        description: "Master ձ (dz) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ձձձ ձձձ ձձձ ձձձ ձձձ ձձձ ձձձ ձձձ ձձձ ձձձ",
            },
            { name: "With Space", text: "ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ ձ" },
            { name: "Pattern", text: "ձձ ձձձ ձձ ձձձ ձձ ձձձ ձձ ձձձ" },
            { name: "Simple Pairs", text: "ձա աձ ձե եձ ձի իձ ձհ հձ" },
            { name: "Build Up", text: "ձաբ բաձ ձեգ գեձ ձիկ կիձ" },
            { name: "Review All", text: "ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 38",
        description: "Master ղ (ł) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ղղղ ղղղ ղղղ ղղղ ղղղ ղղղ ղղղ ղղղ ղղղ ղղղ",
            },
            { name: "With Space", text: "ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ ղ" },
            { name: "Pattern", text: "ղղ ղղղ ղղ ղղղ ղղ ղղղ ղղ ղղղ" },
            { name: "Pairs", text: "ղա աղ ղե եղ ղի իղ ղկ կղ" },
            { name: "Complex", text: "ղաբ բաղ ղեգ գեղ ղիլ լիղ" },
            { name: "Practice", text: "ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 39",
        description: "Master ճ (č) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ճճճ ճճճ ճճճ ճճճ ճճճ ճճճ ճճճ ճճճ ճճճ ճճճ",
            },
            { name: "With Space", text: "ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ ճ" },
            { name: "Pattern", text: "ճճ ճճճ ճճ ճճճ ճճ ճճճ ճճ ճճճ" },
            { name: "Build", text: "ճա աճ ճե եճ ճի իճ ճկ կճ" },
            { name: "Three Letter", text: "ճաբ բաճ ճեգ գեճ ճիլ լիճ" },
            { name: "Full Mix", text: "ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 40",
        description: "Master մ (m) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "մմմ մմմ մմմ մմմ մմմ մմմ մմմ մմմ մմմ մմմ",
            },
            { name: "With Space", text: "մ մ մ մ մ մ մ մ մ մ մ մ մ մ մ" },
            { name: "Pattern", text: "մմ մմմ մմ մմմ մմ մմմ մմ մմմ" },
            { name: "Simple", text: "մա ամ մե եմ մի իմ մկ կմ" },
            { name: "Complex", text: "մաբ բամ մեգ գեմ միլ լիմ" },
            { name: "Review", text: "մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա" },
        ],
    },
    {
        title: "Lesson 41",
        description: "Master յ (y) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "յյյ յյյ յյյ յյյ յյյ յյյ յյյ յյյ յյյ յյյ",
            },
            { name: "With Space", text: "յ յ յ յ յ յ յ յ յ յ յ յ յ յ յ" },
            { name: "Pattern", text: "յյ յյյ յյ յյյ յյ յյյ յյ յյյ" },
            { name: "Build Simple", text: "յա այ յե եյ յի իյ յմ մյ" },
            { name: "Build Complex", text: "յաբ բայ յեգ գեյ յիլ լիյ" },
            {
                name: "Full Practice",
                text: "յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 42",
        description: "Master ն (n) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ննն ննն ննն ննն ննն ննն ննն ննն ննն ննն",
            },
            { name: "With Space", text: "ն ն ն ն ն ն ն ն ն ն ն ն ն ն ն" },
            { name: "Pattern", text: "նն ննն նն ննն նն ննն նն ննն" },
            { name: "Pairs", text: "նա ան նե են նի ին նյ յն" },
            { name: "Three Letter", text: "նաբ բան նեգ գեն նիլ լին" },
            {
                name: "Review Mix",
                text: "ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 43",
        description: "Master շ (š) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "շշշ շշշ շշշ շշշ շշշ շշշ շշշ շշշ շշշ շշշ",
            },
            { name: "With Space", text: "շ շ շ շ շ շ շ շ շ շ շ շ շ շ շ" },
            { name: "Pattern", text: "շշ շշշ շշ շշշ շշ շշշ շշ շշշ" },
            { name: "Build", text: "շա աշ շե եշ շի իշ շն նշ" },
            { name: "Complex", text: "շաբ բաշ շեգ գեշ շին նիշ" },
            {
                name: "Practice All",
                text: "շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 44",
        description: "Master ո (o) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ոոո ոոո ոոո ոոո ոոո ոոո ոոո ոոո ոոո ոոո",
            },
            { name: "With Space", text: "ո ո ո ո ո ո ո ո ո ո ո ո ո ո ո" },
            { name: "Pattern", text: "ոո ոոո ոո ոոո ոո ոոո ոո ոոո" },
            { name: "Simple", text: "ոա աո ոե եո ոի իո ոն նո" },
            { name: "Build", text: "ոաբ բաո ոեգ գեո ոիլ լիո" },
            {
                name: "Full Mix",
                text: "ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 45",
        description: "Master չ (č') - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "չչչ չչչ չչչ չչչ չչչ չչչ չչչ չչչ չչչ չչչ",
            },
            { name: "With Space", text: "չ չ չ չ չ չ չ չ չ չ չ չ չ չ չ" },
            { name: "Pattern", text: "թթ չչչ չչ չչչ չչ չչչ չչ չչչ" },
            { name: "Pairs", text: "չա աչ չե եչ չի իչ չո ոչ" },
            { name: "Three Letter", text: "չաբ բաչ չեգ գեչ չին նիչ" },
            {
                name: "Review",
                text: "չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 46",
        description: "Master պ (p) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "պպպ պպպ պպպ պպպ պպպ պպպ պպպ պպպ պպպ պպպ",
            },
            { name: "With Space", text: "պ պ պ պ պ պ պ պ պ պ պ պ պ պ պ" },
            { name: "Pattern", text: "պպ պպպ պպ պպպ պպ պպպ պպ պպպ" },
            { name: "Build Simple", text: "պա ապ պե եպ պի իպ պո որ" },
            { name: "Build Complex", text: "պաբ բապ պեգ գեպ պին նիպ" },
            {
                name: "Practice Mix",
                text: "պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 47",
        description: "Master ջ (j) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ջջջ ջջջ ջջջ ջջջ ջջջ ջջջ ջջջ ջջջ ջջջ ջջջ",
            },
            { name: "With Space", text: "ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ ջ" },
            { name: "Pattern", text: "ջջ ջջջ ջջ ջջջ ջջ ջջջ ջջ ջջջ" },
            { name: "Pairs", text: "ջա աջ ջե եջ ջի իջ ջո օջ" },
            { name: "Complex", text: "ջաբ բաջ ջեգ գեջ ջին նիջ" },
            {
                name: "Full Review",
                text: "ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 48",
        description: "Master ռ (ṙ) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ռռռ ռռռ ռռռ ռռռ ռռռ ռռռ ռռռ ռռռ ռռռ ռռռ",
            },
            { name: "With Space", text: "ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ ռ" },
            { name: "Pattern", text: "ռռ ռռռ ռռ ռռռ ռռ ռռռ ռռ ռռռ" },
            { name: "Build", text: "ռա առ ռե եռ ռի իռ ռո օռ" },
            { name: "Three Letter", text: "ռաբ բառ ռեգ գեռ ռին նիռ" },
            {
                name: "Practice",
                text: "ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 49",
        description: "Master ս (s) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "սսս սսս սսս սսս սսս սսս սսս սսս սսս սսս",
            },
            { name: "With Space", text: "ս ս ս ս ս ս ս ս ս ս ս ս ս ս ս" },
            { name: "Pattern", text: "սս սսս սս սսս սս սսս սս սսս" },
            { name: "Simple", text: "սա աս սե ես սի իս սո ոս" },
            { name: "Build", text: "սաբ բաս սեգ գես սին նիս" },
            {
                name: "Review Mix",
                text: "ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 50",
        description: "Master վ (v) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "վվվ վվվ վվվ վվվ վվվ վվվ վվվ վվվ վվվ վվվ",
            },
            { name: "With Space", text: "վ վ վ վ վ վ վ վ վ վ վ վ վ վ վ" },
            { name: "Pattern", text: "վվ վվվ վվ վվվ վվ վվվ վվ վվվ" },
            { name: "Pairs", text: "վա ավ վե եվ վի իվ վո ով" },
            { name: "Complex", text: "վաբ բավ վեգ գեվ վին նիվ" },
            {
                name: "Practice All",
                text: "վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 51",
        description: "Master տ (t) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "տտտ տտտ տտտ տտտ տտտ տտտ տտտ տտտ տտտ տտտ",
            },
            { name: "With Space", text: "տ տ տ տ տ տ տ տ տ տ տ տ տ տ տ" },
            { name: "Pattern", text: "տտ տտտ տտ տտտ տտ տտտ տտ տտտ" },
            { name: "Build Simple", text: "տա ատ տե ետ տի իտ տո ոտ" },
            { name: "Build Complex", text: "տաբ բատ տեգ գետ տին նիտ" },
            {
                name: "Full Mix",
                text: "տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 52",
        description: "Master ր (r) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "րրրր րրրր րրրր րրրր րրրր րրրր րրրր րրրր",
            },
            { name: "With Space", text: "ր ր ր ր ր ր ր ր ր ր ր ր ր ր ր" },
            { name: "Pattern", text: "րր րրրր րր րրրր րր րրրր րր րրրր" },
            { name: "Pairs", text: "րա արր րե եր րի իր րո որ" },
            { name: "Three Letter", text: "րաբ բարր րեգ գեր րին նիր" },
            {
                name: "Review",
                text: "ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 53",
        description: "Master ց (c') - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ցցց ցցց ցցց ցցց ցցց ցցց ցցց ցցց ցցց ցցց",
            },
            { name: "With Space", text: "ց ց ց ց ց ց ց ց ց ց ց ց ց ց ց" },
            { name: "Pattern", text: "ցց ցցց ցց ցցց ցց ցցց ցց ցցց" },
            { name: "Build", text: "ցա աց ցե եց ցի ից ցո օց" },
            { name: "Complex", text: "ցաբ բաց ցեգ գեց ցին նից" },
            {
                name: "Practice Mix",
                text: "ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 54",
        description: "Master ւ (w) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "ււււ ււււ ււււ ււււ ււււ ււււ ււււ ււււ",
            },
            { name: "With Space", text: "ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ ւ" },
            { name: "Pattern", text: "ււ ււււ ււ ււււ ււ ււււ ււ ււււ" },
            { name: "Simple", text: "ւա աւ ւե եւ ւի իւ ւո օւ" },
            { name: "Build", text: "ւաբ բաւ ւեգ գեւ ւին նիւ" },
            {
                name: "Full Review",
                text: "ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 55",
        description: "Master փ (p') - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "փփփ փփփ փփփ փփփ փփփ փփփ փփփ փփփ փփփ փփփ",
            },
            { name: "With Space", text: "փ փ փ փ փ փ փ փ փ փ փ փ փ փ փ" },
            { name: "Pattern", text: "փփ փփփ փփ փփփ փփ փփփ փփ փփփ" },
            { name: "Pairs", text: "փա ափ փե եփ փի իփ փո օփ" },
            { name: "Complex", text: "փաբ բափ փեգ գեփ փին նիփ" },
            {
                name: "Practice",
                text: "փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 56",
        description: "Master ք (k') - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "թթք թթք թթք թթք թթք թթք թթք թթք թթք թթք",
            },
            { name: "With Space", text: "ք ք ք ք ք ք ք ք ք ք ք ք ք ք ք" },
            { name: "Pattern", text: "թթ թթք թթ թթք թթ թթք թթ թթք" },
            { name: "Build", text: "քա աք քե եք քի իք քո օք" },
            { name: "Three Letter", text: "քաբ բաք քեգ գեք քին նիք" },
            {
                name: "Full Mix",
                text: "ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 57",
        description: "Master օ (ō) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "օօօ օօօ օօօ օօօ օօօ օօօ օօօ օօօ օօօ օօօ",
            },
            { name: "With Space", text: "օ օ օ օ օ օ օ օ օ օ օ օ օ օ օ" },
            { name: "Pattern", text: "օօ օօօ օօ օօօ օօ օօօ օօ օօօ" },
            { name: "Simple", text: "օր րօ օտ տօ օն նօ օք քօ" },
            { name: "Build", text: "օրե եօր օտա աօտ օնի իօն" },
            {
                name: "Review Mix",
                text: "օ ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 58",
        description: "Master ֆ (f) - Deep Reinforcement",
        exercises: [
            {
                name: "Solo Practice",
                text: "ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ ֆֆֆ",
            },
            { name: "With Space", text: "ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ ֆ" },
            { name: "Pattern", text: "ֆֆ ֆֆֆ ֆֆ ֆֆֆ ֆֆ ֆֆֆ ֆֆ ֆֆֆ" },
            { name: "Pairs", text: "ֆա աֆ ֆե եֆ ֆի իֆ ֆօ օֆ" },
            { name: "Complex", text: "ֆաբ բաֆ ֆեգ գեֆ ֆին նիֆ" },
            {
                name: "Full Practice",
                text: "ֆ օ ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 59",
        description: "Master և (ev) - Extensive Practice",
        exercises: [
            {
                name: "Solo Practice",
                text: "եև եև եև եև եև եև եև եև եև եև եև եև",
            },
            { name: "With Space", text: "և և և և և և և և և և և և և և և" },
            { name: "Pattern", text: "եև եևև եև եևև եև եևև եև եևև" },
            { name: "Build Simple", text: "և ա և ե և ի և օ և ֆ" },
            { name: "Word Practice", text: "և այս և նրա և ես և դու և նա" },
            {
                name: "Final Review",
                text: "և ֆ օ ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    {
        title: "Lesson 60",
        description: "Complete Alphabet Mastery Review",
        exercises: [
            {
                name: "All Letters - Slow",
                text: "ա բ գ դ ե զ է ը թ ժ ի լ խ ծ կ հ ձ ղ ճ մ յ ն շ ո չ պ ջ ռ ս վ տ ր ց ւ փ ք օ ֆ և",
            },
            {
                name: "Random Mix 1",
                text: "ֆյդսկլ ագհթփ եիոպշք ռտըւօ վմցն զխբղ",
            },
            {
                name: "Random Mix 2",
                text: "բագդե զէըթժ իլխծկ հձղճմ յնշոչ պջռսվ տրցւփ քօֆև",
            },
            {
                name: "Word Patterns",
                text: "աբգ բգդ գդե դեզ եզէ զէը էըթ ըթժ թժի",
            },
            {
                name: "Reverse Order",
                text: "և ֆ օ ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
            {
                name: "Full Mastery Test",
                text: "ա բ գ դ ե զ է ը թ ժ ի լ խ ծ կ հ ձ ղ ճ մ յ ն շ ո չ պ ջ ռ ս վ տ ր ց ւ փ ք օ ֆ և և ֆ օ ք փ ւ ց ր տ վ ս ռ ջ պ չ ո շ ն յ մ ճ ղ ձ հ կ ծ խ լ ի ժ թ ը է զ ե դ գ բ ա",
            },
        ],
    },
    // SIMILAR SOUNDS - Distinguishing Confusing Letter Groups
    {
        title: "Lesson 61",
        description:
            "B/P Distinction - Voiced [b] vs Voiceless [p] vs Aspirated [pʰ]",
        exercises: [
            { name: "Բ vs Պ vs Փ", text: "բ պ փ բ պ փ բ պ փ բ պ փ բ պ փ" },
            { name: "Voiced Բ [b]", text: "բա բե բի բո բու բաբ բիբ բոբ" },
            { name: "Voiceless Պ [p]", text: "պա պե պի պո պու պապ պիպ պոպ" },
            { name: "Aspirated Փ [pʰ]", text: "փա փե փի փո փու փափ փիփ փոփ" },
            { name: "Alternating 1", text: "բա պա փա բե պե փե բի պի փի" },
            { name: "Alternating 2", text: "բպ պբ բփ փբ պփ փպ բպփ փպբ" },
            { name: "Mixed Practice", text: "բաբ պապ փափ բապ պաբ փաբ բափ պափ" },
        ],
    },
    {
        title: "Lesson 62",
        description:
            "G/K Distinction - Voiced [g] vs Voiceless [k] vs Aspirated [kʰ]",
        exercises: [
            { name: "Գ vs Կ vs Ք", text: "գ կ ք գ կ ք գ կ ք գ կ ք գ կ ք" },
            { name: "Voiced Գ [g]", text: "գա գե գի գո գու գագ գիգ գոգ" },
            { name: "Voiceless Կ [k]", text: "կա կե կի կո կու կակ կիկ կոկ" },
            { name: "Aspirated Ք [kʰ]", text: "քա քե քի քո քու քաք քիք քոք" },
            { name: "Alternating 1", text: "գա կա քա գե կե քե գի կի քի" },
            { name: "Alternating 2", text: "գկ կգ գք քգ կք քկ գկք քկգ" },
            { name: "Mixed Practice", text: "գագ կակ քաք գակ կագ քագ գաք կաք" },
        ],
    },
    {
        title: "Lesson 63",
        description:
            "D/T Distinction - Voiced [d] vs Voiceless [t] vs Aspirated [tʰ]",
        exercises: [
            { name: "Դ vs Տ vs Թ", text: "դ տ թ դ տ թ դ տ թ դ տ թ դ տ թ" },
            { name: "Voiced Դ [d]", text: "դա դե դի դո դու դադ դիդ դոդ" },
            { name: "Voiceless Տ [t]", text: "տա տե տի տո տու տատ տիտ տոտ" },
            { name: "Aspirated Թ [tʰ]", text: "թա թե թի թո թու թաթ թիթ թոթ" },
            { name: "Alternating 1", text: "դա տա թա դե տե թե դի տի թի" },
            { name: "Alternating 2", text: "դտ տդ դթ թդ տթ թտ դտթ թտդ" },
            { name: "Mixed Practice", text: "դադ տատ թաթ դատ տադ թադ դաթ տաթ" },
        ],
    },
    {
        title: "Lesson 64",
        description:
            "J/CH Distinction - Voiced [dʒ] vs Voiceless [tʃ] vs Aspirated [tʃʰ]",
        exercises: [
            { name: "Ձ vs Ճ vs Չ", text: "ձ ճ չ ձ ճ չ ձ ճ չ ձ ճ չ ձ ճ չ" },
            { name: "Voiced Ձ [dʒ]", text: "ձա ձե ձի ձո ձու ձաձ ձիձ ձոձ" },
            { name: "Voiceless Ճ [tʃ]", text: "ճա ճե ճի ճո ճու ճաճ ճիճ ճոճ" },
            { name: "Aspirated Չ [tʃʰ]", text: "չա չե չի չո չու չաչ չիչ չոչ" },
            { name: "Alternating 1", text: "ձա ճա չա ձե ճե չե ձի ճի չի" },
            { name: "Alternating 2", text: "ձճ ճձ ձչ չձ ճչ չճ ձճչ չճձ" },
            { name: "Mixed Practice", text: "ձաձ ճաճ չաչ ձաճ ճաձ չաձ ձաչ ճաչ" },
        ],
    },
    {
        title: "Lesson 65",
        description: "TS/DZ/TSʰ Family - Distinguishing [ts], [dz], [tsʰ]",
        exercises: [
            { name: "Ծ vs Ձ vs Ց", text: "ծ ձ ց ծ ձ ց ծ ձ ց ծ ձ ց ծ ձ ց" },
            { name: "Voiceless Ծ [ts]", text: "ծա ծե ծի ծո ծու ծած ծիծ ծոծ" },
            { name: "Voiced Ձ [dz]", text: "ձա ձե ձի ձո ձու ձաձ ձիձ ձոձ" },
            { name: "Aspirated Ց [tsʰ]", text: "ցա ցե ցի ցո ցու ցած ցից ցոց" },
            { name: "Alternating 1", text: "ծա ձա ցա ծե ձե ցե ծի ձի ցի" },
            { name: "Alternating 2", text: "ծձ ձծ ծց ցծ ձց ցձ ծձց ցձծ" },
            { name: "Mixed Practice", text: "ծած ձաձ ցած ծաձ ձած ցաձ ծաց ձաց" },
            { name: "Word Patterns", text: "ծով ձայն ցանց ծառ ձեռք ցավ" },
        ],
    },
    {
        title: "Lesson 66",
        description: "R Sounds - Strong [r] vs Soft [ɾ]",
        exercises: [
            { name: "Ռ vs Ր", text: "ռ ր ռ ր ռ ր ռ ր ռ ր ռ ր ռ ր" },
            { name: "Strong Ռ [r]", text: "ռա ռե ռի ռո ռու ռառ ռիռ ռոռ" },
            { name: "Soft Ր [ɾ]", text: "րա րե րի րո րու րառ րիր րոր" },
            { name: "Alternating 1", text: "ռա րա ռե րե ռի րի ռո րո ռու րու" },
            { name: "Alternating 2", text: "ռր րռ ռար րառ ռեր րեռ" },
            { name: "Word Initial", text: "ռուս րոպե ռադիո րաստ" },
            { name: "Word Middle", text: "առու աւոր բառ կերպ կառք" },
            { name: "Mixed Practice", text: "ռ ր ռա րա ռար րառ առ եռ իռ որ" },
        ],
    },
    {
        title: "Lesson 67",
        description: "S/Z/SH/ZH Family - Sibilants [s], [z], [ʃ], [ʒ]",
        exercises: [
            {
                name: "Ս vs Զ vs Շ vs Ժ",
                text: "ս զ շ ժ ս զ շ ժ ս զ շ ժ ս զ շ ժ",
            },
            { name: "Ս [s] Practice", text: "սա սե սի սո սու սաս սիս սոս" },
            { name: "Զ [z] Practice", text: "զա զե զի զո զու զազ զիզ զոզ" },
            { name: "Շ [ʃ] Practice", text: "շա շե շի շո շու շաշ շիշ շոշ" },
            { name: "Ժ [ʒ] Practice", text: "ժա ժե ժի ժո ժու ժաժ ժիժ ժոժ" },
            { name: "S vs Z", text: "սա զա սե զե սի զի սո զո սազ զաս" },
            { name: "SH vs ZH", text: "շա ժա շե ժե շի ժի շո ժո շաժ ժաշ" },
            { name: "All Four", text: "ս զ շ ժ սազ զաշ շաժ ժաս սզշժ" },
            { name: "Word Practice", text: "սար զար շար ժամ սեր զեն շենք ժող" },
        ],
    },
    {
        title: "Lesson 68",
        description: "V/W/Y Family - Approximants [v], [w], [j]",
        exercises: [
            { name: "Վ vs Ւ vs Յ", text: "վ ւ յ վ ւ յ վ ւ յ վ ւ յ վ ւ յ" },
            { name: "Վ [v] Practice", text: "վա վե վի վո վու վավ վիվ վով" },
            { name: "Ւ [w] Practice", text: "ւա ւե ւի ւո ւու ւաւ ւիւ ւու" },
            { name: "Յ [j] Practice", text: "յա յե յի յո յու յայ յիյ յոյ" },
            { name: "V vs W", text: "վա ւա վե ւե վի ւի վաւ ւավ" },
            { name: "V vs Y", text: "վա յա վե յե վի յի վայ յավ" },
            { name: "W vs Y", text: "ւա յա ւե յե ւի յի ւայ յաւ" },
            { name: "All Three", text: "վ ւ յ վաւ ւայ յավ վւյ յւվ" },
            { name: "Word Practice", text: "վար ւեց յար վերք ւու յուր" },
        ],
    },
    {
        title: "Lesson 69",
        description: "Mixed Similar Sounds - Comprehensive Review",
        exercises: [
            {
                name: "B/P/Pʰ Review",
                text: "բ պ փ բապ պաբ փաբ բափ պափ բպփ",
            },
            {
                name: "G/K/Kʰ Review",
                text: "գ կ ք գակ կագ քագ գաք կաք գկք",
            },
            {
                name: "D/T/Tʰ Review",
                text: "դ տ թ դատ տադ թադ դաթ տաթ դտթ",
            },
            {
                name: "TS Family Review",
                text: "ծ ձ ց ծաձ ձած ցաձ ծաց ձաց ծձց",
            },
            { name: "R Sounds Review", text: "ռ ր ռար րառ առ եռ իռ որ ռր" },
            {
                name: "Sibilants Review",
                text: "ս զ շ ժ սազ զաշ շաժ ժաս սզշժ",
            },
            {
                name: "Approximants Review",
                text: "վ ւ յ վաւ ւայ յավ վւյ յւվ",
            },
            {
                name: "All Similar Sounds",
                text: "բպփ գկք դտթ ծձց ռր սզշժ վւյ",
            },
        ],
    },
    {
        title: "Lesson 70",
        description: "Advanced Similar Sounds - Real Word Practice",
        exercises: [
            {
                name: "B/P/Pʰ Words",
                text: "բան պան փափ բար պար փառք բեր պետ փետուր",
            },
            {
                name: "G/K/Kʰ Words",
                text: "գար կար քար գող կող քոչ գիր կիր քիմ",
            },
            {
                name: "D/T/Tʰ Words",
                text: "դար տար թար դուր տուն թեմա դեղ տեղ թող",
            },
            {
                name: "TS Family Words",
                text: "ծով ձայն ցանց ծառ ձեռք ցավ ծիծ ձի ցեղ",
            },
            {
                name: "R Sounds Words",
                text: "ռուս րոպե բառ կարմ առու գործ եռու հարց",
            },
            {
                name: "Sibilants Words",
                text: "սար զար շար ժամ սեր զեն շենք ժող սիրտ",
            },
            {
                name: "Approximants Words",
                text: "վարդ ւեր յար վեց ւու յուր վայր յոթ",
            },
            {
                name: "Mixed Challenge",
                text: "բառ պահ փառք գար կար քար դեղ տեղ թող",
            },
        ],
    },
    // VISUAL SIMILARITY - Distinguishing Letters by Shape
    {
        title: "Lesson 71",
        description: "Shape Distinction: և vs կ - Similar Curves",
        exercises: [
            { name: "և vs կ", text: "և կ և կ և կ և կ և կ և կ և կ և կ" },
            { name: "և Practice", text: "և և և եև եև եև և ա և ե և ի և օ" },
            { name: "կ Practice", text: "կ կ կ կկ կկ կկ կա կե կի կո կու" },
            { name: "Alternating 1", text: "և կ կ և և կ կ և կ և և կ" },
            { name: "Alternating 2", text: "եև կա եև կե եև կի եև կո" },
            { name: "Mixed Pairs", text: "և կ եևկ կեև եկ կև եևկկ" },
            { name: "In Context", text: "և կա և կես և կար և կու" },
            { name: "Challenge", text: "եևկա կեև եևե կեև եևկեև կեևկ" },
        ],
    },
    {
        title: "Lesson 72",
        description: "Shape Distinction: ւ vs ն vs ե - Tail Variations",
        exercises: [
            { name: "ւ vs ն vs ե", text: "ւ ն ե ւ ն ե ւ ն ե ւ ն ե ւ ն ե" },
            { name: "ւ [w] Practice", text: "ւ ւ ւ աւ եւ իւ օւ ւա ւե ւի" },
            { name: "ն [n] Practice", text: "ն ն ն ան են ին ոն նա նե նի" },
            { name: "ե [e] Practice", text: "ե ե ե ե ա ե ե եի եղ ետ ես" },
            { name: "ւ vs ն", text: "ւ ն ւ ն աւ ան եւ են իւ ին ւն նւ" },
            { name: "ն vs ե", text: "ն ե ն ե ան ե ա են ե ե ին եի նե ե ն" },
            { name: "ւ vs ե", text: "ւ ե ւ ե աւ ե ա եւ ե ե իւ եի ւե եւ" },
            { name: "All Three", text: "ւ ն ե աւ ան ե ա եւն նեւ ւնե" },
        ],
    },
    {
        title: "Lesson 73",
        description: "Shape Distinction: դ vs ն - Hook Orientation",
        exercises: [
            { name: "դ vs ն", text: "դ ն դ ն դ ն դ ն դ ն դ ն դ ն դ ն" },
            { name: "դ [d] Practice", text: "դ դ դ դդ դդ դա դե դի դո դու" },
            { name: "ն [n] Practice", text: "ն ն ն նն նն նա նե նի նո նու" },
            { name: "Alternating 1", text: "դ ն ն դ դ ն ն դ ն դ դ ն" },
            { name: "Alternating 2", text: "դա նա դե նե դի նի դո նո" },
            { name: "Mixed Pairs", text: "դն նդ դան նադ դեն նեդ" },
            { name: "In Words", text: "դուռ նուռ դար նար դեղ նեղ" },
            { name: "Challenge", text: "դնդ նդն դնան նադն դնե նեդն" },
        ],
    },
    {
        title: "Lesson 74",
        description: "Shape Distinction: զ vs գ - Loop Differences",
        exercises: [
            { name: "զ vs գ", text: "զ գ զ գ զ գ զ գ զ գ զ գ զ գ զ գ" },
            { name: "զ [z] Practice", text: "զ զ զ զզ զզ զա զե զի զո զու" },
            { name: "գ [g] Practice", text: "գ գ գ գգ գգ գա գե գի գո գու" },
            { name: "Alternating 1", text: "զ գ գ զ զ գ գ զ գ զ զ գ" },
            { name: "Alternating 2", text: "զա գա զե գե զի գի զո գո" },
            { name: "Mixed Pairs", text: "զգ գզ զագ գազ զեգ գեզ" },
            { name: "In Words", text: "զար գար զեն գեղ զոր գոր" },
            { name: "Challenge", text: "զգզ գզգ զագա գազե զգե գեզգ" },
        ],
    },
    {
        title: "Lesson 75",
        description: "Shape Distinction: ձ vs ծ vs ճ - Similar Rounded Forms",
        exercises: [
            { name: "ձ vs ծ vs ճ", text: "ձ ծ ճ ձ ծ ճ ձ ծ ճ ձ ծ ճ ձ ծ ճ" },
            { name: "ձ [dz] Practice", text: "ձ ձ ձ ձձ ձա ձե ձի ձո ձու" },
            { name: "ծ [ts] Practice", text: "ծ ծ ծ ծծ ծա ծե ծի ծո ծու" },
            { name: "ճ [č] Practice", text: "ճ ճ ճ ճճ ճա ճե ճի ճո ճու" },
            { name: "ձ vs ծ", text: "ձ ծ ձ ծ ձա ծա ձե ծե ձծ ծձ" },
            { name: "ծ vs ճ", text: "ծ ճ ծ ճ ծա ճա ծե ճե ծճ ճծ" },
            { name: "ձ vs ճ", text: "ձ ճ ձ ճ ձա ճա ձե ճե ձճ ճձ" },
            { name: "All Three", text: "ձ ծ ճ ձծճ ճծձ ձաճ ծեձ ճիծ" },
            { name: "Challenge", text: "ձայն ծով ճամ ձեռք ծառ ճանճ" },
        ],
    },
    {
        title: "Lesson 76",
        description: "Shape Distinction: փ vs տ - Top Stroke Differences",
        exercises: [
            { name: "փ vs տ", text: "փ տ փ տ փ տ փ տ փ տ փ տ փ տ փ տ" },
            { name: "փ [pʰ] Practice", text: "փ փ փ փփ փփ փա փե փի փո փու" },
            { name: "տ [t] Practice", text: "տ տ տ տտ տտ տա տե տի տո տու" },
            { name: "Alternating 1", text: "փ տ տ փ փ տ տ փ տ փ փ տ" },
            { name: "Alternating 2", text: "փա տա փե տե փի տի փո տո" },
            { name: "Mixed Pairs", text: "փտ տփ փատ տափ փետ տեփ" },
            { name: "In Words", text: "փող տող փակ տակ փափ տափ" },
            { name: "Challenge", text: "փտփ տփտ փատա տափե փտե տեփտ" },
        ],
    },
    {
        title: "Lesson 77",
        description: "Shape Distinction: ր vs ի - Stroke Direction",
        exercises: [
            { name: "ր vs ի", text: "ր ի ր ի ր ի ր ի ր ի ր ի ր ի ր ի" },
            { name: "ր [r] Practice", text: "ր ր ր րր րր րա րե րի րո րու" },
            { name: "ի [i] Practice", text: "ի ի ի իի իի իա իե ին իմ իր" },
            { name: "Alternating 1", text: "ր ի ի ր ր ի ի ր ի ր ր ի" },
            { name: "Alternating 2", text: "րա իա րե իե րի իր րո իմ" },
            { name: "Mixed Pairs", text: "րի իր րաի իառ րեի իեր" },
            { name: "In Words", text: "րոպե իրոք րաստ իսկ րեց իրի" },
            { name: "Challenge", text: "րիր իրի րաիա իառա րիեի իերի" },
        ],
    },
    {
        title: "Lesson 78",
        description: "Shape Distinction: բ vs ե - Bottom Curve Differences",
        exercises: [
            { name: "բ vs ե", text: "բ ե բ ե բ ե բ ե բ ե բ ե բ ե բ ե" },
            { name: "բ [b] Practice", text: "բ բ բ բբ բբ բա բե բի բո բու" },
            { name: "ե [e] Practice", text: "ե ե ե եե եե եա եղ են ես ետ" },
            { name: "Alternating 1", text: "բ ե ե բ բ ե ե բ ե բ բ ե" },
            { name: "Alternating 2", text: "բա եա բե ես բի եի բո եղ" },
            { name: "Mixed Pairs", text: "բե եբ բաե եաբ բեե եեբ" },
            { name: "In Words", text: "բառ երկ բեմ ենթ բիբ եղծ" },
            { name: "Challenge", text: "բեբ եբե բաեա եաբե բեեբ եբեբ" },
        ],
    },
    {
        title: "Lesson 79",
        description: "Shape Distinction: հ vs ղ - Stem Variations",
        exercises: [
            { name: "հ vs ղ", text: "հ ղ հ ղ հ ղ հ ղ հ ղ հ ղ հ ղ հ ղ" },
            { name: "հ [h] Practice", text: "հ հ հ հհ հհ հա հե հի հո հու" },
            { name: "ղ [ł] Practice", text: "ղ ղ ղ ղղ ղղ ղա ղե ղի ղո ղու" },
            { name: "Alternating 1", text: "հ ղ ղ հ հ ղ ղ հ ղ հ հ ղ" },
            { name: "Alternating 2", text: "հա ղա հե ղե հի ղի հո ղո" },
            { name: "Mixed Pairs", text: "հղ ղհ հաղ ղահ հեղ ղեհ" },
            { name: "In Words", text: "հայ ղազ հեղ ղեկ հիմ ղիկ" },
            { name: "Challenge", text: "հղհ ղհղ հաղա ղահե հղե ղեհղ" },
        ],
    },
    {
        title: "Lesson 80",
        description: "Mixed Visual Confusion - Comprehensive Shape Practice",
        exercises: [
            {
                name: "և vs կ Review",
                text: "և կ եևկ կեև և կե կև եև կեևկ",
            },
            {
                name: "ւ vs ն vs ե Review",
                text: "ւ ն ե աւ ան եա եւն նեւ ւնե",
            },
            { name: "դ vs ն Review", text: "դ ն դան նադ դեն նեդ դնդ նդն" },
            { name: "զ vs գ Review", text: "զ գ զագ գազ զեգ գեզ զգզ գզգ" },
            {
                name: "ձ vs ծ vs ճ Review",
                text: "ձ ծ ճ ձծճ ճծձ ձայն ծով ճամ",
            },
            { name: "փ vs տ Review", text: "փ տ փատ տափ փետ տեփ փտփ տփտ" },
            { name: "ր vs ի Review", text: "ր ի րիր իրի րաիա իառա րեի իեր" },
            {
                name: "All Shapes Mix",
                text: "և կ ւ ն ե դ զ գ ձ ծ ճ փ տ ր ի բ հ ղ",
            },
            {
                name: "Ultimate Challenge",
                text: "եևկ ւնե դն զգ ձծճ փտ րի բե հղ եևկւնեդ",
            },
        ],
    },
];
