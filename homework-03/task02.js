// ####Задача 2
//
// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});

const arr = [1, 2, 3, 6, 7, 8];

let newArr = filter(arr, (number) => number > 3)
console.log(newArr)

function filter(arr, cb) {
    if (Array.isArray(arr)) {
        if (typeof cb === 'function') {
            let filteredArray = [];
            for (let i = 0; i < arr.length; i++) {
                if (cb(arr[i], i, arr)) {
                    filteredArray.push(arr[i])
                }
            }
            return filteredArray;
        } else {
            throw new Error("Second param not a function!");
        }
    } else {
        throw new Error("First param not an array!");
    }
}
