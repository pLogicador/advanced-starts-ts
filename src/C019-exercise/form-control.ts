import isEmail from 'validator/lib/isEmail';

const ERROR_MESSAGE_CLASS = 'show-error-message';
const formElement = document.querySelector('.form') as HTMLFormElement;
const usernameInput = document.querySelector('.username') as HTMLInputElement;
const emailInput = document.querySelector('.email') as HTMLInputElement;
const passwordInput = document.querySelector('.password') as HTMLInputElement;
const passwordConfirmationInput = document.querySelector('.password-confirmation') as HTMLInputElement;

// Função para gerenciar o evento de submissão do formulário
const handleFormSubmit = (event: Event): void => {
  event.preventDefault();

  // Limpa as mensagens de erro anteriores
  clearErrorMessages(formElement);

  // Realiza as validações
  validateEmptyFields(usernameInput, emailInput, passwordInput, passwordConfirmationInput)
  validateEmailFormat(emailInput);
  validatePasswordMatch(passwordInput, passwordConfirmationInput);

  // Verifica se o formulário deve ser enviado
  if (isFormValid(formElement)) {
    console.log('Form successfully submitted!');
  }
}

// Adiciona o evento de submit ao formulário
formElement.addEventListener('submit', handleFormSubmit);

// Função para validar campos vazios
function validateEmptyFields(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach(input => {
    if (!input.value) {
      displayErrorMessage(input, 'This field cannot be empty');
    };
  });
}

// Função para validar o formato do e-mail
function validateEmailFormat(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    displayErrorMessage(input, 'Invalid Email');
  };
}

// Função para validar se as senhas são iguais
function validatePasswordMatch(passwordInput: HTMLInputElement, passwordConfirmationInput: HTMLInputElement): void {
  if (passwordInput.value != passwordConfirmationInput.value) {
    displayErrorMessage(passwordConfirmationInput, 'Passwords do not match');
  };
}

// Função para limpar as mensagens de erro
function clearErrorMessages(form: HTMLFormElement) : void {
  form.querySelectorAll('.' + ERROR_MESSAGE_CLASS)
  .forEach(item => item.classList.remove(ERROR_MESSAGE_CLASS));
}

// Função para exibir mensagens de erro
function displayErrorMessage(input: HTMLInputElement, message: string): void {
  const formFieldWrapper = input.parentElement as HTMLDivElement;
  const errorMessageElement = formFieldWrapper.querySelector('.error-message') as HTMLSpanElement;

  errorMessageElement.innerText = message;
  formFieldWrapper.classList.add(ERROR_MESSAGE_CLASS);
}

function isFormValid(form: HTMLFormElement): boolean {
  let isValid = true;

  form.querySelectorAll('.' + ERROR_MESSAGE_CLASS).forEach(() => {
    isValid = false;
  });

  return isValid;
}

