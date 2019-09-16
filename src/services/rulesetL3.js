//  {a}*

let terminalL3 = true;

const errorState = () => {
  terminalL3 = false;
  return errorState;
}

const inicial = w => {
  if (w === 'a') {
    terminalL3 = true;
    return inicial;
  }

  return errorState();
}

function validateWord(word) {
  terminalL3 = true;
  let next = inicial;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL3;
}

export default validateWord;
