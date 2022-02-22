const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random();

if(randomNumber > 0.7){
    alert("Number is greater than 0.7");
}
else{
    alert("Number is not greater than 0.7");
}

if(randomNumber > 0.7 && randomNumberTwo > 0.7){
    alert("Both numbers are greater than 0.7");
}
else if(randomNumber < 0.2 || randomNumberTwo < 0.2){
    alert("One of the numbers was lesser than 0.2");
}
else{
    alert("Neither of the requirments were met");
}

let arr = [1,2,3,4];

for (let i = 0; i < arr.length; i++){
    alert(arr[i]);
}

for(let i = arr.length - 1; i >= 0; i--){
    alert(arr[i]);
}

console.log(randomNumber);
console.log(randomNumberTwo);