// ####Задача 1
//
// Напишите функцию `f`, которая возвращает куб числа.
// Число передается параметром.
// Данная функция должна обязательно содержать проверку входного параметра,
// потому что принимать она может только число.

function f(value) {
    if (typeof value === 'number') {
        return value * value * value;
    } else {
        throw new Error('parameter type is not a Number')
    }
}

console.log(f(2))
console.log(f('2'))