var data;
var usuarioCorrente;
if(localStorage.getItem('data') == undefined || localStorage.getItem('data') == null){
  data = [
      {'email':'exemplo@email.com', 'senha':'admin', 'username': 'usuario01'},
      {'email':'caiooliveiralima94@gmail.com', 'senha':'123456', 'username': 'caiooliveira'}
    ];
  localStorage.setItem('data',JSON.stringify(data));
}
else{
  data = JSON.parse(localStorage.getItem('data'));
}


function logout(){
  localStorage.removeItem('usuarioCorrente');
  usuarioCorrente = null;
  localStorage.setItem('acesso','false');
  window.location.reload();
}
