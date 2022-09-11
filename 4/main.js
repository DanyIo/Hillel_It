const sum = 0.1 + 0.3;
console.log(sum.toFixed(1));
const login = prompt("Введіть ваш логін.");
const password = prompt("Введіть ваш пароль.");
if (login == "admin") {
  if (password == "12pass33210") {
    console.log("Успішна авторизація!");
  } else {
    console.log("Логін або пароль введено невірно.");
  }
} else {
  console.log("Логін або пароль введено невірно.");
}
let amountofmoney = +prompt("Кількість грошей в наявності.");
let startbudget = amountofmoney;
console.log(
  "Прейскурант цін: \n Watermelon: 21 грн, Carrot: 8 грн, Potato: 12 грн."
);
let usersChoice = prompt("Оберіть, що ви хочете купити.");
let pricelist = {
  Watermelon: 21,
  Carrot: 8,
  Potato: 12,
};
let prices = []
for (let key in pricelist) {
  prices.push(pricelist[key]);
}
Math.min.apply(null, prices) > amountofmoney ? console.log("Ви не зможете купити нічого.") : console.log("Йде обрахунок.")
let i = -1;
while (amountofmoney >= 0) {
  amountofmoney -= pricelist[usersChoice];
  i++;
}
if (i > -1) {
  console.log(
    `За ${startbudget} грн. Ви можете придбати ${i} шт. даного продукту. У Вас залишиться ${
      amountofmoney + pricelist[usersChoice]
    } грн.`
  );
} else {
  console.log(
    `"У вас недостатньо коштів, для купівлі хоча б 1 шт. ${usersChoice}"`
  );
}
const A = +prompt("Введіть значення сторони A");
const B = +prompt("Введіть значення сторони B");
const C = +prompt("Введіть значення сторони C");
if (A + B > C && A + C > B && C + B > A){
  console.log('Такий трикутник інсує.')
}else{
  console.log('Такого трикутника неіснує')
}

// 2 && 0 && 3 || true && false = False
// false || " " || 3 && true = " "
// 1 && 1000 && '0' || 0 && 'Bob' = '0'
// -1 || 0 || 0 && "" || 1010 = -1
