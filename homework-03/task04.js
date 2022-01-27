// ####Задача 4
//
// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
//     ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```

const arr = [1, 2, 3, 6, 7, 8];

console.log(some(arr, (number) => number > 7))

function some(arr, cb) {
    if (Array.isArray(arr)) {
        if (typeof cb === 'function') {
            for (let i = 0; i < arr.length; i++) {
                if (cb(arr[i], i, arr)) {
                    return true;
                }
            }
            return false;
        } else {
            throw new Error("Second param not a function!");
        }
    } else {
        throw new Error("First param not an array!");
    }
}
