// Get Input Value Function
function getInputValue(id) {
    let inputValue = document.getElementById(id);
    inputValue = parseFloat(inputValue.value);
    document.getElementById(id).value = "";
    return inputValue;
}

// Get and Update Total Deposit and Withdraw
function updateTotal(id, newAmount) {
    const previousAmount = getInnerTextValue(id);
    document.getElementById(id).innerText = previousAmount + newAmount;
}

function getInnerTextValue(id) {
    let balanceAmount = document.getElementById(id);
    balanceAmount = parseFloat(balanceAmount.innerText);
    return balanceAmount;
}


// Get and Update Balance Total
function updateBalance(newAmount, isAdd) {
    const balanceAmount = getInnerTextValue("display-balance");
    // Update Balance Total 
    let newBalance;
    if (isAdd == true) {
        newBalance = balanceAmount + newAmount;
    } else {
        newBalance = balanceAmount - newAmount;
    }
    document.getElementById("display-balance").innerText = newBalance;
    // return balanceAmount;
}

function updateBalanceSecWay() {
    const depositTotal = getInnerTextValue("display-deposit");
    const withdrawTotal = getInnerTextValue("display-withdraw");
    const initialBalance = 1290;
    const newBalanceTotal = (depositTotal + initialBalance) - withdrawTotal;
    document.getElementById("display-balance").innerText = newBalanceTotal;
}


// Event Handle by Deposit Btn
document.getElementById("deposit-btn").addEventListener("click", function() {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotal("display-deposit", depositAmount);
        // updateBalance(depositAmount, true);
        updateBalanceSecWay();
    }
});

// Event Handle by withdraw Btn
document.getElementById("withdraw-btn").addEventListener("click", function() {
    const withdrawAmount = getInputValue("withdraw-input");
    if (withdrawAmount > 0 && withdrawAmount <= getInnerTextValue("display-balance")) {
        updateTotal("display-withdraw", withdrawAmount);
        // updateBalance(withdrawAmount, false);
        updateBalanceSecWay();
    }
});