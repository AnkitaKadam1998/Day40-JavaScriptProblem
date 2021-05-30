
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
readl.question("Enter range of numbers (give space after entering each number): ", (number) => {
    
    let numberArray = number.split(" ");

    console.log(numberArray);

    let a = parseInt(numberArray[0]);

    let b = parseInt(numberArray[1]);

    console.log("Enter minimum number of your range : " + a);

    console.log("Enter minimum number of your range : " + b);

    
    let repeatedNumInRange = new Array();

    let counter = 0;

   
    while (a > 0 && a < b) {
        let check = ( a % 11 );
            if (check == 0) {
                repeatedNumInRange[counter++] = a;
                (a++);
            } else {
                (a++);
            }
    }
        
    console.log("[" + repeatedNumInRange + "]");

    readl.close();
});
