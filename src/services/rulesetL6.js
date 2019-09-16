// {w| |w|a >= 3}

let terminalL6 = false;

const aState = () => {
  terminalL6 = true;
  return aState;
}

const cState = w => w === 'a' ? aState() : cState;

const bState = w => w === 'a' ? cState : bState;

const inicial = w => w === 'a' ? bState : inicial;

function validateWord(word) {
  terminalL6 = false;
  let next = inicial;
  for (let i = 0; i < word.length; i++) {
    next = next(word[i]);
  }

  return terminalL6;
}

export default validateWord;
