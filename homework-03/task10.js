// ####Задача 10
//
// Создать имплементацию функции `reverse`,
//     которая принимает массив в качестве параметра,
//     а возвращает массив только в обратном порядке.
//
//     Функция должна содержать проверки
//     - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]

const arr = [3, 2, 1];
const arr1 = [1, 4, 6, 7, 8, 9];
const arr2 = "";
const arr3 = [];

function reverse(arr) {
    if (Array.isArray(arr)) {
        if (!arr.length) {
            throw new Error('Empty array!')
        }
        let ret = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            ret.push(arr[i]);
        }
        return ret;
    }
}

console.log(reverse(arr))
console.log(reverse(arr1))
console.log(reverse(arr2))
console.log(reverse(arr3))