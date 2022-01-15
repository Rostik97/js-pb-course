let arr = [1, 2, 3, -5, -2, 1, -4];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (!String(arr[i]).includes('-')) {
        sum += arr[i];
    }
}
console.log(sum)

