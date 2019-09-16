// { abba }

let terminalL1 = false;

const errorState = () => {
  terminalL1 = false;
  return errorState;
}

const eState = () => {
  terminalL1 = true;
  return errorState;
}

const dState = w => w === 'a' ? eState() : errorState;

const cState = w => w === 'b' ? dState : errorState;

const aState = w => w === 'b' ? cState : errorState;

const inicial = w => w === 'a' ? aState : errorState;

function validateWord(word) {
  terminalL1 = false;
  let next = inicial;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL1;
}

export default validateWord;
