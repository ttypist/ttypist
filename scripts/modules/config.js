import * as Constants from "./constants.js";

const config = {
  
  startedtyping: false,
  capslock: false,
  outoffocus: false,
  instantdeath: false, // fails the test if user presses a single incorrect key
  fliptestcolor: false, // brightness of typed text and future text
  highlight: "word", // off, letter, word
  deletion: true, // backspace | opt/alt/ctrl + backspace | meta + backspace

  sound: {
    play: "off", // off, nk creams, typewriter, hitmarker
    onerror: false,
  },

  error: {
    insert: false,
    forgive: true,
  },

  caret: {
    type: "line", // off, line, underline, box, block
    blink: true,
    smooth: false,
  },
  
  sentence: {
    whitespace: Constants.whitespace.space, // space/dot
    word: {
      length: "mix", // small(<5) | medium(>5, <8) | long(>8) | mix
      count: 15,
    },
    include: {
      digits: false, // include digits along with words
      punctuations: false, // include punctuation marks along with words
    },
    font: {
      size: "1.4rem",
      weight: "400",
      family: "Roboto Mono, monospace",
    },
  },
  
  keyboard: {
    layout: "qwerty", // keyboard layout
    emulate: false, // emulate means mapping evt.code value with the corresponding key value in the respective keyboard layout
    language: "english",
  },
  
  live: {
    stats: false, // show wpm/cpm and accuracy on every keystroke
    timer: true, // live timer for timed tests
    keyboard: true, // static, react, next
  },

  practice: {
    customtext: false, // custom text provided by user
    guidedlessions: false,
    alphanumeric: false, // ascii characters only

    numrow: false, // number row digits and symbols
    numpad: false, // number pad digits and arithmetic operations with expression
    
    brackets: false, // {[()]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  },
};

export default config;