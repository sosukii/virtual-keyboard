const bodyEl = document.querySelector('body');
let wrapperEL;
let keyBoardEl;
let areaEL;

let eng;
let cursorPosition = 0;
let isCtrlPressed = false;
let isCapsPressed = false;
let isShiftPressed = false;

const arr = [
  {
    code: 'Backquote',
    keyEN: '`',
    keyRU: 'ё',
    shiftEN: '~',
    shiftRU: 'Ё',
    keyCode: 192,
  },
  {
    code: 'Digit1', keyEN: '1', shiftEN: '!', shiftRU: '!', keyCode: 49,
  },
  {
    code: 'Digit2', keyEN: '2', shiftEN: '@', shiftRU: '"', keyCode: 50,
  },
  {
    code: 'Digit3', keyEN: '3', shiftEN: '#', shiftRU: '№', keyCode: 51,
  },
  {
    code: 'Digit4', keyEN: '4', shiftEN: '$', shiftRU: ';', keyCode: 52,
  },
  {
    code: 'Digit5', keyEN: '5', shiftEN: '%', shiftRU: '%', keyCode: 53,
  },
  {
    code: 'Digit6', keyEN: '6', shiftEN: '^', shiftRU: ':', keyCode: 54,
  },
  {
    code: 'Digit7', keyEN: '7', shiftEN: '&', shiftRU: '?', keyCode: 55,
  },
  {
    code: 'Digit8', keyEN: '8', shiftEN: '*', shiftRU: '*', keyCode: 56,
  },
  {
    code: 'Digit9', keyEN: '9', shiftEN: '(', shiftRU: '(', keyCode: 57,
  },
  {
    code: 'Digit0', keyEN: '0', shiftEN: ')', shiftRU: ')', keyCode: 48,
  },
  {
    code: 'Minus', keyEN: '-', shiftEN: '_', shiftRU: '_', keyCode: 189,
  },
  {
    code: 'Equal', keyEN: '=', shiftEN: '+', shiftRU: '+', keyCode: 187,
  },
  { code: 'Backspace', keyEN: 'Backspace', keyCode: 8 },
  { code: 'Tab', keyEN: 'Tab', keyCode: 9 },
  {
    code: 'KeyQ', keyEN: 'q', keyRU: 'й', shiftEN: 'Q', shiftRU: 'Й', keyCode: 81,
  },
  {
    code: 'KeyW', keyEN: 'w', keyRU: 'ц', shiftEN: 'W', shiftRU: 'Ц', keyCode: 87,
  },
  {
    code: 'KeyE', keyEN: 'e', keyRU: 'у', shiftEN: 'E', shiftRU: 'У', keyCode: 69,
  },
  {
    code: 'KeyR', keyEN: 'r', keyRU: 'к', shiftEN: 'R', shiftRU: 'К', keyCode: 82,
  },
  {
    code: 'KeyT', keyEN: 't', keyRU: 'е', shiftEN: 'T', shiftRU: 'Е', keyCode: 84,
  },
  {
    code: 'KeyY', keyEN: 'y', keyRU: 'н', shiftEN: 'Y', shiftRU: 'Н', keyCode: 89,
  },
  {
    code: 'KeyU', keyEN: 'u', keyRU: 'г', shiftEN: 'U', shiftRU: 'Г', keyCode: 85,
  },
  {
    code: 'KeyI', keyEN: 'i', keyRU: 'ш', shiftEN: 'I', shiftRU: 'Ш', keyCode: 73,
  },
  {
    code: 'KeyO', keyEN: 'o', keyRU: 'щ', shiftEN: 'O', shiftRU: 'Щ', keyCode: 79,
  },
  {
    code: 'KeyP', keyEN: 'p', keyRU: 'з', shiftEN: 'P', shiftRU: 'З', keyCode: 80,
  },
  {
    code: 'BracketLeft', keyEN: '[', keyRU: 'х', shiftEN: '{', shiftRU: 'Х', keyCode: 219,
  },
  {
    code: 'BracketRight', keyEN: ']', keyRU: 'ъ', shiftEN: '}', shiftRU: 'Ъ', keyCode: 221,
  },
  {
    code: 'Backslash', keyEN: '\\', shiftEN: '|', shiftRU: '/', keyCode: 220,
  },
  { code: 'CapsLock', keyEN: 'Caps', keyCode: 20 },
  {
    code: 'KeyA', keyEN: 'a', keyRU: 'ф', shiftEN: 'A', shiftRU: 'Ф', keyCode: 65,
  },
  {
    code: 'KeyS', keyEN: 's', keyRU: 'ы', shiftEN: 'S', shiftRU: 'Ы', keyCode: 83,
  },
  {
    code: 'KeyD', keyEN: 'd', keyRU: 'в', shiftEN: 'D', shiftRU: 'В', keyCode: 68,
  },
  {
    code: 'KeyF', keyEN: 'f', keyRU: 'а', shiftEN: 'F', shiftRU: 'А', keyCode: 70,
  },
  {
    code: 'KeyG', keyEN: 'g', keyRU: 'п', shiftEN: 'G', shiftRU: 'П', keyCode: 71,
  },
  {
    code: 'KeyH', keyEN: 'h', keyRU: 'р', shiftEN: 'H', shiftRU: 'Р', keyCode: 72,
  },
  {
    code: 'KeyJ', keyEN: 'j', keyRU: 'о', shiftEN: 'J', shiftRU: 'О', keyCode: 74,
  },
  {
    code: 'KeyK', keyEN: 'k', keyRU: 'л', shiftEN: 'K', shiftRU: 'Л', keyCode: 75,
  },
  {
    code: 'KeyL', keyEN: 'l', keyRU: 'д', shiftEN: 'L', shiftRU: 'Д', keyCode: 76,
  },
  {
    code: 'Semicolon', keyEN: ';', keyRU: 'ж', shiftEN: ':', shiftRU: 'Ж', keyCode: 186,
  },
  {
    code: 'Quote', keyEN: "'", keyRU: 'э', shiftEN: '"', shiftRU: 'Э', keyCode: 222,
  },
  { code: 'Enter', keyEN: 'Enter', keyCode: 13 },
  { code: 'ShiftLeft', keyEN: 'Shift', keyCode: 16 },
  {
    code: 'KeyZ', keyEN: 'z', keyRU: 'я', shiftEN: 'Z', shiftRU: 'Я', keyCode: 90,
  },
  {
    code: 'KeyX', keyEN: 'x', keyRU: 'ч', shiftEN: 'X', shiftRU: 'Ч', keyCode: 88,
  },
  {
    code: 'KeyC', keyEN: 'c', keyRU: 'с', shiftEN: 'C', shiftRU: 'С', keyCode: 67,
  },
  {
    code: 'KeyV', keyEN: 'v', keyRU: 'м', shiftEN: 'V', shiftRU: 'М', keyCode: 86,
  },
  {
    code: 'KeyB', keyEN: 'b', keyRU: 'и', shiftEN: 'B', shiftRU: 'И', keyCode: 66,
  },
  {
    code: 'KeyN', keyEN: 'n', keyRU: 'т', shiftEN: 'N', shiftRU: 'Т', keyCode: 78,
  },
  {
    code: 'KeyM', keyEN: 'm', keyRU: 'ь', shiftEN: 'M', shiftRU: 'Ь', keyCode: 77,
  },
  {
    code: 'Comma', keyEN: ',', keyRU: 'б', shiftEN: '<', shiftRU: 'Б', keyCode: 188,
  },
  {
    code: 'Period', keyEN: '.', keyRU: 'ю', shiftEN: '>', shiftRU: 'Ю', keyCode: 190,
  },
  {
    code: 'Slash', keyEN: '/', keyRU: '.', shiftEN: '?', shiftRU: ',', keyCode: 191,
  },
  { code: 'ArrowUp', keyEN: '▲', keyCode: 38 },
  { code: 'ShiftRight', keyEN: 'Shift', keyCode: 16 },
  { code: 'ControlLeft', keyEN: 'Ctrl', keyCode: 17 },
  { code: 'MetaLeft', keyEN: 'Win', keyCode: 91 },
  { code: 'AltLeft', keyEN: 'Alt', keyCode: 18 },
  { code: 'Space', keyEN: ' ', keyCode: 32 },
  { code: 'AltRight', keyEN: 'Alt', keyCode: 18 },
  { code: 'ArrowLeft', keyEN: '◀', keyCode: 37 },
  { code: 'ArrowDown', keyEN: '▼', keyCode: 40 },
  { code: 'ArrowRight', keyEN: '▶', keyCode: 39 },
  { code: 'ControlRight', keyEN: 'Ctrl', keyCode: 17 },
];
const indexesOfDynamicKey = [
  0, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 29,
  30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 42, 43, 44, 45,
  46, 47, 48, 49, 50, 51,
];
const notPrintableKeys = [
  13, 28, 41, 53, 54, 55, 56, 58, 62,
];

