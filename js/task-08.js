const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Заполните все поля ввода');
    return;
  }

  if (password.value.length <= 8) {
    alert('Пароль содержит не менее 8 символов!');
    return;
  }

  console.log({ [email.name]: email.value, [password.name]: password.value });

  event.currentTarget.reset();
}

formRef.addEventListener("submit", handleSubmit);
