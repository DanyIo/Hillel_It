const field = document.getElementById("field");
const buttonFromTask1 = document.getElementById("button1");
function timer(delay) {
  const intervalId = setInterval(() => {
    field.value = `Russia will end its existence in ${delay} seconds.`;
    if (delay === 0) {
      field.value = "My congratulations.";
      clearInterval(intervalId);
    }
    delay--;
  }, 1000);
}
buttonFromTask1.addEventListener("click", function (event) {
  if (field.value >= 0 && field.value !== "") {
    timer(+field.value);
  }
});
const dataField = document.getElementById("dataField");
const buttonFromTask2 = document.getElementById("button2");
const timerfield = document.getElementById("timerfield");
function calculateTime(countDownDate) {
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0 || countDownDate < now) {
      clearInterval(x);
      timerfield.value = "EXPIRED";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24) - 30);
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerfield.value = `До старту залишилось ${days}d:${hours}h:${minutes}m:${seconds}s`;
    }
  }, 1000);
}
buttonFromTask2.addEventListener("click", function myClick(event) {
  const datavalue = dataField.value.split("-");
  const countDownDate = new Date(
    datavalue[0],
    datavalue[1],
    datavalue[2]
  ).getTime();
  if (dataField.value !== "") {
    calculateTime(countDownDate);
    buttonFromTask2.removeEventListener("click", myClick);
  }
});
const phoneModel = document.getElementById("phone_model")
const RAM = document.getElementById("RAM")
const builtInMemory = document.getElementById("Built-in_memory")
const priceFinder = document.getElementById("priceFinder")
const pricesPlace = document.getElementById("pricesPlace")
const priceList = {
  "iPhone" : 30000,
  "Samsung" : 25000,
  "Pixel" : 20000,
  "OnePlus" : 15000,
  "2GB OP" : 2000,
  "4GB OP" : 5000,
  "6GB OP" : 7000,
  "8GB OP" : 10000,
  "64GB" : 5000,
  "128GB" : 8000,
  "256GB" : 15000,
  "512GB" : 20000
}
priceFinder.addEventListener("click",function(event){
  let sum = 0
  for (a in priceList){
    if (a == phoneModel.value || a == RAM.value || a == builtInMemory.value){
      sum += priceList[a]
    }
  }
  pricesPlace.value = `${sum}$`
})
