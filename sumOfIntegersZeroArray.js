const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readl.question("Enter 3 numbers (give space after each number): ", (num) => {

    let numArray = num.split(" ");

    let add = 0;

    console.log("Your array is :[" + numArray + "]");
    
    for (let i = 0; i < 3; i++) {
        add = (parseInt(numArray[i]) + add);
    }
    
    console.log("Addition of three numbers: " + add);
    
    if (add == 0) {
        console.log("Sum of your array is 0");
    }else {
        console.log("Sum of your array is not 0");
    }
    readl.close();
  });
