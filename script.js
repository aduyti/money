const errorMessage = document.getElementById('error-msg');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingAmount = document.getElementById('saving');
let currentBalance = 0;


// set click event for calculate button
document.getElementById("calculate-btn").addEventListener('click', function () {
    errorMessage.innerHTML = '';
    currentBalance = 0;
    const income = checkInput('Income');
    const foodExpenses = checkInput('Food');
    const rent = checkInput('Rent');
    const clothesExpenses = checkInput('Clothes');
    const expenses = foodExpenses + rent + clothesExpenses;   // sum of expenses
    if (!isNaN(expenses) && !isNaN(income)) {   // if no error occur
        if (income >= expenses) {   // Income greater than expenses
            currentBalance = income - expenses;
            totalExpenses.innerText = expenses;
            balance.innerText = currentBalance;
        }
        else {
            showError('Expenses exceeded Income');
        }
    }
});
// set click event for save button
document.getElementById("save-btn").addEventListener('click', function () {
    const income = checkInput('Income');
    const savingPercentage = checkInput('Save');
    if (!isNaN(savingPercentage) && !isNaN(income)) {   // if no error occur
        if (savingPercentage >= 0 && savingPercentage <= 100) { // saving percentage should be between 0 and 100
            const savings = income * savingPercentage / 100;
            const saveFrom = (currentBalance || income);
            if (saveFrom >= savings) {  // balance is greater than savings
                savingAmount.innerText = savings;
                document.getElementById("remain-balance").innerText = saveFrom - savings;
            }
            else {
                showError("Savings exceeded Balance")
            }
        }
        else {
            showError('Saving should be between 0 and 100%');
        }
    }
});


// check for error in input
function checkInput(inputID) {
    const input = document.getElementById(inputID);
    if (isNaN(input.value)) {   // input not number
        showError(inputID + ' should be a number');
    }
    else if (input.value < 0) { // input is negative
        showError(inputID + ' should be positive');
    }
    else if (isNaN(parseFloat(input.value))) {  // input empty
        showError(inputID + ' is Empty');
    }
    else {
        return parseFloat(input.value);
    }
}

function showError(msg) {
    console.error(msg);
}