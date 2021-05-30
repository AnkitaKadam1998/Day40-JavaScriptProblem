let randomNumArr = new Array();

let counter = 0;

for (let c = 1; c<=10; c++) {
	let ran = Math.floor(Math.random() * (1000 - 100 + 1))+100;
	randomNumArr.push(ran);
}

console.log("Array is [" + randomNumArr + "]");

let max = 0;
let min = 1000;
let secMax;
let secMin;

for(let count = 0; count < 10; count++ ){
	if (randomNumArr[count] > max){
		secMax = max;
		max = randomNumArr[count];
    } else if (randomNumArr[count] < min ){
		secMin = min;
		min = randomNumArr[count];
    }
}

console.log("Largest Number: " + max);
console.log("Second Largest Number: " + secMax);
console.log("Smallest Number: " + min);
console.log("Second Smallest Number: " + secMin);
