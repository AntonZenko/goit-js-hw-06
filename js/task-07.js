const refs = {
  input: document.querySelector("#font-size-control"),
  textSize: document.querySelector("#text"),
};

function handleInput() {
  const fontSize = refs.input.value;
  refs.textSize.style.fontSize = `${fontSize}px`;
}

refs.input.addEventListener("input", handleInput);