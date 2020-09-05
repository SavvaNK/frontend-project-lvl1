export const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const isEven = (num) => num % 2 === 0;

const number = generateRandomInt(0, 100);

console.log(`Answer "yes" if the number is even, otherwise answer "no".
Question: ${number}`);
