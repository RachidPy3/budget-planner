const budgetDisplay = document.querySelector(".budget-display")
const numInput = document.querySelector(".num-input")
const nameInput = document.querySelector(".name-input")
const revenueBtn = document.querySelector(".revenue-btn")
const expenseBtn = document.querySelector(".expense-btn")
const moneyDisplay = document.querySelector("ul")

let sum = 0

const displayMoney = (color)=>{
    let value = numInput.value
    let nameValue = nameInput.value
    let li = document.createElement("li")
    li.textContent = `${nameValue}: ${value}$`
    if(value != 0){
        if(color == "red"){
            li.style.color = color
            sum -= Number(value)
        }else{
            li.style.color = color
            sum += Number(value)
        }
        localStorage.setItem("budget", sum.toString())
        let savedBudget = localStorage.getItem("budget")
        budgetDisplay.textContent = "Budget: " + savedBudget + "$"
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