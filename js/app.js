// get input value function
function inputAmount(incomeValue){
    const getAmountInput = document.getElementById(incomeValue);
    const newAmountInput = getAmountInput.value;
    const amaountInput = parseFloat(newAmountInput);
    
    // clear
    // getAmountInput.value = ''; ইনপুট এর ভ্যালু গুলা ক্লিয়ার করবো নাকি করবো না ??
    return amaountInput;
}

// get text value function -- not work this function again check
/* function defaultBalance(balance){
    const defaultBalanceFiled = document.getElementById(balance);
    const defaultBalanceText = defaultBalanceFiled.innerText;
    const totaldefaultBalance = parseFloat(defaultBalanceText);
    return totaldefaultBalance;
}
 */

// total expemses amount
function totalExpensesAmount(){
    const foodCost = inputAmount('food-cost');
    const rentCost = inputAmount('rent-cost');
    const clothCost = inputAmount('cloth-cost');
    const totalExpensesAll = totaldefaultBalance + foodCost + rentCost + clothCost;
    return totalExpensesAll;
}

const defaultBalanceFiled = document.getElementById('total-expenses');
const defaultBalanceText = defaultBalanceFiled.innerText;
const totaldefaultBalance = parseFloat(defaultBalanceText);

document.getElementById('calculate-btn').addEventListener('click', function(){

    const myIncomeAmount = inputAmount('income-input');
    // console.log(myIncomeAmount);

    const foodCost = inputAmount('food-cost');
    const foodCostTotal = foodCost;
    // console.log(foodCost);

    const rentCost = inputAmount('rent-cost');
    const rentCostTotal = rentCost;
    // console.log(rentCost);

    const clothCost = inputAmount('cloth-cost');
    const clothCostTotal = clothCost;
    // console.log(clothCost);

    // let totalExpenses = defaultBalance('total-expenses');
    // let totalExpensesAmount = foodCostTotal + rentCostTotal + clothCostTotal;
    // console.log(totalExpensesAmount);
    // totalExpenses.innerText = totalExpensesAmount;

    // const mainBalance = defaultBalance('main-balance');
    // myIncomeAmount.value = mainBalance.innerText;

    // const defaultBalanceFiled = document.getElementById('total-expenses');
    // const defaultBalanceText = defaultBalanceFiled.innerText;
    // const totaldefaultBalance = parseFloat(defaultBalanceText);
    
    const balanceAmountField = document.getElementById('main-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const balanceAmountRemain = parseFloat(balanceAmountText);

    // const totalExpenses = totaldefaultBalance + foodCost + rentCost + clothCost;
    const totalExpenses = totalExpensesAmount();
    // defaultBalanceFiled.innerText = totalExpenses;

    const newBalanceRemain = myIncomeAmount - totalExpenses;
    // balanceAmountField.innerText = newBalanceRemain;

    if(totalExpenses > 0 && newBalanceRemain > 0){
        defaultBalanceFiled.innerText = totalExpenses;
        balanceAmountField.innerText = newBalanceRemain;
    }
    else if(totalExpenses > myIncomeAmount ){
        alert('much more expenses')
    }
    else {
        alert("Write possitive value! & number type (English type)*");
    }

})

// save 
document.getElementById('saving-btn').addEventListener('click', function(){
    
    const savingAmountParsent = inputAmount('saving-rate');

    const myIncomeAmount = inputAmount('income-input');

    const savingAmountField = document.getElementById('saving-amount');
    const savingAmountText = savingAmountField.innerText;
    const savingAmount = parseFloat(savingAmountText);

    const newSavingAmount = myIncomeAmount * (savingAmountParsent/100); 
    savingAmountField.innerText = newSavingAmount;

    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalanceField.innerText;
    const remainingBalance = parseFloat(remainingBalanceText);
    
    const balanceAmountField = document.getElementById('main-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const balanceAmountRemain = parseFloat(balanceAmountText);

    const newBalanceRemain = balanceAmountRemain - newSavingAmount;
    remainingBalanceField.innerText = newBalanceRemain;


})