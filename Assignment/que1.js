//Explain the concept of operator precedence in JavaScript. Provide an example where understanding operator precedence is crucial for correct code execution.

let a =14;
let b = 2;

add(a,b);

function add(x,y){
    console.log(x+y);
    sub(x,y);
    mul(x,y);
    div(x,y);
    mod(x,y);
}


function sub(x,y){
    console.log(x-y);
}
function mul(x,y){
    console.log(x*y);
}
function div(x,y){
    console.log(x/y);
}
function mod(x,y){
    console.log(x%y);
}

a+=3;
console.log(a);

a-=3
console.log(a);

let m=5;
let n=6;

console.log(m==n);
console.log(m>=n);
console.log(m<=n);
console.log(m===n);
console.log(m!==n);

++m;
console.log(m);
--n;
console.log(n);