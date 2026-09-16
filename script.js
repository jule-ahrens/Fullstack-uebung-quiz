function functionName (text1,text2,text3) {
    let result =text1 + " " + text2 + " " + text3;
    return result;
}

let text1 = "Hi,";
let text2 = "my Name is Jule.";
let text3 = "What´s your Name?";


for (let i =0; i <= 1; i++){
   console.log (functionName(text1, text2, text3)); 
}

function functionNumber (number1,number2){
    let result = number1 + number2;
    return result;
}

let number1 = 24;
let number2 = 56;

console.log (functionNumber(number1, number2));