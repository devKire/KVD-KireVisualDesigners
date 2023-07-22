function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se os campos estão vazios
    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Validar o formato do email usando uma expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    var regex = /^[A-Za-z]+$/; // Expressão regular para verificar se contém apenas letras

  if (!regex.test(nome)) {
    alert("Por favor, digite um nome válido, contendo apenas letras.");
    return false;
  }
  
    return true;
}