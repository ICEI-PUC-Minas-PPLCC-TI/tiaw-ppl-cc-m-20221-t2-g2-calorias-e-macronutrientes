function indexUser(email,senha){
  let index = -1;
  for(let i = 0; i < data.length; i++){
    if(data[i].email == email && data[i].senha == senha){
      index = i;
      i = data.length;
    }
  }
  return index;
}

function logar(){
    var email = document.getElementById("exampleInputEmail1");
    var senha = document.getElementById("exampleInputPassword1");

    //console.log(email.value+senha.value);
    let indexUsuarioCorrente = indexUser(email.value,senha.value);
    if(indexUsuarioCorrente != -1){
      usuarioCorrente = data[indexUsuarioCorrente];
      localStorage.setItem('acesso','true');
      localStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
      window.location.replace('index.html');
    }
  else{
    alert('usuario inexistente')
  }
}

let UC = localStorage.getItem('usuarioCorrente');
if(UC != undefined && UC != null){
  window.location.href = 'index.html';
}


document.getElementById('formularioLogin').addEventListener('submit',logar);

