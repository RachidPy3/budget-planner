const budgetDisplay = document.querySelector(".budget-display")
const input = document.querySelector("input")
const revenueBtn = document.querySelector(".revenue-btn")
const expenseBtn = document.querySelector(".expense-btn")
const moneyDisplay = document.querySelector("ul")

let sum = 0

const displayMoney = (color)=>{
    let value = input.value
    let li = document.createElement("li")
    li.textContent = value + "$"
    if(value != 0){
        if(color == "red"){
            li.style.color = "red"
            moneyDisplay.appendChild(li)
            sum -= Number(value)
            budgetDisplay.textContent = "Budget: " + sum.toString() + "$"
        }else{
            li.style.color = "green"
            moneyDisplay.appendChild(li)
            sum += Number(value)
            budgetDisplay.textContent = "Budget: " + sum.toString() + "$"
        }
    }else {
        console.log("error")
    }
}

revenueBtn.addEventListener("click", ()=>{
    displayMoney("green")
})
expenseBtn.addEventListener("click", ()=>{
    displayMoney("red")
})