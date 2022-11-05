const centuryInputField = document.getElementById("task1");
const vowelOneInputField = document.getElementById("task2");
const spinWordsInputField = document.getElementById("task3");
const highAndLowInputField = document.getElementById("task4");
const createPhoneNumberInputField = document.getElementById("task5");
const centuryButton = document.getElementById("task1_button");
const vowelOneButton = document.getElementById("task2_button");
const spinWordsButton = document.getElementById("task3_button");
const highAndLowButton = document.getElementById("task4_button");
const createPhoneNumberButton = document.getElementById("task5_button");
function whatCentury(year) {
  const century = Math.ceil(year / 100);
  if (century > 10 && century < 20) {
    return century + "th";
  }
  switch (century % 10) {
    case 1:
      return century + "st";
    case 2:
      return century + "nd";
    case 3:
      return century + "rd";
    default:
      return century + "th";
  }
}
function vowelOne(str) {
  const vowelsLetters = ["a", "e", "i", "o", "u"];
  return Array.from(str, (letter) => {
    return vowelsLetters.includes(letter) ? 1 : 0;
  }).join("");
}
function spinWords(str) {
  return Array.from(str.split(" "), (word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  }).join(" ");
}
function highAndLow(str) {
  return [
    Math.min.apply(null, Array.from(str.split(" "))),
    Math.max.apply(null, Array.from(str.split(" "))),
  ].join(" and ");
}
function createPhoneNumber(strArray) {
  const numbers = JSON.parse(strArray);
  let format = "(xxx) xxx-xxxx";
  for (let number of numbers) {
    format = format.replace("x", number);
  }
  return format;
}
centuryButton.addEventListener("click", function (event) {
  centuryInputField.value = whatCentury(centuryInputField.value);
});
vowelOneButton.addEventListener("click", () => {
  vowelOneInputField.value = vowelOne(vowelOneInputField.value);
});
spinWordsButton.addEventListener("click", function (event) {
  spinWordsInputField.value = spinWords(spinWordsInputField.value);
});
highAndLowButton.addEventListener("click", function (event) {
  highAndLowInputField.value = highAndLow(highAndLowInputField.value);
});
createPhoneNumberButton.addEventListener("click", function (event) {
  createPhoneNumberInputField.value = createPhoneNumber(
    createPhoneNumberInputField.value
  );
});
