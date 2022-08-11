// SELECTORS
const loginEmail = document.querySelector('#inputEmail');
const loginPassword = document.querySelector('#inputPass');
const loginButton = document.querySelector('#loginButton');
const agreeCheck = document.querySelector('#agreement');
const evaluationSubmitButton = document.querySelector('#submit-btn');
const textarea = document.querySelector('textarea');
const paraCounter = document.querySelector('#counter');

// Funcao que compara email e senha e retorna true ou false
const compareData = (a, b) =>
  a === loginEmail.value && b === loginPassword.value;

// Funcao que observa se o check esta marcado e retorna true ou falso
const toggler = (toggle) => {
  const checkState = toggle.checked;
  return checkState;
};

// Funcao que valida o login com base no email e senha digitados nos inputs
const validateLogin = (e) => {
  const email = 'tryber@teste.com';
  const password = '123456';

  // Previne que a tela seja recarregada e a informacao perdida
  e.preventDefault();

  // Regra de negocio com base na comparacao entro dado inputado e registrado
  if (compareData(email, password)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const validateCheck = (e) => {
  if (toggler(e.target)) {
    evaluationSubmitButton.disabled = false;
  } else {
    evaluationSubmitButton.disabled = true;
  }
};

const countChar = (e) => {
  paraCounter.innerText = 500 - e.target.value.length;
};

// EVENTS
loginButton.addEventListener('click', validateLogin);
agreeCheck.addEventListener('change', validateCheck);
textarea.addEventListener('input', countChar);
