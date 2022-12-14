const initialPrice = document.querySelector('#initial-price')
const stockQuantity = document.querySelector('#stocks-quantity')
const currentPrice = document.querySelector('#current-price')
const submitButton = document.querySelector('#submit')
const outputBox = document.querySelector('#output-box')




function submitHandler() {
    let ip = Number(initialPrice.value)
    let qty = Number(stockQuantity.value)
    let cp = Number(currentPrice.value)

    if (ip < 0 || qty < 0 || cp < 0) {
        showMessage(`You can not enter -ve value`)
        return;
    }
    calculateProfitAndLoss(ip, qty, cp)
}

function calculateProfitAndLoss(inital, quantity, current) {

    if (inital > current) {
        let loss = inital - current // 500 - 400 = 100
        let lossInQuantity = (inital - current) * quantity; // (500 - 400) * 2 = 200
        let lossPercentage = (loss / inital) * 100
        console.log(lossPercentage, "LOSS");
        showMessage(`the loss is ₹ ${lossInQuantity} and loss percentage is ${lossPercentage.toFixed(2)}% `)

    } else if (current > inital) {
        let profit = current - inital
        let profitInQuantity = (current - inital) * quantity;
        let profitPercentage = (profit / inital) * 100
        showMessage(`the profit is ₹ ${profitInQuantity} and profit percentage is ${profitPercentage.toFixed(2)}%`)

    } else {
        showMessage(`no pain ,no gain`)
    }
}

function showMessage(message) {

    outputBox.innerHTML = message
}

submitButton.addEventListener("click", submitHandler)
