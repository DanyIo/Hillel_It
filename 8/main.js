const userarray = [];
function userarraycreator() {
  const userarraylength = +prompt("Введіть довжину списку.");
  while (userarray.length != userarraylength) {
    const userarguments = prompt(
      `Введіть елемент у масив ${userarray.length}/${userarraylength} `
    );
    userarray.push(userarguments);
  }
  return userarray;
}
console.log(userarraycreator());
userarray.sort(function (a, b) {
  return a - b;
});
console.log(userarray);
const shoppinglist = [
  { productName: "bread", productPrice: 14.5, productQuantity: 2 },
  { productName: "carrot", productPrice: 18, productQuantity: 3 },
  { productName: "cheese", productPrice: 10, productQuantity: 1 },
  { productName: "beef", productPrice: 30, productQuantity: 4 },
  { productName: "eggs", productPrice: 20, productQuantity: 2 },
  { productName: "milk", productPrice: 17, productQuantity: 3 },
];
let totalsum = 0;
let totalQuantity = 0;
for (let a in shoppinglist) {
  totalsum += shoppinglist[a].productPrice;
  totalQuantity += shoppinglist[a].productQuantity;
}
console.log(`Загальна сума продуктів ${totalsum}`);

let sortbyQuantity = (a, b) => (a.productQuantity > b.productQuantity ? 1 : -1);
let sortbyPrice = (a, b) => (a.productPrice > b.productPrice ? 1 : -1);
shoppinglist.sort(sortbyQuantity);
console.log(
  `Найменша кількість продукту якого потрібно купити - це ${shoppinglist[0].productName} у кількості ${shoppinglist[0].productQuantity}шт.`
);
console.log(`Загальна кількість продуктів ${totalQuantity} шт.`);
shoppinglist.sort(sortbyPrice);
console.log(
  `Продукт ${
    shoppinglist[shoppinglist.length - 1].productName
  } має найбульшу вартість, а саме ${
    shoppinglist[shoppinglist.length - 1].productPrice
  }$`
);
function newProductAdd() {
  const userproductname = prompt("Введіть ім'я продукту.");
  const userproductprice = prompt("Введіть ціну продукта.");
  const userproductQuantity = prompt("Введіть кількість продукту.");
  if (
    userproductname === null ||
    userproductprice === null ||
    userproductQuantity === null
  ) {
    return "Заповніть всі дані.";
  } else {
    shoppinglist.push({
      productName: userproductname,
      productPrice: userproductprice,
      productQuantity: userproductQuantity,
    });
    return shoppinglist;
  }
}
console.log(newProductAdd());
function deleteProductFromShoppinglist() {
  const producttodelete = prompt(
    "Введіть назву продукту для видалення його зі списку."
  );
  if (producttodelete === undefined) {
    return "Заповніть всі дані.";
  } else {
    for (let a in shoppinglist) {
      if (shoppinglist[a].productName == producttodelete) {
        delete shoppinglist[a];
      }
    }
    return shoppinglist;
  }
}
console.log(deleteProductFromShoppinglist());
const givenarray = [
  16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54,
  76, -4, 12, 6, -35,
];
let positivenumber = 0;
let negativenumber = 0;
let sumofpositivenumbers = 0;
let productofpositivenumbers = 1;
let oddpositivenumbers = 0;
let sumoftwinpositivenumber = 0;
for (let k in givenarray) {
  if (givenarray[k] > 0) {
    positivenumber++;
    sumofpositivenumbers += givenarray[k];
    productofpositivenumbers *= givenarray[k];
  } else {
    if (givenarray[k] < 0) {
      negativenumber++;
    }
  }
  if (givenarray[k] > 0 && givenarray[k] % 2 !== 0) {
    oddpositivenumbers++;
  } else {
    if (givenarray[k] > 0 && givenarray[k] % 2 == 0) {
      sumoftwinpositivenumber += givenarray[k];
    }
  }
}
console.log(
  `Найменший елемент у списку ${Math.min(
    ...givenarray
  )} і його порядковий номер ${
    givenarray.indexOf(Math.min(...givenarray)) + 1
  }.`
);
console.log(
  `Найбільший елемент у списку ${Math.max(
    ...givenarray
  )} і його порядковий номер ${
    givenarray.indexOf(Math.max(...givenarray)) + 1
  }.`
);

console.log(
  `Сума та кількість позитивних елементів: ${sumofpositivenumbers}, ${positivenumber}.`
);
console.log(`Кількість негативних елементів: ${negativenumber}.`);
console.log(`Кількість непарних позитивних елементів: ${oddpositivenumbers}.`);
console.log(`Сума парних позитивних елементів: ${sumoftwinpositivenumber}.`);
console.log(`Добуток позитивних елементі: ${productofpositivenumbers}.`);
