// Задача 8
//
// Напишите функцию `f` . Данная функция принимает один параметр:
// одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.
//     Обратите внимание что функция должна возвращать число 0,
//     если при проходе всех уровней не было найдено ни одного числа.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const arr2 = [[[[[1, 2]]]]];
const arr3 = [[[[[1, 2]]], 2], 1];
const arr4 = [[[[[]]]]];
const arr5 = [[[[[], 3]]]];
// const arr6 = [[[[['8'], 3]]]];

function f(arr) {
    if (Array.isArray(arr)) {
        let newArray = arr.flat(Infinity);
        return !newArray.length ? 0 : newArray.filter(value => {
            if (typeof value === 'number') {
                return value;
            } else {
                throw new Error('Find not a number !!')
            }
        }).reduce((a, b) => a + b)
    } else {
        throw new Error('Not an array!')
    }
}

console.log(f(arr))
console.log(f(arr2))
console.log(f(arr3))
console.log(f(arr4))
console.log(f(arr5))
