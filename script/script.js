const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const point = document.getElementById("point");

let savedPoint = localStorage.getItem("point");
point.innerText = savedPoint ? Number(savedPoint) : 0;

increment.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) + 1;
  if (counter.innerText == "20") {
    alert("You've reached the limit counter");
    increment.setAttribute("disabled", true);
    decrement.setAttribute("disabled", true);
    point.innerText = Number(point.innerText) + 1;
    localStorage.setItem("point", point.innerText);
  }
});
decrement.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) - 1;
  if (counter.innerText == "-10") {
    alert("You've reached the limit counter");
    increment.setAttribute("disabled", true);
    decrement.setAttribute("disabled", true);
  }
});

reset.addEventListener("click", () => {
  counter.innerText = 0;
  increment.removeAttribute("disabled");
  decrement.removeAttribute("disabled");
});

function showPopup() {
  document.getElementById("popup").classList.remove("invisible");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

setTimeout(showPopup, 5000);
