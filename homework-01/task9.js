var arr = [1, 2, 3, 4, 5, 6];
let swapped;
let stepsCount = arr.length - 1;
do {
    swapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
        if (arr[i] < arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
    }
    stepsCount -= 1;
} while (swapped);

console.log(arr)