const ul = document.getElementById("myUL");
const button = document.getElementById("addBtn");
const field = document.getElementById("myInput");
function clrField() {
  field.value = "";
}
function addNewTask(text) {
  const li = document.createElement("li");
  li.innerHTML = text;
  ul.append(li);
  li.addEventListener("click", function (event) {
    li.className = "checked";
  });
  const closeButton = document.createElement("a");
  closeButton.setAttribute("href", "#");
  closeButton.setAttribute("class", "close");
  closeButton.setAttribute("tabindex", "0");
  closeButton.setAttribute("role", "button");
  li.append(closeButton);
  closeButton.addEventListener("click", function (event) {
    li.remove();
    console.log(1);
  });
}
button.addEventListener("click", function (event) {
  if (field.value !== "") {
    addNewTask(field.value);
    clrField();
  }
});
