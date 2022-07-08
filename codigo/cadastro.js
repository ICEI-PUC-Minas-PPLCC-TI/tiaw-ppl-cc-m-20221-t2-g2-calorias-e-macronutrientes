
document.getElementById('formulario').addEventListener('submit', (evento)=>{
  let newUser = {};
  newUser['email'] = document.getElementById('email').value;
  newUser['senha'] = document.getElementById('senha').value;
  newUser['username'] = document.getElementById('username').value;
  data.push(newUser);
  localStorage.setItem('data',JSON.stringify(data));
  usuarioCorrente = newUser;
  localStorage.setItem('usuarioCorrente',JSON.stringify(usuarioCorrente));
  localStorage.setItem('acesso','true');
  window.location.href = 'index.html';
  evento.preventDefault();
});