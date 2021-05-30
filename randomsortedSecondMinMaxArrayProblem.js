
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

for (let i = 0; i<10; i++){

    for(let j = 0; j<10-i-1; j++){

        if (randomNumArr[j] > randomNumArr[(j+1)]) {
            let temp = randomNumArr[j];
            randomNumArr[j]= randomNumArr[(j+1)];
            randomNumArr[(j+1)] = temp;
        }
    }
}

console.log("Sorted Array: [" + randomNumArr + "]");

console.log("Largest Number: " + randomNumArr[9]);
console.log("Second Largest Number: " + randomNumArr[8]);
console.log("Smallest Number: " + randomNumArr[0]);
console.log("Second Smallest Number: " + randomNumArr[1]);
