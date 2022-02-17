const errorMessage = document.getElementById('error-msg');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
let currentBalance = 0;


// click event for calculate button
document.getElementById("calculate-btn").addEventListener('click', function (event) {
    errorMessage.innerHTML = '';
    currentBalance = 0;
    const income = checkInput('Income');
    const foodExpenses = checkInput('Food');
    const rent = checkInput('Rent');
    const clothesExpenses = checkInput('Clothes');
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