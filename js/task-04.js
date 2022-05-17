
const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onDecrementButton() {
  counterValue -= 1;
  showValue();
}

function onIncrementButton() {
  counterValue += 1;
  showValue();
}

function showValue() {
  refs.value.textContent = counterValue;
}

refs.decrement.addEventListener("mousedown", onDecrementButton);
refs.increment.addEventListener("mousedown", onIncrementButton);