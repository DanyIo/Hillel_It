function displayValue(val) {
  document.getElementById("field").value += val;
}

function solve() {
  try {
    let result = +math.evaluate(document.getElementById("field").value);
    clr();
    if (result !== Infinity || typeof result !== "number") {
      displayValue(result);
    } else {
      displayValue("Error: Invalid operation");
    }
  } catch (err) {
    clr();
    displayValue("Something gone wrong.");
  }
}
function clr() {
  document.getElementById("field").value = "";
}
const calculator = document.getElementById("calculator");

calculator.addEventListener("click", function (event) {
  if (
    event.target.innerText === "0" ||
    event.target.innerText === "1" ||
    event.target.innerText === "2" ||
    event.target.innerText === "3" ||
    event.target.innerText === "4" ||
    event.target.innerText === "5" ||
    event.target.innerText === "6" ||
    event.target.innerText === "7" ||
    event.target.innerText === "8" ||
    event.target.innerText === "9" ||
    event.target.innerText === "-" ||
    event.target.innerText === "+" ||
    event.target.innerText === "*" ||
    event.target.innerText === "/" ||
    event.target.innerText === "."
  ) {
    displayValue(event.target.innerText);
  } else if (event.target.innerText === "AC") {
    clr();
  } else if (event.target.innerText === "=") {
    if (document.getElementById("field").value !== "") {
      solve();
    }
  } else if (
    event.target.innerText === "+/-" ||
    event.target.innerText === "%"
  ) {
    clr();
    document.getElementById("field").value = "I'm here for beauty 🥀";
  }
});
