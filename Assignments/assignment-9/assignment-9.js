let btnAdd = document.querySelector("#add").addEventListener("click", table);
let btnCalculate = document.querySelector("#calculate").addEventListener("click",calculate);

function table(){
    let item = document.querySelector("#item-name").value;
    let quantity = parseInt(document.querySelector("#quantity-input").value);
    let item_code  = document.querySelector("#item-code-input").value;
    let item_price = parseInt(document.querySelector("#item-price").value);
    let table = document.querySelector("#output-table");
    let new_row = table.insertRow();
    new_row.insertCell().innerHTML = item;
    new_row.insertCell().innerHTML = quantity;
    new_row.insertCell().innerHTML = item_code;
    new_row.insertCell().innerHTML = item_price;
}

function calculate(){
    let table = document.querySelector("#output-table");
    var amount = 0;
    for(i=1;i<table.rows.length;i++){
        amount += parseInt(table.rows[i].cells[1].innerHTML)*parseInt(table.rows[i].cells[3].innerHTML);
    }
    let input_div = document.querySelector(".input-div");
    input_div.style.display="none";
    let amount_div =  document.querySelector(".amount");
    amount_div.innerHTML = "Amount Payable: Rs. "+amount;
}