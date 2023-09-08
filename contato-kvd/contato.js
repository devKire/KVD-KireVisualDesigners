function validateForm() {
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();
  var isValid = true; // Variável para controlar a validade do formulário

  // Verificar se os campos estão vazios
  if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      isValid = false;
  }

  // Validar o formato do email usando uma expressão regular
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      isValid = false;
  }

  // Validar o nome para conter apenas letras
  var nomeRegex = /^[A-Za-z ]+$/;
  if (!nomeRegex.test(nome)) {
      alert("Por favor, digite um nome válido, contendo apenas letras.");
      isValid = false;
  }

  return isValid;
}


// Verifica quando o footer deve ser mostrado
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.footer');
  const content = document.querySelector('.content');
  const contentHeight = content.clientHeight;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY + windowHeight >= contentHeight) {
      footer.style.display = 'block';
  } else {
      footer.style.display = 'none';
  }
});
