let titulo = changeText("titulo", "Hora do Desafio")
let desafio01 = "O botão foi clicado"
let helloWord = "Olá Mundo!"
let promptGetName = "Digite seu nome"
let promptGetNumber = "Digite um numero"
let numberMax = 10


/**
 * @description imprimir no console uma mensagem
 */
function buttonStatus() {
    showConsole(desafio01)
}

/**
 * @description exibir uma mensagem através de um alert
 */
function alertOn() {
    alert("Eu amo JS")
}

/**
 * @description capturar o nome de uma cidade através de um alert
 * e devolver o nome através de um alert
 */
function promptOn() {
    let cidade = prompt('Me informe o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`)
}

/**
 * 
 * @description função que irá capturar dois números para realizar a soma e devolver
 * a soma destes numeros a um alert.
 */
function sumNumbers() {
    let number01 = prompt('Me informe um numero');
    let number02 = prompt('Me informe outro numero');
    alert(`A soma é: ${number01} + ${number02} = ${sum(number01, number02)}`)
}

function showHelloWord() {
    showConsole(helloWord)
}

/**
 * @description captura o nome digitado e printa ele no console
 */
function getName() {
    var userName = catchPrompt(promptGetName)
    showAlertResult(`Olá, ${userName}!`)
}

/**
 * @description devolve o calculo do dobro do valor
 */
function getdouble() {
    var number = catchPrompt(promptGetNumber)
    showAlertResult(`O dobro de ${number} = ${double(number)}`)
}

/***
 * @description capturar os numeros e devolver o calculo da média de 3 números
 */
function getaverage() {
    var number01 = catchPrompt("Informe o numero 01")
    var number02 = catchPrompt("Informe o numero 02")
    var number03 = catchPrompt("Informe o numero 03")
    showAlertResult(`A média dos valores [${number01}, ${number02}, ${number03}] = ${average(number01, number02, number03)}`)
}

/***
 * @description capturar dois numeros e retorna o maior deles
 */
function getTwoNumber() {
    var number01 = catchPrompt("Informe o numero 01")
    var number02 = catchPrompt("Informe o numero 02")
    showAlertResult(`O maior numero de ${number01} e ${number02} = ${getBigger(number01, number02)}`)
}

function getMultiplication() {
    var number01 = catchPrompt("Informe o numero 01")
    showAlertResult(`A multiplicação de ${number01} por ele mesmo é = ${multiplication(number01)}`)

}


/**
 * @description função criada para adicionar texto ao elemento HTML através do JS
 * @param {@} tag elemento HTML
 * @param {*} text texto que será exibido na tela
 * @returns o texto adicionado ao elemento HTML a ser exibido na tela
 */
function changeText(tag, text) {
    return document.getElementById(`${tag}`).innerHTML = text
}

function showConsole(text) {
    console.log(text)
}

/**
 * 
 * @returns um numero aleatório
 */
function randomNumber() {
    return parseInt(Math.random() * numberMax + 1)
}

/**
 * @description exibição de um prompt para capturar um dado
 * @param {*} promptText recebe o parametro que será manipulado em outro metodo
 * @returns devolve o valor capturado no prompt
 */
function catchPrompt(promptText) {
    return prompt(promptText);
}

/**
 * 
 * @param {*} text texto que será adicionado ao alert
 */
function showAlertResult(text) {
    alert(text)
}

/**
 * @description função que irá somar dois números informados pelo usuário
 * @param {*} number01 
 * @param {*} number02 
 * @returns retorna a soma dos dois números
 */
function sum(number01, number02) {
    return result = parseInt(number01) + parseInt(number02)
}

function double(number01) {
    return number01 ** 2
}

function average(number01, number02, number03) {
    return (parseInt(number01) + parseInt(number02) + parseInt(number03)) / 3
}

function getBigger(number01, number02) {
    if (number01 > number02) return number01
    else return number02
}

function multiplication(number01) {
    return number01 * 2
}

function getIMC() {
    var height = catchPrompt("Informe a sua altura sem a , ex: 158")
    var weight = catchPrompt("Informe seu pes sem a , ex: 58")
    let IMC = setIMC(height, weight)
    showAlertResult(`Seu IMC é: ${Math.floor(IMC, - 1)}`)
}

function setIMC(height, weight) {
    height = height / 100;
    return parseFloat(weight) / (parseFloat(height) * parseFloat(height))
}

function getFactorialize() {
    var number = catchPrompt("Informe o numero para a fatoração")
    showAlertResult(`O numero da fatoração para ${number}! = ${factorialize(number)}`)

}

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

function convertRealToDolar() {
    let cotacao = 4.80
    var valor = catchPrompt("Informe o numero para converter. Exemplo: 5.5")
    let conversao = parseFloat(valor)*parseFloat(cotacao)
    showAlertResult(`A conversão para R$${valor} = ${conversao}`)

}