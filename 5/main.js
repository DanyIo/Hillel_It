for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}

let number = +prompt("Введіть число для преревірки на простоту.");

function isPrime(number) {
  if (number <= 0 || number == 1) {
    return false;
  }
  let i = 2;
  while (i <= number ** 0.5) {
    if (number % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

isPrime(number)
  ? console.log("Number is prime.")
  : console.log("Number isn't prime.");

const purchaseamount = +prompt("Введіть суму покупки.");

if (purchaseamount <= 100) {
  console.log("Ur discount = 3%");
}
if (100 < purchaseamount && purchaseamount < 200) {
  console.log("Ur discount = 5%");
}
if (purchaseamount >= 200) {
  console.log("Ur discount = 7%");
}

for (j = 2; j < 10; j++) {
  for (n = 1; n < 11; n++) {
    console.log(`${j} * ${n} = ${j * n}`);
  }
}
const dollar_uan = 36.76;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} USD = ${+(i * dollar_uan).toFixed(1)} UAH`);
}

let arrayofnumbers = [];
while (arrayofnumbers.length != 15) {
  let num = +prompt(`Введіть число ${arrayofnumbers.length}/15.`);
  arrayofnumbers.push(num);
}
let positivenumbers = 0;
let negativenumber = 0;
let zero = 0;
for (let number in arrayofnumbers) {
  if (arrayofnumbers[number] < 0) {
    negativenumber++;
  }
  if (arrayofnumbers[number] == 0) {
    zero++;
  }
  if (arrayofnumbers[number] > 0) {
    positivenumbers++;
  }
}
console.log(
  `Ви ввели ${positivenumbers} додатніх числа(сел), ${negativenumber} від'ємних числа(сел) та ${zero} нуля(ів).`
);
