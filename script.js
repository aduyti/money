document.getElementById("input-container").addEventListener('keyup', function (event) {
    if (event.target.tagName == 'INPUT') {
        if (checkInput(event.target.value)) {
            console.log(event.target.value);
        }
    }
});
// verify input 
function checkInput(inputNumber) {
    if (isNaN(inputNumber)) {   // if input is not a number  
        console.error('NaN');
    }
    else if (inputNumber < 0) { // if input is negative number
        console.error('Negative')
    }
    else {
        return true;
    }
    return false;
}