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
            li.style.color = color
            sum -= Number(value)
        }else{
            li.style.color = color
            sum += Number(value)
        }
        budgetDisplay.textContent = "Budget: " + sum.toString() + "$"
        moneyDisplay.appendChild(li)
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