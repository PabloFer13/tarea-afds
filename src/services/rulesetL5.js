// {w| |w| >= 3}

let terminalL5 = false;

const aState = () => {
  terminalL5 = true;
  return aState;
}

const cState = () => aState();

const bState = () => cState;

const inicial = () => bState;

function validateWord(word) {
  terminalL5 = false;
  let next = inicial;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL5;
}

export default validateWord;
