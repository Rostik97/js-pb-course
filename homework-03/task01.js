// ####Задача 1
//
// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});

const arr = [1, 2, 3, 6, 7,8];

forEach(arr, (number, i, arr) => {
    console.log('Number: ' + number + ' Index: ' + i + ' Array: ' + arr)
})


function forEach(arr, cb) {
    if (Array.isArray(arr)) {
        if (typeof cb === 'function') {
            for (let i = 0; i < arr.length; i++) {
                cb(arr[i], i, arr)
            }
        } else {
            throw new Error("Second param not a function!")
        }
    } else {
        throw new Error("First param not an array!")
    }
}