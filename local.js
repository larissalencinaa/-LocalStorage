function enviar(){
    var numero = document.getElementById("number").value;
    
    localStorage.setItem('numeroUsuario', numero);
    
    alert("numero enviado");
    
    console.log("numero enviado");
    
    }
    