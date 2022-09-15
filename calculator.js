const display = document.getElementById( 'display-el')
const history = document.getElementById( 'display2')
const controlButtons = document.getElementById( 'btn').children


const symbols = [ '+', '-', 'X', '+', '/', '%', 'C', '=']
let firstValue = ""
let secondValue =""
let symbol = ""
let result =''
let savedResult = []


const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
   

    if (symbol === '+')  result = firstValue + secondValue
    if (symbol === "-")  result = firstValue - secondValue
    if (symbol === "X")  result = firstValue * secondValue
    if (symbol === "/") result = firstValue / secondValue
    if (symbol === "%")  result = firstValue % secondValue

    display.innerText = result
    firstValue =  result
    secondValue = ''
}

    // savedResult = result
    
function saved() {
    if (symbol === "="){
       history.innerText = 9
    }
}


for(let button of controlButtons) {
    button.addEventListener('click',  function() {
        const { innerText: btnValue } = button
        const btnValueIsSymbol = symbols.includes(btnValue)
       
        if (!secondValue && btnValue === '=') return null

       
        

       if (btnValue === 'C'){
        firstValue= secondValue = symbol =''
        history.innerText = savedResult = []
        return display.innerText =''

       }

        if (firstValue && btnValueIsSymbol) {
            secondValue && calculate() 
            symbol = btnValue
            // history.innerText = savedResult
               
        }
        else if (firstValue === 0) {
            return secondValue
        }
        
        else if (!symbol) firstValue += btnValue

        else if (symbol) secondValue += btnValue

         if (btnValue !== "=" ) {
            display.innerText += btnValue
            savedResult += btnValue
            console.log(savedResult) 
         } 

         if (btnValue === "=" ) {
          
            history.innerText = savedResult
            savedResult = result   
         } 


       
    })
}

