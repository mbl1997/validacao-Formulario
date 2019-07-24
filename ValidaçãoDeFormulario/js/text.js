function validar() {
    var mensagemErro = "";
    if (document.getElementById ("login").value == "") {
    mensagemErro = "Informe o login.";
    }
    if (document.getElementById ("email").value == "") {
    mensagemErro += "\nInforme o email.";
    }
    if (document.getElementById ("datanasc").value == "") {
    mensagemErro += "\nInforme a data de nascimento.";
     
     
    }
    if (document.getElementById ("senha").value == "") {
    mensagemErro += "\nInforme a senha.";
    }
    if (document.getElementById ("vsenha").value == "") {
    mensagemErro += "\nInforme a confirmação de senha.";
    }
    if (document.getElementById ("senha").value != document.getElementById ("vsenha").value) {
    mensagemErro += "\nAs senhas estão diferentes.";}
     
    if (document.getElementById ("cidade").value == "") {
    mensagemErro += "\nInforme a cidade.";
    }
    if (document.getElementById ("home").value == "") {
    mensagemErro += "\nInforme a Home-page.";
    }
    if (document.getElementById ("interesse").value == "") {
    mensagemErro += "\nInforme os interesses.";
    }
     
    var opcoesSexo = document.getElementsByName ("campoSexo");
    var sexoPreenchido = false;
    for (var i = 0; i < opcoesSexo.length; i++) {
    if (opcoesSexo[i].checked) {
    sexoPreenchido = true;
    }
    }
    if (!sexoPreenchido) {
    mensagemErro += "\nInforme o sexo.";
    }
    if (mensagemErro == "") {
    return true;
    } else {
    alert (mensagemErro);
    return false;
    }
    }