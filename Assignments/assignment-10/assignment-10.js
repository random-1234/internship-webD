var number = parseInt(document.querySelector(".input").value);
let factorialBtn = document.querySelector("#factorial").addEventListener("click", factorial);
let fibBtn = document.querySelector("#fibonacci").addEventListener("click",fib);
let primeBtn = document.querySelector("#prime").addEventListener("click",prime);

function factorial(){
    var number = parseInt(document.querySelector(".input").value);
    fact = 1;
    for(i=2;i<=number;i++){
        fact = fact*i;

    }
    document.querySelector(".output").innerHTML = "The factorial of "+number+" is "+fact;
}

function fib(){
    var number = parseInt(document.querySelector(".input").value);
    var fib = [0,1];
    for(i=1;i<=number;i++){
        prevNumber = fib[i-1];
        currentNumber = fib[i];
        fib.push(prevNumber+currentNumber);
    }
    var fib_output = [];
    for (i=0;fib[i]<=number;i++){
        fib_output.push(fib[i]);
    }
    document.querySelector(".output").innerHTML="The fibonacci series till "+number+" is "+fib_output;

}

function prime(){
    var number = parseInt(document.querySelector(".input").value);
    var prime = 1;
    for(i=2;i<number;i++){
        if(number%i==0){
            prime = 0;
            break;
        }
    }
    if (prime===1){
        document.querySelector(".output").innerHTML=number+" is a prime number";
    }
    else{
        document.querySelector(".output").innerHTML=number+" is not a prime number";
    }

}