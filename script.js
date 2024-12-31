var num1 = 0;
var num2= 0;
var operatorval = '';
const screen = document.querySelector(".screen");
const buttonval = document.querySelectorAll("#number");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
buttonval.forEach(item => {
    item.addEventListener("click", ()=>{
        screen.innerHTML = screen.innerHTML + item.innerHTML;
        num1 = num1*10 + parseInt(item.innerHTML);
        console.log(num1);
    })
        
});

operator.forEach(item =>{
    item.addEventListener("click",()=>{
        if(num1 != 0 && num2 != 0){
            equal.click();
        }
        num2 = num1;
        num1 = 0;
        screen.innerHTML = screen.innerHTML + item.innerHTML;
        operatorval += item.innerHTML;
    })
});

clear.addEventListener("click", ()=>{
    screen.innerHTML = "";
    num1 = 0;
    num2 = 0;
    operatorval = '';
})

equal.addEventListener("click", ()=>{
    console.log(num1,operatorval,num2);
    if(operatorval == '+'){
        console.log(num2+num1);
        screen.innerHTML = num2+num1;
        num1 = num2+num1;
    }
    else if(operatorval == '-'){
        console.log(num2 - num1);
        screen.innerHTML = num2-num1;
        num1 = num2-num1;
    }
    else if(operatorval == '*'){
        console.log(num2*num1);
        screen.innerHTML = num2*num1;
        num1 = num2*num1;
    }
    else if(operatorval == '/' ){
        console.log(num2/num1);
        screen.innerHTML = num2/num1;
        num1 = num2/num1;
    }
    else if(operatorval == '%'){
        screen.innerHTML = num2%num1;
        num1 = num2%num1;
    }
    else{
        clear.click();
        screen.innerHTML = "ERROR";
    }
    operatorval = '';
})

