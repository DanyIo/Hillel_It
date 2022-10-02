function CreatePearson(
  name,
  age,
  sex,
  nationality,
  country,
  listOfCounriesToVisit
) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.nationality = nationality;
  this.country = country;
  this.listOfCounriesToVisit = listOfCounriesToVisit;
}
const pearson1 = new CreatePearson(
  "Danylo",
  17,
  "male",
  "ukrainian",
  "Ukraine",
  ["russia", "USA", "UK"]
);
const pearson2 = new CreatePearson("Vova", 29, "male", "ukrainian", "Ukraine", [
  "Germany",
  "belarus",
  "UK",
]);
const greet = function () {
  console.log(`З початком робочого дня, ${this.name}.`);
};
const wakeUP = function () {
  console.log(`Добрий ранок, ${this.name}.`);
};
const timeToSleep = function () {
  console.log(`На добраніч, ${this.name}.`);
};
function pearsonCountryListToConsoleLog() {
  if (this.listOfCounriesToVisit.length == 0) {
    console.log("Список країн для відвідування пустий.");
  } else {
    console.log(`Користувач просто мріє відвідати наступні країни:`);
    for (let a in this.listOfCounriesToVisit) {
      console.log(this.listOfCounriesToVisit[a]);
    }
  }
}
function isadult() {
  return this.age >= 18;
}
const ispearsonadult = isadult.bind(pearson1);
greet.apply(pearson1);
wakeUP.call(pearson1);
timeToSleep.apply(pearson1);
pearsonCountryListToConsoleLog.call(pearson1);

Function.prototype.myOwnBind = function (context) {
  const func = this;
  return function (args) {
    return func.apply(context, args);
  };
};
const ispearson1adult = isadult.myOwnBind(pearson1);
ispearson1adult() ? console.log("Повнолітній") : console.log("Неповнолітній.");
function isEqual(object1, object2) {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    const bothAreObjects =
      typeof object1[prop] === "object" && typeof object2[prop] === "object";

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !isEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }

  return true;
}
isEqual(pearson1, pearson2)
  ? console.log("Equal")
  : console.log("Isn't equal.");
function greatestcommonden(x, y) {
  if (x < 0 || y < 0) {
    return "Одне з введених чисел меньше за 0.";
  }
  if (y > x) {
    return greatestcommonden(y, x);
  }
  return !y ? x : greatestcommonden(y, x % y);
}
function nok(n, m) {
  return (n * m) / greatestcommonden(n, m);
}
function Calculator(num1, num2) {
  (this.num1 = num1),
    (this.num2 = num2),
    (this.sum = +(num1 + num2).toFixed(1)),
    (this.nsd = greatestcommonden(num1, num2)),
    (this.nsk = nok(num1, num2));
}
const enterdata = new Calculator(
  +prompt("Введть перше число."),
  +prompt("Введіть друге число.")
);
console.log(enterdata);
