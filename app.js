//1
function printNumbers(num) {

    if (num < 1) {
        console.error('num must be greater than 1');
        return;
    }

    if (!Number.isInteger(num)) {
        num = Math.trunc(num);
    }

    for (var i = 1; i <= num; i++) {
        console.info(i);
    }
}

printNumbers(10);
//2
function sum(numArray) { 
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
      let Addindex = numArray[a];
      add += Addindex;
    } 
    return add;
  }
  
  console.log(sum([1, 2, 3, 4, 5]));
  //3
  function isEven(n) {
    return (n % 2 == 0);
}

let n = 101;

isEven(n) ? console.log("Even") : console.log("Odd");
//4
function checkNumber(num) {
    return Math.sign(num) === 1 ? "Positive" : Math.sign(num
    ) === -1 ? "Negative" : "Zero";
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
//5
function reverseString(str){
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}
reverseString("fikratNazirli");
//6
const weekDAY= new Array(7);
weekDAY[0] = 'Sunday' ;
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';

function returnDay(x){
  return (x < 1) || (x > 7) ? null : weekDAY[x];
}
console.log(returnDay(4));
//7
var Calculator = {}; //

Calculator.add = function () {
    var addValue = 0;
    for (var i = 0; i < arguments.length; i++) {
        addValue = addValue + arguments[i];
    }
    return addValue;
}
Calculator.subtract = function () {
    var subtractValue = 0;
    for (var i = 0; i < arguments.length; i++) {
        subtractValue = subtractValue - arguments[i];
    }
    return subtractValue;
}

console.log(Calculator.add(1,10)); // add = musbet
console.log(Calculator.subtract(2,12)); //subtract = menfi
//8
function makeCounter() {
    let count = 0;
    
    return function() {
      return count++;
    }
  }
  
  let counter = makeCounter()
  
  counter()
  
  alert(counter())
