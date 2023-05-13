export default {
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
    deviceinformation: "",
  },
  theme: "light", // molokai(dark) | classic(light) light (3 levels of darkness & lightness)
  language: "english", // english | hindi | bengali | arabic | russian
  dynamicsettingchange: true, // apply settings instantly without restart test
  cpm: false, // use cpm instead of wpm
  usefloats: false,
  oppositeshift: false, // ignore B, Y, ^
  underline: false, // underline active word
  endwithspace: false, // test ends only after typing a space after last word
  inputvisibility: "hidden", // hidden | visible
  caret: {
    off: false,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> alpha's value in rgba
  },
  pacecaret: {
    off: true,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> alpha's value in rgba
  },
  fliphighlightcolor: false, // by default, future text is brighter than the already typed text
  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
  },
  backspace: {
    off: false,
    modifier: {
       alt: true,
      ctrl: true,
      meta: false,
    },
  },
  confidence: 1, // low(1) | high(2) | max(3)
  difficulty: 1, // beginner(1) | expert(2) | master(3)
  error: {
    off: false, // if true, then no errors or incorrect words are highlighted (blind mode)
    insert: true,
    replace: false,
    forgive: true,
    stop: {
      word: false,
      letter: false,
    },
  },
  text: {
    primarytextcolor: "",
    secondarytextcolor: "",
    textsize: 1.2,
    textweight: 445,
    whitespace: {
      off: false,
      type: "space", // off | bullet | bar | space
      value: "&nbsp;", // '⸱', '&nbsp', '␣'
    },
    word: {
      type: "dictionary", // dictionary | rootwords | lorem epsum | quote | story
      length: "medium", // small(<5) | medium(>=5, <8), | large(>=8, <13) | extra large(>=13)
      count: 25, // 25 | 50 | 100 | infinite | custom
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
  warnings: {
    capslock: true,
    outoffocus: true,
    numlock: true,
    scrolllock: true,
  },
  keyboard: {
    reaction: "off", // off | static | react | next
    layout: "qwerty", // qwerty | dvorak | workman | colemak
    emulate: false,
  },
  showlive: {
    timer: false,
    speed: false,
    accuracy: false,
    burst: false, // speed burst of last word typed (wpm/cpm)
  },
  practice: {
    off: true,
    guided_lessions: false,
    providetext: false,
    numpad: false, // number pad digits and arithmetic operations with expression
    numrow: false, // number row digits
    alphanumeric: false, // ascii characters only
    brackets: false, // {[(<>)]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    specials: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  },
};

// user data
const user = {
  firstname: "",
  middlename: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  rank: "", // wpm percentile
  skill_level: "",
  experience_level: "",
  avg_speed: "",
  avg_accuracy: "",
  total_tests_started: "",
  total_tests_completed: "",
  hours_spend_typing: "",
  practice_calender: "",
  key_frequency_heatmap: "",
  country: "",
  best: "", // typing speed (wpm)
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    reddit: "",
    discord: "",
    twitch: "",
    youtube: "",
  },
}

/* ===================== DETAILS ===================== *

difficulty
	- beginner is the classic type test experience.
	- expert fails the test if you submit (press space) an incorrect word.
	- master fails if you press a single incorrect key (100% accuracy).

stoponerror
	- off, will not stop on errors
	- letter, will stop input when pressing any incorrect letters.
	- word, will not allow you to continue to the next word until you correct all mistakes.

confidence
	- low, default behaviour, can go back as much as user wants to correct mistakes
	- high, will not be able to go back to previous words to fix mistakes, but 
	  current word errors can be fixed by using backspace
	- max, won't be able to backspace at all i.e, backspacing will be turned of (backspace.off = true)

* ====================================================== */