function table(){
    var name = document.querySelector("#item-name").value;
    var quantity= parseInt(document.querySelector("#quantity-input").value);
    var price = parseInt(document.querySelector("#item-price").value);
    var amount = quantity*price;
    var item_code = document.querySelector("#item-code-input").value;
    document.querySelector("#item").innerText = name;
    document.querySelector("#price").innerText = price;
    document.querySelector("#quantity").innerText = quantity;
    document.querySelector(".amount").innerText = "Amount payable: "+amount;
    document.querySelector("#item-code").innerText = item_code;
    document.getElementsByClassName("output-div")[0].style.visibility="visible";
    document.querySelector(".input-div").style.display="none";
}
