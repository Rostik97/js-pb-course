// ####Задача 5
//
// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число
//     ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```

const arr = [1, 2, 3, 6, 7, 9];


console.log(reduce(arr, (a, b) => a * b, 1))

function reduce(arr, cb, acc) {
    if (Array.isArray(arr)) {
        if (typeof cb === 'function') {
            if (typeof acc === 'number' || typeof acc === 'string') {
                for (let i = 0; i < arr.length; i++) {
                    acc = cb(acc, arr[i], i, arr)
                }
                return acc;
            } else {
                throw new Error("Third param must be number or string!");
            }
        } else {
            throw new Error("Second param not a function!");
        }
    } else {
        throw new Error("First param not an array!");
    }
}