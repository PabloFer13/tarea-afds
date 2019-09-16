//  {a}+

let terminalL4 = false;

const errorState = () => {
  terminalL4 = false;
  return errorState;
}

const aState = w => {
  if (w === 'a') {
    terminalL4 = true;
    return aState;
  }

  return errorState();
}

const inicial = w => w === 'a' ? aState(w) : errorState;

function validateWord(word) {
  let next = inicial;
  terminalL4 = false;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL4;
}

export default validateWord;
