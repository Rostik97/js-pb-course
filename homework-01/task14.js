let n = 1000;
let num = 0;
do {
    n /= 2;
    num++;
} while (n > 50)

console.log("Count: " + num);
console.log("Result value: " + n);