const field = document.getElementById("field");
const button = document.getElementById("button");
function timer(delay) {
  const intervalId = setInterval(() => {
    console.log(`Russia will end its existence in ${delay} seconds.`);
    field.value = `Russia will end its existence in ${delay} seconds.`;
    if (delay === 0) {
      console.log("My congratulations.");
      field.value = "My congratulations.";
      clearInterval(intervalId);
    }
    delay--;
  }, 1000);
}
button.addEventListener("click", function (event) {
  if (field.value >= 0) {
    timer(+field.value);
  }
});
