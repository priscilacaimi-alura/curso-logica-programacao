let listDrawnNumbers = []
let numberMax = 50
let tentativas = 1
let theNumber = randomNumber(numberMax)

gameStartText()

function verificarChute() {
    console.log(`the number ${theNumber}`)
    let chute = document.querySelector("input").value
    if (chute == theNumber) {
        changeText("titulo", `Você acertou!!`)
        let palavraTentativas = tentativas > 1 ? "Tentativas" : "Tentativa"
        changeText("texto__paragrafo", `Número secreto ${theNumber} com ${tentativas} ${palavraTentativas}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > theNumber) {
            changeText("texto__paragrafo", `O número secreto é menor que ${chute}`)
        } else {
            changeText("texto__paragrafo", `O número secreto é maior que ${chute}`)
        }
        tentativas++
        cleanInput("texto__paragrafo")
    }

}

/**
 * @description função criada para adicionar texto ao elemento HTML através do JS
 * @param {@} tag elemento HTML
 * @param {*} text texto que será exibido na tela
 * @returns o texto adicionado ao elemento HTML a ser exibido na tela
 */
function changeText(tag, text) {
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2})
    return document.getElementById(`${tag}`).innerHTML = text
}

/**
 * @description exiibição dos textos iniciais na tela
 */
function gameStartText() {
    changeText("titulo", "Jogo do número secreto!")
    changeText("texto__paragrafo", `Escolha o número entre 1 e ${numberMax}`)
}

/**
 * @description sorteia um numero aleatorio e valida se o numero já foi sorteado alguma vez
 * @returns um numero aleatório
 */
function randomNumber(numberMax) {
    let drawnNumber = parseInt(Math.random() * numberMax + 1)
    let drawnNumberSize = listDrawnNumbers.length

    if(drawnNumberSize == numberMax) {
        listDrawnNumbers = []
    }
    if (listDrawnNumbers.includes(drawnNumber)) {
        return randomNumber(numberMax)
    }else {
        listDrawnNumbers.push(drawnNumber)
        console.log(listDrawnNumbers)
        return drawnNumber
    }
}

function cleanInput() {
    document.querySelector("input").value = ''
}

function restartGame() {
    theNumber = randomNumber(numberMax)
    cleanInput()
    tentativas = 1
    gameStartText()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}