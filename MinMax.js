
let ran1=Math.floor(Math.random()*(1000-100+10))+100;
let ran2=Math.floor(Math.random()*(1000-100+10))+100;
let ran3=Math.floor(Math.random()*(1000-100+10))+100;
let ran4=Math.floor(Math.random()*(1000-100+10))+100;
let ran5=Math.floor(Math.random()*(1000-100+10))+100;

console.log("Random Number 1:"+ran1);
console.log("Random Number 2:"+ran2);
console.log("Random Number 3:"+ran3);
console.log("Random Number 4:"+ran4);
console.log("Random Number 5:"+ran5);

let min=0;
let max=0;

if(ran1>ran2)
{
        max=ran1;
        min=ran2;
}
else
{
        max=ran2;
        min=ran1;
}

if(ran3>max)
{
        max=ran3;
}else if(ran3<min)
{
        min=ran3;
}

if(ran4>max)
{
        max=ran4;
}else if(ran4<min)
{
        min=ran4;
}

if(ran5>max)
{
        max=ran5;
}else if(ran5<min)
{
        min=ran5;
}

console.log("Maximum value among 5 random numbers:"+max);
console.log("Minimum value among 5 random numbers:"+min);

