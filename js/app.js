// get input value function
function inputAmount(incomeValue) {
    const getAmountInput = document.getElementById(incomeValue);
    const newAmountInput = getAmountInput.value;
    const amaountInput = parseFloat(newAmountInput);
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
function totalExpensesAmount() {
    const foodCost = inputAmount('food-cost');
    const rentCost = inputAmount('rent-cost');
    const clothCost = inputAmount('cloth-cost');
    const totalExpensesAll = totaldefaultBalance + foodCost + rentCost + clothCost;
    return totalExpensesAll;
}

const defaultBalanceFiled = document.getElementById('total-expenses');
const defaultBalanceText = defaultBalanceFiled.innerText;
const totaldefaultBalance = parseFloat(defaultBalanceText);

document.getElementById('calculate-btn').addEventListener('click', function () {

    const myIncomeAmount = inputAmount('income-input');

    const balanceAmountField = document.getElementById('main-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const balanceAmountRemain = parseFloat(balanceAmountText);

    const totalExpenses = totalExpensesAmount();
    const newBalanceRemain = myIncomeAmount - totalExpenses;

    if (totalExpenses > 0 && newBalanceRemain > 0) {
        defaultBalanceFiled.innerText = totalExpenses;
        balanceAmountField.innerText = newBalanceRemain;
    }
    else if (totalExpenses > myIncomeAmount) {
        alert('Total Expeses much higher than income')
    }
    else {
        alert("Write possitive value! & number type (English type)*");
    }

})

// saveing rate calculation 
document.getElementById('saving-btn').addEventListener('click', function () {

    const savingRate = inputAmount('saving-rate');

    const myIncomeAmount = inputAmount('income-input');

    const savingAmountField = document.getElementById('saving-amount');
    const savingAmountText = savingAmountField.innerText;
    const savingAmount = parseFloat(savingAmountText);

    const newSavingAmount = myIncomeAmount * (savingRate / 100);
    savingAmountField.innerText = newSavingAmount;

    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalanceField.innerText;
    const remainingBalance = parseFloat(remainingBalanceText);

    const balanceAmountField = document.getElementById('main-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const balanceAmountRemain = parseFloat(balanceAmountText);

    if (balanceAmountRemain > newSavingAmount) {
        const newBalanceRemain = balanceAmountRemain - newSavingAmount;
        remainingBalanceField.innerText = newBalanceRemain;
    }
    else{
        alert("NOt Have Enough Balance Please much low saving");
        savingAmountField.innerText = '00';
    }
    
})