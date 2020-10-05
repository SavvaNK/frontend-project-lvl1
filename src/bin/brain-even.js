import readlineSync from 'readline-sync';

export const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const isEven = (num) => num % 2 === 0;

const numOfTries = 3;

for (let i = numOfTries; i > 0; i -= 1) {
  const number = generateRandomInt(0, 100);

  const rightAnswer = isEven(number) ? 'yes' : 'no';

  const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${number}\nYour answer: `);

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log("Let's try again, $userName!");
    break;
  }

  if (i === 1) {
    console.log('Congratulations, $userName!');
  }
}
