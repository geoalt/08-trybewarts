// SELECTORS
const loginEmail = document.querySelector('#inputEmail');
const loginPassword = document.querySelector('#inputPass');
const loginButton = document.querySelector('#loginButton');
const agreeCheck = document.querySelector('#agreement');
const evaluationSubmitButton = document.querySelector('#submit-btn');
const textarea = document.querySelector('textarea');
const paraCounter = document.querySelector('#counter');
const submitButton = document.querySelector('#submit-btn');
const main = document.querySelector('main');
const data = document.querySelector('#form-data');

// INPUT TO PRINT SELECTORS
const printName = document.querySelector('#input-name');
const printLastname = document.querySelector('#input-lastname');
const printEmail = document.querySelector('#input-email');
const printHouse = document.querySelector('#house');
const printFamily = document.querySelectorAll('[name=family]');
const printSubject = document.querySelectorAll('.subject');
const printRate = document.querySelectorAll('[name=rate]');
const printTextarea = document.querySelector('#textarea');

/* // PARA TO PRINT IN SELECTORS
const paraNome = document.querySelector('.displayName');
const paraEmail = document.querySelector('.displayEmail');
const paraCasa = document.querySelector('.displayCasa');
const paraFamilia = document.querySelector('.displayFamilia');
const paraMateriais = document.querySelector('.displayMaterias');
const paraAvaliacao = document.querySelector('.displayAvaliacao');
const paraObservacoes = document.querySelector('.displayObservacoes'); */

// FUNCTIONS
// Funcao que compara email e senha e retorna true ou false
const compareData = (loginInputed, passInputed) =>
  loginInputed === loginEmail.value && passInputed === loginPassword.value;

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

// Funcao que observa e habilita o botao de enviar
const validateCheck = (e) => {
  if (toggler(e.target)) {
    evaluationSubmitButton.disabled = false;
  } else {
    evaluationSubmitButton.disabled = true;
  }
};

// Funcao que conta os caracteres restante do campo 'textarea'
const countChar = (e) => {
  paraCounter.innerText = 500 - e.target.value.length;
};

const cleanerNode = (input) => {
  let temp = '';

  input.forEach((value) => {
    if (value.checked === true) {
      temp += `${value.nextElementSibling.innerText}, `;
    }
  });
  return temp.substring(0, temp.length - 2);
};

const append = (parent, content) => {
  const para = document.createElement('p');
  para.innerHTML = content;
  parent.append(para);
};

const printInfos = (obj) => {
  // OBJECT TO PRINT IN PARAGRAPH SELECTORS
  /*   paraEmail.innerText = `Email: ${obj.email}`;
    paraNome.innerText = `Nome: ${obj.nome} ${obj.sobrenome}`;
    paraCasa.innerText = `Casa: ${obj.casa}`;
    paraFamilia.innerText = `Família: ${obj.familia}`;
    paraMateriais.innerText = `Matérias: ${obj.materias}`;
    paraAvaliacao.innerText = `Avaliação: ${obj.avaliacao}`;
    paraObservacoes.innerText = `Observações: ${obj.observacoes}`; */
  append(data, `Nome: ${obj.nome} ${obj.sobrenome}`);
  append(data, `Email: ${obj.email}`);
  append(data, `Casa: ${obj.casa}`);
  append(data, `Família: ${obj.familia}`);
  append(data, `Matérias: ${obj.materias}`);
  append(data, `Avaliação: ${obj.avaliacao}`);
  append(data, `Observações: ${obj.observacoes}`);
};

const cleanInfos = (e) => {
  e.preventDefault();

  const printObject = {
    nome: printName.value,
    sobrenome: printLastname.value,
    email: printEmail.value,
    casa: printHouse.value,
    familia: cleanerNode(printFamily),
    materias: cleanerNode(printSubject),
    avaliacao: cleanerNode(printRate),
    observacoes: printTextarea.value,
  };

  main.classList.toggle('is-hidden');
  data.classList.toggle('is-hidden');
  printInfos(printObject);
};

// EVENTS
loginButton.addEventListener('click', validateLogin);
agreeCheck.addEventListener('change', validateCheck);
textarea.addEventListener('input', countChar);
submitButton.addEventListener('click', cleanInfos);
