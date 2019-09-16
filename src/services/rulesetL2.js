// { abba, ababba }

let terminalL2 = false;

const errorState = () => {
  terminalL2 = false;
  return errorState;
}


const aState = () => {
  terminalL2 = true;
  return errorState;
}

const dState = w => w === 'a' ? aState() : errorState;

const fState = w => w === 'b' ? dState : errorState;

const eState = w => w === 'b' ? fState : errorState;

const cState = w => w === 'b' ? dState : eState;

const bState = w => w === 'b' ? cState : errorState;

const inicial = w => w === 'a' ? bState : errorState;

function validateWord(word) {
  terminalL2 = false;
  let next = inicial;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL2;
}

export default validateWord;
