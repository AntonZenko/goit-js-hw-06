const inputRef = document.querySelector("#validation-input");

function handleBlur(event) {
  const validInput = Number(event.currentTarget.dataset.length);
  // console.log(event.currentTarget);  
  const userInput = event.currentTarget.value.length;

  if (validInput === userInput) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", handleBlur);

