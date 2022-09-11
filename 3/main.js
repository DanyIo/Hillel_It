const UsersName = prompt("Яке Ваше імʼя?");
const UsersSurname = prompt("Яке Ваше прізвище?");
const UsersFavoriteNumber = prompt("Яке Ваше улюблене число?");
console.log(
  `Вітаю, ${UsersName} ${UsersSurname}. Ваше улюблене число - ${UsersFavoriteNumber}.`
);
const FirstNumber = prompt("Введіть перше число.");
const SecondNumber = prompt("Введіть друге число.");
console.log(
  `${FirstNumber} + ${SecondNumber} = ${
    Number(FirstNumber) + Number(SecondNumber)
  }`
);
console.log(`${FirstNumber} - ${SecondNumber} = ${FirstNumber - SecondNumber}`);
console.log(`${FirstNumber} * ${SecondNumber} = ${FirstNumber * SecondNumber}`);
console.log(`${FirstNumber} / ${SecondNumber} = ${FirstNumber / SecondNumber}`);
console.log(
  `Остача від ділення числа ${FirstNumber} від числа ${SecondNumber} рівна ${
    FirstNumber % SecondNumber
  }`
);
const UsersDateOfBirth = prompt("В якому році Ви народились?");
const UsersAge = 2022 - UsersDateOfBirth;
console.log(`Вам ${UsersAge} років.`);
const number = prompt("Введіть число для провірки на парність.");

if (number % 2 == 0) {
  console.log(`Число ${number} є парним.`);
} else {
  console.log(`Число ${number} є непарним.`);
}
