// ####Задача 9
//
// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
//     Первым параметром функция принимает значение, которым заполнять массив,
//     а вторым — сколько элементов должно быть в массиве.
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число
// arrayFill('x',5); // [x,x,x,x,x]
// ```

function arrayFill(arrValue, arrSize) {
    if (typeof arrValue === 'number' || typeof arrValue === 'string' ||
        typeof arrValue === 'object' || Array.isArray(arrValue)) {
        if (typeof arrSize === 'number') {
            return Array(arrSize).fill(arrValue);
        } else {
            throw new Error("Second param must be a number!")
        }
    } else {
        throw new Error("Wrong first param type!")
    }
}

console.log(arrayFill('x', 5))
console.log(arrayFill(0, 12))
console.log(arrayFill({key: 'poop'}, 4))