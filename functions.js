function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getAlphabetIndex(letter) {
  const lowerLetter = letter.toLowerCase();
  const index = alphabet.indexOf(lowerLetter);
  return index !== -1 ? index + 1 : -1;
}

function caesarCipher(string, num) {
  let splitString = string.split('');
  let result = [];

  splitString.forEach(char => {
    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      let lowerChar = char.toLowerCase();
      let currentIndex = alphabet.indexOf(lowerChar);
      
      // Shift the index by num and handle wrapping using modulo
      let newIndex = (currentIndex + num) % alphabet.length;
      
      // Ensure that the index stays positive
      if (newIndex < 0) newIndex += alphabet.length;
      
      // Find the new character
      let newChar = alphabet[newIndex];

      // Maintain the case of the original letter
      result.push(char === char.toUpperCase() ? newChar.toUpperCase() : newChar);
    } else {

      // If not a letter, just add it to the result as it is
      result.push(char);
    }
  });

  // Join the array of characters back into a string
  return result.join('');
}

const analyzeArray = (array) => {
    const average = array.reduce((a, b) => a + b, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
    return { average, min, max, length };
}



module.exports = {
    capitalize,
    reverseString,
    calculator,
    getAlphabetIndex,
    caesarCipher,
    analyzeArray
};