function setLocalStorage() {
  localStorage.setItem('eng', eng);
}
function getLocalStorage() {
  if (localStorage.getItem('eng')) {
    eng = localStorage.getItem('eng');
  } else {
    eng = true;
  }
}
getLocalStorage();

function renderWrapper() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  bodyEl.appendChild(wrapper);
  wrapperEL = wrapper;
}
renderWrapper();
function renderKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  arr.forEach((e) => {
    const button = document.createElement('button');
    button.classList.add('keyboard__btn');
    const is2fr = e.keyCode === 8
      || e.keyCode === 9
      || e.keyCode === 13
      || e.keyCode === 16
      || e.keyCode === 20;

    if (is2fr) {
      button.style.width = '75px';
      button.style.gridColumn = 'span 2';
    }
    if (e.code === 'Space') {
      button.style.flexGrow = 1;
    }

    if (eng === 'true') {
      button.innerHTML = e.keyEN;
    } else {
      button.innerHTML = e.keyRU ? e.keyRU : e.keyEN;
    }

    button.setAttribute('code', e.code);
    keyboard.appendChild(button);
  });

  wrapperEL.appendChild(keyboard);
  keyBoardEl = keyboard;
}
renderKeyboard();
function returnPressedElement(event) {
  const buttons = document.querySelectorAll('.keyboard__btn');
  let pressedKey;
  const eventCode = event.code ? event.code : event.target.getAttribute('code');

  arr.forEach((e) => {
    if (e.code === eventCode) {
      const indexPressedBtn = arr.indexOf(e);
      pressedKey = buttons[indexPressedBtn];
    }
  });

  return pressedKey;
}

