var alimentos = [
  {'id': '1', 'nome': 'Arroz', 'peso': '50 gramas' ,'carbiodratos': '39 ', 'caloria': '10','keywords':'Arroz, arroz, almoço'},
  {'id': '2', 'nome': 'Feijão', 'peso': '50 gramas' ,'carbiodratos': '25 ', 'caloria': '20','keywords':'Feijão, almoço'},
  {'id': '3', 'nome': 'Carne', 'peso': '50 gramas' ,'carbiodratos': '3,1 ', 'caloria': '30','keywords':'Carne'},
  {'id': '4', 'nome': 'Batata', 'peso': '50 gramas' ,'carbiodratos': '41 ', 'caloria': '40','keywords':'Batata'},
  {'id': '5', 'nome': 'Soja', 'peso': '50 gramas' ,'carbiodratos': '10', 'caloria': '50','keywords':'Soja'}
];

function search(alimento,query){
  let listaParams = Object.keys(alimento);
  let rsp = false;
  for(let i = 0; i < listaParams.length; i++){
    if(alimento[listaParams[i]].includes(query)){
      rsp = true;
      i = listaParams.length;
    }
  }
  return rsp;
}

document.getElementById('pesquisa').addEventListener('submit',(evento)=>{
  let query = document.querySelector('#pesquisa #botao').value;
  let newHTML = '';
  for(let i = 0; i < alimentos.length; i++){
    if(search(alimentos[i],query)){
      newHTML += `
        <div class="card-externo col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="descricao">${alimentos[i].nome}</h5>
                    <p class="quantidade">Peso: ${alimentos[i].peso}</p>
                    <p class="quantidade">Carboidratos: ${alimentos[i].carbiodratos}g</p>
                    <p class="quantidade">Calorias: ${alimentos[i].caloria}</p>
                    
                </div>
            </div >
        </div>
`;
    }
  }
   document.getElementById('divDetalheFilme').innerHTML = newHTML
  evento.preventDefault();
});