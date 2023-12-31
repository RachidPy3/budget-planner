const budgetDisplay = document.querySelector(".budget-display")
const numInput = document.querySelector(".num-input")
const nameInput = document.querySelector(".name-input")
const revenueBtn = document.querySelector(".revenue-btn")
const expenseBtn = document.querySelector(".expense-btn")
const moneyDisplay = document.querySelector("ul")

let sum = 0

const displayMoney = (color)=>{
    let nameValue = nameInput.value
    let value = numInput.value
    let li = document.createElement("li")
    li.textContent = `${nameValue}: ${value}$`
    if(value === 0 || nameValue === ""){
        console.log('error')
    }else {
        if(color == "red"){
            sum -= Number(value)
        }else{
            sum += Number(value)
        }
        li.style.color = color
        localStorage.setItem("budget", sum.toString())
        let savedBudget = localStorage.getItem("budget")
        budgetDisplay.textContent = `Budget: ${savedBudget}$`
        moneyDisplay.appendChild(li)
    }
}

const reset = ()=>{
    numInput.value = ""
    nameInput.value = ""
}

revenueBtn.addEventListener("click", ()=>{
    displayMoney("green")
    reset()
})

expenseBtn.addEventListener("click", ()=>{
    displayMoney("red")
    reset()
})