const refs = {
  changeColorButton: document.querySelector(".change-color"),
  textColorOutput: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorButton() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.textColorOutput.textContent = getRandomHexColor();
}

refs.changeColorButton.addEventListener("click", onChangeColorButton);
