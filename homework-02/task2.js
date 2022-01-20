// ####Задача 2
// Напишите функцию `f` которая возвращает сумму всех параметров.
// Количество параметров может быть любым.
// Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

function f(...params) {
    let numOrNot = function (value) {
        if (isNaN(value)) {
            throw new Error('parameter type is not a Number')
        } else {
            return value;
        }
    }
    return params.reduce((a, b) => numOrNot(a) + numOrNot(b));
}

console.log(f(1, 2, 3))
console.log(f(1, 1, 1, 1, 1))
console.log(f(1, 1, 1, "r", '2'))