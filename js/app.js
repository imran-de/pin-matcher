// 4digit pin generate
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    if (stringPin.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
// generated pin show on client site
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-number').value = pin;
}

//make functional number key
document.getElementById('number-key').addEventListener('click', function (event) {
    const numberInput = document.getElementById('input-number');
    let number = numberInput.value;
    if (!isNaN(event.target.innerText)) {
        number += event.target.innerText;
        numberInput.value = number;
    } else if (event.target.innerText == 'C') {
        numberInput.value = '';
    }
    if (event.target.innerText == 'Submit') {
        matchPin();
        numberInput.value = '';
    }
});

// match pin 
function matchPin() {
    const typedPin = document.getElementById('input-number').value;
    const generatePin = document.getElementById('pin-number').value;
    const misMatched = document.getElementById('mismatch');
    const matched = document.getElementById('matched');
    if (typedPin == generatePin && typedPin > 0) {
        matched.style.display = 'block';
        misMatched.style.display = 'none';
    } else {
        matched.style.display = 'none';
        misMatched.style.display = 'block';
    }
}