const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const zero = document.getElementById('zero');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const calcular = document.getElementById('calcular');
const apagar = document.getElementById('apagar');
let res = document.querySelector('.resultado');

const beep = new Audio("../public/assets/audio/beep.wav")
let expressao = [];
let sinal;
let numeros1 = [];
let numeros2 = [];

zero.addEventListener('click', () => {
    atualiza(zero, expressao);
})

um.addEventListener('click', () => {
    atualiza(um, expressao);
})

dois.addEventListener('click', () => {
    atualiza(dois, expressao);
})

tres.addEventListener('click', () => {
    atualiza(tres, expressao);
})

quatro.addEventListener('click', () => {
    atualiza(quatro, expressao);
})

cinco.addEventListener('click', () => {
    atualiza(cinco, expressao);
})

seis.addEventListener('click', () => {
    atualiza(seis, expressao);
})

sete.addEventListener('click', () => {
    atualiza(sete, expressao);
})

oito.addEventListener('click', () => {
    atualiza(oito, expressao);
})

nove.addEventListener('click', () => {
    atualiza(nove, expressao);
})

multiplicar.addEventListener('click', () => {
    atualiza(multiplicar, expressao);
    sinal = multiplicar.value;
})

dividir.addEventListener('click', () => {
    atualiza(dividir, expressao);
    sinal = dividir.value;
})

somar.addEventListener('click', () => {
    atualiza(somar, expressao);
    sinal = somar.value;
})

subtrair.addEventListener('click', () => {
    atualiza(subtrair, expressao);
    sinal = subtrair.value;
})

calcular.addEventListener('click', () => {
    beep.play();
    separaNumeros(expressao);
    exibeResultado(numeros1, numeros2);
})

apagar.addEventListener('click', () => {
    res.innerHTML = '';
    expressao = [];
    console.log(expressao)
})

function atualiza(valor, expressao) {
    res.innerHTML += valor.value;
    expressao.push(valor.value);
    beep.play();
}

function separaNumeros(expressao) {
    const index = expressao.indexOf(sinal);

    for (let i=0; i < index; i++) {
        numeros1.push(expressao[i])
    }
    
    for (let i=index+1; i < expressao.length; i++) {
        numeros2.push(expressao[i])
    }
}

function exibeResultado(array1, array2) {
    let num1 = Number(array1.join(''));
    let num2 = Number(array2.join(''));

    switch(sinal) {
        case "x": 
            res.innerHTML = num1 * num2;
            break;
        case "/": 
            res.innerHTML = num1 / num2;
            break;
        case "-": 
            res.innerHTML = num1 - num2;
            break;
        case "+": 
            res.innerHTML = num1 + num2;
            break;    
        default: 
            console.log('erro');
    }
}