localStorage.clear()
let strDados = localStorage.getItem("db");
let objDados = {};

if(strDados){
    objDados = JSON.parse(strDados);
}else{
    objDados = {
        refeicoes: [{
                alimento1: 'arroz', 
                alimento2: 'feijao',
                alimento3: 'tomate',
                alimento4: 'alface',
                alimento5: 'carne'  
            }] 
        };
}

document.getElementById ('btnCarregaDados').addEventListener ('click', function(){
    let strHtml = '';
    for(i=0; i < objDados.refeicoes.length; i++){
        let alimento1 = JSON.stringify(objDados.refeicoes[i].alimento1);
        let alimento2 = JSON.stringify(objDados.refeicoes[i].alimento2);
        let alimento3 = JSON.stringify(objDados.refeicoes[i].alimento3);
        let alimento4 = JSON.stringify(objDados.refeicoes[i].alimento4);
        let alimento5 = JSON.stringify(objDados.refeicoes[i].alimento5);
        strHtml += `<p class="refeicao">Refeição${i+1}: ${alimento1} ${alimento2}  ${alimento3}  ${alimento4}  ${alimento5}</p>`
    }

    document.getElementById("tela").innerHTML = strHtml;
});

document.getElementById ('formulario').addEventListener ('submit', function(evento){
    
    evento.preventDefault();
    let alimento1 = document.getElementById("primeiroalimento").value;
    let alimento2 = document.getElementById("segundoalimento").value;
    let alimento3 = document.getElementById("terceiroalimento").value;
    let alimento4 = document.getElementById("quartoalimento").value;
    let alimento5 = document.getElementById("quintoalimento").value;
    let novoalimento = {
        alimento1:alimento1, 
        alimento2:alimento2, 
        alimento3:alimento3,
        alimento4:alimento4,
        alimento5:alimento5,
    } 
    
    objDados.refeicoes.push(novoalimento);
    
    localStorage.setItem('db', JSON.stringify(objDados));
});