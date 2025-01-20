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
let res2 = document.querySelector('.cima');

const beep = new Audio("../public/assets/audio/beep.wav")

let sinal;
let num1 = 0;
let num2 = 0;

zero.addEventListener('click', () => {
    atualiza(zero);
    separaNumeros(um);
})

um.addEventListener('click', () => {
    atualiza(um);
    separaNumeros(um);
})

dois.addEventListener('click', () => {
    atualiza(dois);
    separaNumeros(dois);
})

tres.addEventListener('click', () => {
    atualiza(tres);
    separaNumeros(tres);
})

quatro.addEventListener('click', () => {
    atualiza(quatro);
    separaNumeros(quatro);
})

cinco.addEventListener('click', () => {
    atualiza(cinco);
    separaNumeros(cinco);
})

seis.addEventListener('click', () => {
    atualiza(seis);
    separaNumeros(seis);
})

sete.addEventListener('click', () => {
    atualiza(sete);
    separaNumeros(sete);
})

oito.addEventListener('click', () => {
    atualiza(oito);
    separaNumeros(oito);
})

nove.addEventListener('click', () => {
    atualiza(nove);
    separaNumeros(nove);
})

multiplicar.addEventListener('click', () => {
    atualiza(multiplicar);
    sinal = multiplicar.value;
})

dividir.addEventListener('click', () => {
    atualiza(dividir);
    sinal = dividir.value;
})

somar.addEventListener('click', () => {
    atualiza(somar);
    sinal = somar.value;
})

subtrair.addEventListener('click', () => {
    atualiza(subtrair);
    sinal = subtrair.value;
})

calcular.addEventListener('click', () => {
    beep.play();
    res2.innerHTML = `${num1} ${sinal} ${num2}`
    exibeResultado();
})

apagar.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    sinal = '';
    res.innerHTML = '';
    res2.innerHTML = '';
})

function atualiza(valor) {
    res.innerHTML += valor.value;
    beep.play();
}

function separaNumeros(valor) {
    if (sinal) {
        num2 = Number(num2 + valor.value);
        console.log('num2 = ' + num2)
    } else {
        num1 = Number(num1 + valor.value);
        console.log('num1 = ' + num1)
    }
}

function exibeResultado() {
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