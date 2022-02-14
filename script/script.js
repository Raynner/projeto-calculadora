let resultado = document.querySelector('.result');
let confirmar = document.querySelector('.igual');

function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = '';
}

function backSpace(){
    if(resultado.textContent){
        let result = document.querySelector('#resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirma(){
    if(resultado.textContent != 'Erro'){
        document.querySelector('#resultado').innerHTML = eval(resultado.innerHTML);
    }
}