const sum = 0.1 + 0.3;
console.log(sum.toFixed(1));
const login = prompt("Введіть ваш логін.");
const password = prompt("Введіть ваш пароль.");
if (login == "admin") {
  if (password == "12pass33210") {
    console.log("Успішна авторизація!");
  } else {
    console.log("Пароль введено невірно.");
  }
} else {
  console.log("Логін введено невірно.");
}
let amountofmoney = +prompt("Кількість грошей в наявності.");
let startbudget = amountofmoney;
console.log(
  "Прейскурант цін: \n Watermelon: 21 грн, Carrot: 8 грн, Potato: 12 грн."
);
let UsersChoice = prompt("Оберіть, що ви хочете купити.");
let pricelist = {
  Watermelon: 21,
  Carrot: 8,
  Potato: 12,
};
if (amountofmoney < pricelist["Watermelon"]) {
  if (amountofmoney < pricelist["Carrot"]) {
    if (amountofmoney < pricelist["Potato"]) {
      console.log("У вас не хватає грошей нінащо.");
    }
  }
}
let i = -1;
while (amountofmoney >= 0) {
  amountofmoney -= pricelist[UsersChoice];
  i++;
}
if (i > -1) {
  console.log(
    `За ${startbudget} грн. Ви можете придбати ${i} шт. даного продукту. У Вас залишиться ${
      amountofmoney + pricelist[UsersChoice]
    } грн.`
  );
} else {
  console.log(
    `"У вас недостатньо коштів, для купівлі хоча б 1 шт. ${UsersChoice}"`
  );
}
const A = +prompt("Введіть значення сторони A");
const B = +prompt("Введіть значення сторони B");
const C = +prompt("Введіть значення сторони C");
if (A + B > C) {
  if (A + C > B) {
    if (B + C > A) {
      console.log("Такий трикутник існує.");
    } else {
      console.log("Такого трикутника неіснує.");
    }
  } else {
    console.log("Такого трикутника неіснує.");
  }
} else {
  console.log("Такого трикутника неіснує.");
}

// 2 && 0 && 3 || true && false = False
// false || " " || 3 && true = " "
// 1 && 1000 && '0' || 0 && 'Bob' = '0'
// -1 || 0 || 0 && "" || 1010 = -1
