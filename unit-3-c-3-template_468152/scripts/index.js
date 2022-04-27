// Store the wallet amount to your local storage with key "amount"

function addtowallet(){
let amount = document.getElementById("amount").value;

let walletAmount = localStorage.getItem("amount") || 0

let total = Number(walletAmount) + Number(amount);

localStorage.setItem("amount",JSON.stringify(total));
document.getElementById("wallet").innerText = total;
}

function bookmovies(){

    window.location.href="movies.html"
}

