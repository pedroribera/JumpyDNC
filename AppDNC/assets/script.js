/*function obrigatorio (){
    let nomeC = document.getElementById("nomecompleto");
    let email = document.getElementById("email");
        if (nomeC == '' || email == ''){
            console.log("preencha os campos");
        } else {
            console.log("cadastro realizado");
        }
}
obrigatorio()*/
var botao = document.getElementById('botao')
var form  = document.getElementsByTagName('form')[0];
var nome = document.getElementById('nomecompleto');
var email = document.getElementById('mail');
var tel = document.getElementById('tel')
var cpf = document.getElementById('cpf')
var senha = document.getElementById('senha')
var error = document.querySelector('.error');
var error2 = document.querySelector('.error2');
var error3 = document.querySelector('.error3');
var error4 = document.querySelector('.error4');
var error5 = document.querySelector('.error5');
var errorAll = document.querySelector('.errorAll');
var sucesso = document.querySelector('.sucesso')
var input = document.querySelectorAll('input')
/* ERROR EMAIL */
email.addEventListener("input", function (event) {
    // Cada vez que o usuário digita algo, verificamos se o
    // campo de email é válido.
    if (email.validity.valid) {
      // Caso haja uma mensagem de erro visível, se o campo
      // é válido, removemos a mensagem de erro.
      error.innerHTML = ""; // Reinicia o conteúdo da mensagem
     // error.className = "error"; // Redefinir o estado visual da mensagem
    }
  }, false);
  form.addEventListener("submit", function (event) {
    // Cada vez que o usuário tenta enviar os dados, verificamos
    // se o campo de email for válido.
    if (!email.validity.valid|email.value == '') {
  
      // Se o campo não for válido, exibimos um personalizado
      // mensagem de erro.
      error.innerHTML = "*Campo Obrigatório*";
      error.className = "error active";
      error3.innerHTML = "Campos obrigatórios não registrados."
      // E evitamos que o formulário seja enviado cancelando o evento
      event.preventDefault();
    }
  }, false);

//* ERROR NOME */

  nome.addEventListener("input", function (event) {
    if (nome.value!='') {
      error2.innerHTML = ""; 
    
    }
  }, false);
  form.addEventListener("submit", function (event) {
    if (nome.value=='') {
      error2.innerHTML = "*Campo Obrigatório*";
      error2.className = "error active";
      errorAll.innerHTML = "Campos obrigatórios não registrados."
      event.preventDefault();
    } 
  }, false);

//* ERROR TEL */

tel.addEventListener("input", function (event) {
  if (tel.value!='') {
    error3.innerHTML = "";  
  }
}, false);
form.addEventListener("submit", function (event) {
  if (tel.value=='') {
    error3.innerHTML = "*Campo Obrigatório*";
    error3.className = "error active";
    errorAll.innerHTML = "Campos obrigatórios não registrados."
    event.preventDefault();
  } 
}, false);

//* ERROR CPF */
cpf.addEventListener("input", function (event) {
  if (cpf.value != '') {
    error4.innerHTML = "";  
  }
}, false);
form.addEventListener("submit", function (event) {
  if (cpf.value=='') {
    error4.innerHTML = "*Campo Obrigatório*";
    error4.className = "error active";
    errorAll.innerHTML = "Campos obrigatórios não registrados."
    event.preventDefault();
  } 
}, false);
//* ERROR SENHA */
senha.addEventListener("input", function (event) {
  if (senha.value != '') {
    error5.innerHTML = "";  
  }
}, false);
form.addEventListener("submit", function (event) {
  if (senha.value=='') {
    error5.innerHTML = "*Campo Obrigatório*";
    error5.className = "error active";
    errorAll.innerHTML = "Campos obrigatórios não registrados."
    event.preventDefault();
  } 
}, false);

form.addEventListener("submit", function (event) {
  if (email.value!=''&nome.value!=''&tel.value!=''&cpf.value!=''&senha.value!='') {
    errorAll.className = "sucesso";
    errorAll.innerHTML = "Sucesso!"
    event.preventDefault();
  } 
}, false);