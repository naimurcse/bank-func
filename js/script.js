// Get Input Value Function
function getInputValue(id) {
    let inputValue = document.getElementById(id);
    inputValue = inputValue.value;
    inputValue = parseFloat(inputValue);
    document.getElementById(id).value = "";
    return inputValue;
}

// Get and Update Text Value
function updateValue(id, newAmount) {
    let amount = document.getElementById(id);
    amount = amount.innerText;
    amount = parseFloat(amount);
    const total = amount + newAmount;
    document.getElementById(id).innerText = total;
}


// Event Handle by Deposit Btn
document.getElementById("deposit-btn").addEventListener("click", function() {
    const depositAmount = getInputValue("deposit-input");
    updateValue("display-deposit", depositAmount);
});

// Event Handle by Withdrow Btn
document.getElementById("withdrow-btn").addEventListener("click", function() {
    const withdrowAmount = getInputValue("withdrow-input");
    updateValue("display-withdrow", withdrowAmount);
});