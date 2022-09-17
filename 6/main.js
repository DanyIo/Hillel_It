function thesmallestnumber(num1, num2, num3, num4) {
  if (isNaN(Math.min.apply(null, [num1, num2, num3, num4]))) {
    return "Введіть хоча б 4 числа.";
  } else {
    return Math.min.apply(null, [num1, num2, num3, num4]);
  }
}
console.log(thesmallestnumber());
function greatestcommonden(x = "Введіть хоча б 1 число.", y) {
  if (x < 0 || y < 0) {
    return "Одне з введених чисел меньше за 0.";
  }
  if (y > x) {
    return greatestcommonden(y, x);
  }
  return !y ? x : greatestcommonden(y, x % y);
}
console.log(greatestcommonden());
function perfectnumber(number) {
  if (number == undefined) {
    return "Введіть число.";
  } else {
    if (number === 0) {
      return false;
    }
    let k = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        k += i;
      }
    }
    return number === k ? "Число є досконалим." : "Число не є досконалим.";
  }
}
console.log(perfectnumber());
function sumofarray(num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    return "Введіть 2 числа.";
  } else {
    if (num1 > num2) {
      return sumofarray(num2, num1);
    }
    sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
}
console.log(sumofarray());
function fahrenheit(num) {
  if (num === undefined) {
    return "Введіть число.";
  } else {
    return num * 1.8 + 32;
  }
}
console.log(fahrenheit());
function getRandomInt(min = 0, max = 40) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}
console.log(getRandomInt());
