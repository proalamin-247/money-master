// get input value function
function inputAmount(incomeValue){
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

    const defaultBalanceFiled = document.getElementById('total-expenses');
    const defaultBalanceText = defaultBalanceFiled.innerText;
    const totaldefaultBalance = parseFloat(defaultBalanceText);
    

    const totalExpenses = totaldefaultBalance + foodCost + rentCost + clothCost;
    defaultBalanceFiled.innerText = totalExpenses;

    const balanceAmountField = document.getElementById('main-balance');
    const balanceAmountText = balanceAmountField.innerText;
    const balanceAmountRemain = parseFloat(balanceAmountText);

    const newBalanceRemain = myIncomeAmount - totalExpenses;
    balanceAmountField.innerText = newBalanceRemain;

})