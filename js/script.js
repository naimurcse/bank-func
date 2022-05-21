// Get Input Value Function
function getInputValue(id) {
    let inputValue = document.getElementById(id);
    inputValue = inputValue.value;
    inputValue = parseFloat(inputValue);
    document.getElementById(id).value = "";
    return inputValue;
}

// Get and Update Total Deposit and Withdraw
function updateTotal(id, newAmount) {
    let previousAmount = document.getElementById(id);
    previousAmount = previousAmount.innerText;
    previousAmount = parseFloat(previousAmount);
    const newTotal = previousAmount + newAmount;
    document.getElementById(id).innerText = newTotal;
}

// Get and Update Balance Total
function updateBalance(newAmount, isAdd) {
    let balanceAmount = document.getElementById("display-balance");
    balanceAmount = balanceAmount.innerText;
    balanceAmount = parseFloat(balanceAmount);

    // Update Balance Total
    let newBalance;
    if (isAdd == true) {
        newBalance = balanceAmount + newAmount;
    } else {
        newBalance = balanceAmount - newAmount;
    }
    document.getElementById("display-balance").innerText = newBalance;
}


// Event Handle by Deposit Btn
document.getElementById("deposit-btn").addEventListener("click", function() {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotal("display-deposit", depositAmount);
        updateBalance(depositAmount, true);
    }
});

// Event Handle by withdraw Btn
document.getElementById("withdraw-btn").addEventListener("click", function() {
    const withdrawAmount = getInputValue("withdraw-input");
    if (withdrawAmount > 0) {
        updateTotal("display-withdraw", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
});