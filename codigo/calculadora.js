// declara um conjunto inicial de alimentos
var db_alimentos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": 'Água',
            "calorias": "0",
            "carboidratos": "0",
            "proteinas": "0",
            "gorduras": "0",
        },
        {
            "id": 2,
            "nome": 'Banana',
            "calorias": "98",
            "carboidratos": "15",
            "proteinas": "1.3",
            "gorduras": "0.1",
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_alimento'));
if (!db) {
    db = db_alimentos_inicial
};

function insertAlimento(alimento){
    alimento['id'] = db['data'].length+1;
    db['data'].push(alimento);
    localStorage.setItem('db_alimento',JSON.stringify(db));
}



   