function removeCharacter() {
  const firstPart = areaEL.value.substring(0, cursorPosition - 1);
  const secondPart = areaEL.value.slice(cursorPosition);
  areaEL.value = firstPart.concat(secondPart);
}

function goOnNewLine() {
  const firstPart = areaEL.value.substring(0, cursorPosition - 1).concat('\n');
  const secondPart = areaEL.value.slice(cursorPosition - 1);
  areaEL.value = firstPart.concat(secondPart);
}
function print(event) {
  const buttons = document.querySelectorAll('.keyboard__btn');
  let pressedKey;
  let pressedKeyIndex;
  const eventCode = event.code ? event.code : event.target.getAttribute('code');

  arr.forEach((e) => {
    if (e.code === eventCode) {
      pressedKeyIndex = arr.indexOf(e);
      pressedKey = buttons[pressedKeyIndex];
    }
  });

  const shouldUseInnerText = pressedKey.getAttribute('code') === 'Digit7'
                          || pressedKey.getAttribute('code') === 'Comma'
                          || pressedKey.getAttribute('code') === 'Period';

  const shouldUseTextContent = pressedKey.getAttribute('code') === 'ArrowUp'
                          || pressedKey.getAttribute('code') === 'ArrowDown'
                          || pressedKey.getAttribute('code') === 'ArrowLeft'
                          || pressedKey.getAttribute('code') === 'ArrowRight';

  const shouldNewLine = pressedKey.getAttribute('code') === 'Enter';

  const isTabBtn = pressedKey.getAttribute('code') === 'Tab';

  if (!notPrintableKeys.includes(pressedKeyIndex)) {
    cursorPosition += 1;
    const firstPart = areaEL.value.substring(0, cursorPosition - 1).concat();
    const secondPart = areaEL.value.slice(cursorPosition - 1);

    if (isTabBtn) {
      areaEL.value = firstPart.concat('    ').concat(secondPart);
      cursorPosition += 3;
    } else if (isCapsPressed) {
      areaEL.value = firstPart.concat(pressedKey.innerHTML.toUpperCase()).concat(secondPart);
    } else if (shouldUseInnerText) {
      areaEL.value = firstPart.concat(pressedKey.innerText).concat(secondPart);
    } else if (shouldUseTextContent) {
      areaEL.value = firstPart.concat(pressedKey.textContent).concat(secondPart);
    } else if (shouldNewLine) {
      goOnNewLine();
    } else {
      areaEL.value = firstPart.concat(pressedKey.innerHTML).concat(secondPart);
    }
  }
  areaEL.selectionStart = cursorPosition;
  areaEL.selectionEnd = cursorPosition;
}

