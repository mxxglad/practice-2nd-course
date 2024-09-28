const inputSymbCount = document.getElementById('count')
const checkboxSpecial = document.getElementById('spec')
const inputPassword = document.getElementById('pass')
const button = document.querySelector('button')

const mainSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'A',
    'b', 'B',
    'c', 'C',
    'd', 'D',
    'e', 'E',
    'f', 'F',
    'g', "G",
    'h', "H",
    'i', "I",
    'j', "J",
    'k', "K",
    'l', "L",
    'm', "M",
    'n', "N",
    'o', "O",
    'p', "P",
    'q', "Q",
    'r', "R",
    's', "S",
    't', "T",
    'u', "U",
    'v', "V",
    'w', "W",
    'x', "X",
    'y', "Y",
    'z', "Z",];

const specialSymbols = ["!", "@", "#", "№", "$", ";", "%", "^", ":", "&", "?", "*", "-", "_", "+", "=", "."]


function symbCountCheck() {
    let value = inputSymbCount.value

    if (value > 36) {
        value = 36;
        inputSymbCount.value = 36;
    }
    else if (value < 8) {
        value = 8;
        inputSymbCount.value = 8;
    }
}

inputSymbCount.addEventListener('focus', symbCountCheck)
inputSymbCount.addEventListener('blur', symbCountCheck)

button.onclick = () => {
    let symbArray = []
    for (let i = 0; i < mainSymbols.length; i++) symbArray.push(mainSymbols[i])

    if (checkboxSpecial.checked) {
        for (let i = 0; i < specialSymbols.length; i++) symbArray.push(specialSymbols[i])
    }

    let password = ''

    for (let i = 0; i < inputSymbCount.value; i++){
        const index = Math.floor(Math.random() * symbArray.length)
        const symbol = symbArray[index]
        password += symbol
    }

    inputPassword.value = password;
}

inputPassword.onclick = function () {
    navigator.clipboard.writeText(inputPassword.value)
}
