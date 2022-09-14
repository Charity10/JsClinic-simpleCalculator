const display = document.getElementById( 'display-el')
const controlButtons = document.getElementById( 'btn').children


const symbols = [ '+', '-', 'X', '+', '/', '%', 'C', '=']
let firstValue = ""
let secondValue =""
let symbol = ""
let result =''


const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if (symbol === '+') result = firstValue + secondValue
    if (symbol === "-") result = firstValue - secondValue
    if (symbol === "X") result = firstValue * secondValue
    if (symbol === "/") result = firstValue / secondValue
    if (symbol === "%") result = firstValue % secondValue


    display.innerText = result
    firstValue = result
    secondValue = ''
}

for(let button of controlButtons) {
    button.addEventListener('click',  function() {
        const { innerText: btnValue } = button
        const btnValueIsSymbol = symbols.includes(btnValue)

        if (!secondValue && btnValue === '=') return null
       if (btnValue === 'C'){
        firstValue= secondValue = symbol =''
        return display.innerText =''
       }
        if (firstValue && btnValueIsSymbol) {
            secondValue && calculate()
            symbol = btnValue
        } else if (!symbol) firstValue += btnValue

        else if (symbol) secondValue += btnValue

         if (btnValue !== "=") display.innerText += btnValue

       
    })
}

