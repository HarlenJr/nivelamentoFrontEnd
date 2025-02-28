function validaInscricao(){

    var login = document.inscricao.txtlogin.value;
    var expReglogin = new RegExp("^[A-zÀ-ü]{3,}$");

    if(!expReglogin.test(login)){
        alert("Preencha o campo Login corretamente!")
        document.inscricao.txtlogin.focus();
        return false;
    }
    var senha = document.inscricao.txtsenha.value;
    var expRegSenha = new RegExp("^[A-zÀ-ü]{3,}[0-9]{1,}$")

    if(!expRegSenha.test(senha)){
        alert("Preencha o campo Senha corretamente!")
        document.inscricao.txtsenha.focus();
        return false;
    }

    if(login == "Admin" && senha == "Admin1234"){
        
        window.location.href="ideais.html"
    }
}
   /* var email = document.inscricao.txtemail.value;
    var expRegEmail = new RegExp("^[a-z]{1,}[0-9]{0,}[a-z]{0,}[@]{1}[a-z]{5}[.]{1}([c]{1})([o]{1})([m]{1})$");
    if(!expRegEmail.test(email)){
        alert("Preencha o campo E-mail.")
        document.inscricao.txtemail.focus();
        return false;
    }
    
    var nome = document.inscricao.txtusuario.value;
    var expRegUsuario = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})$");

    if(!expRegUsuario.test(nome)){
        alert("Preencha o campo Usuario.")
        document.inscricao.txtusuario.focus();
        return false;
    }
    return true;
    */
function login(){
    var login = getElementById("login").value
    var senha = getElementById("senha").value

    if(login == "admin" && senha == "Admin1234"){

       window.location.href="ideais.html";
    }
    else{
        alert("Login invalido");
    }
}
