const errorMessage = document.getElementById('error-msg');
let currentBalance = 0;


// set click event for calculate button
document.getElementById("calculate-btn").addEventListener('click', function () {
    errorMessage.innerHTML = '';    // empty error message
    currentBalance = 0;

    const income = checkInput('Income');
    const foodExpenses = checkInput('Food');
    const rent = checkInput('Rent');
    const clothesExpenses = checkInput('Clothes');
    const expenses = foodExpenses + rent + clothesExpenses;   // sum of expenses
    if (!isNaN(expenses) && !isNaN(income)) {   // if no error occur
        if (income >= expenses) {   // Income greater than expenses
            currentBalance = income - expenses;
            setValue('total-expenses', expenses);
            setValue('balance', currentBalance);
        }
        else {
            showError('Expenses exceeded Income');
        }
    }
});
// set click event for save button
document.getElementById("save-btn").addEventListener('click', function () {
    errorMessage.innerHTML = '';    // empty error message

    const income = checkInput('Income');
    const savingPercentage = checkInput('Save');
    if (document.getElementById('balance').innerText != '') {
        if (!isNaN(savingPercentage) && !isNaN(income)) {   // if no error occur
            if (savingPercentage >= 0 && savingPercentage <= 100) { // saving percentage should be between 0 and 100
                const savings = income * savingPercentage / 100;
                if (currentBalance >= savings) {  // balance is greater than savings
                    setValue('saving', savings);
                    setValue('remain-balance', currentBalance - savings);
                }
                else {
                    showError("Savings exceeded Balance");
                }
            }
            else {
                showError('Saving should be between 0% and 100%');
            }
        }
    }
    else {
        showError('Calculate expenses first');
    }
});


// check for error in input
function checkInput(inputID) {
    const input = document.getElementById(inputID);
    if (isNaN(input.value)) {   // input not number
        showError("'" + inputID + "' should be a number");
    }
    else if (input.value < 0) { // input is negative
        showError("'" + inputID + "' should be positive");
    }
    else if (isNaN(parseFloat(input.value))) {  // input empty
        showError("'" + inputID + "' is Empty");
    }
    else {
        return parseFloat(input.value);
    }
}
// show error message
function showError(msg) {
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = msg;
    errorParagraph.classList.add("border", "border-2", "border-warning", "rounded-3", "bg-danger", "text-white", "mb-1");
    errorMessage.appendChild(errorParagraph);
}
//  set value by ID
function setValue(ID, value) {
    document.getElementById(ID).innerText = value;
}