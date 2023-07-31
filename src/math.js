export const addNumber = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

export const subtractNumber = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

export const multiplyNumber = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

export const divideNumber = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    throw new Error('Division by zero is not allowed');
  }

  return firstNumber / secondNumber;
};

export const moduloNumber = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return firstNumber % secondNumber;
};