function handler(e) {
  const isClick = e.type === 'mousedown' || e.type === 'mouseup';
  const isKey = e.srcElement.className.includes('keyboard__btn');
  const isRemoveBtn = e.code === 'Backspace' || e.target.innerHTML === 'Backspace';
  const isCapsBtn = e.code === 'CapsLock';
  const isShiftBtn = e.code === 'ShiftLeft' || e.code === 'ShiftRight';
  const isAltPressed = e.code === 'AltLeft' || e.code === 'AltRight';

  if (isClick && !isKey) return;

  e.preventDefault();

  if (e.type === 'keydown' || e.type === 'mousedown') {
    if (isRemoveBtn) {
      removeCharacter();
      cursorPosition -= 1;
    }

    // show shift values -----------------------------------------
    if (isShiftBtn && !isShiftPressed) {
      isShiftPressed = true;
      const buttons = document.querySelectorAll('.keyboard__btn');

      // менять иннерХТМЛ кнопки на англшифт или русшифт
      if (eng === 'true') {
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].shiftEN) {
            buttons[i].innerHTML = arr[i].shiftEN;
          }
        }
      } else {
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].shiftRU) {
            buttons[i].innerHTML = arr[i].shiftRU;
          }
        }
      }
    }
    // show shift values -----------------------------------------

    if (e.code === 'ControlLeft' && !isCtrlPressed) {
      isCtrlPressed = true;
    }

    // change language --------------------------------------------
    if (isCtrlPressed && isAltPressed) {
      const buttons = document.querySelectorAll('.keyboard__btn');

      if (eng === 'true') {
        indexesOfDynamicKey.forEach((i) => {
          buttons[i].innerHTML = arr[i].keyRU;
        });
        eng = 'false';
        setLocalStorage();
      } else {
        indexesOfDynamicKey.forEach((i) => {
          buttons[i].innerHTML = arr[i].keyEN;
        });
        eng = 'true';
        setLocalStorage();
      }
    }
    // change language --------------------------------------------

    if (isCapsBtn) {
      if (isCapsPressed === true) {
        isCapsPressed = false;
      } else {
        isCapsPressed = true;
      }
    }

    const keyPressed = returnPressedElement(e);
    keyPressed.classList.add('keyboard__btn_pressed');
  }
  if (e.type === 'keyup' || e.type === 'mouseup') {
    if (e.code === 'ControlLeft') {
      isCtrlPressed = false;
    }
    if (isShiftBtn) {
      isShiftPressed = false;
      const buttons = document.querySelectorAll('.keyboard__btn');

      if (eng === 'true') {
        for (let i = 0; i < arr.length; i += 1) {
          buttons[i].innerHTML = arr[i].keyEN;
        }
      } else {
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].keyRU) {
            buttons[i].innerHTML = arr[i].keyRU;
          } else {
            buttons[i].innerHTML = arr[i].keyEN;
          }
        }
      }
    }
    const keyPressed = returnPressedElement(e);
    keyPressed.classList.remove('keyboard__btn_pressed');
    print(e);
  }
}

function renderInstruction() {
  const text = document.createElement('p');
  text.textContent = 'Переключить язык: левые Ctrl + Alt. ОС разработчика: windows.';
  text.classList.add('instruction');

  wrapperEL.appendChild(text);
}
renderInstruction();

function renderTextarea() {
  const area = document.createElement('textarea');
  area.classList.add('area');
  wrapperEL.prepend(area);
  areaEL = area;
}
renderTextarea();

function setCursor() {
  cursorPosition = areaEL.selectionStart;
}

document.addEventListener('keydown', handler);
document.addEventListener('keyup', handler);
keyBoardEl.addEventListener('mousedown', handler);
keyBoardEl.addEventListener('mouseup', handler);
areaEL.addEventListener('mouseup', setCursor);
