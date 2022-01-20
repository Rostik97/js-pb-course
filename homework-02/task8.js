// ####Задача 8
//
// Дан массив с числами `[1, 2, 3]`.
// Создайте функцию `f`, которая принимает данный массив в качестве параметров,
// а затем последовательно выводит на экран его элементы.
// Обязательно нужно использовать рекурсию. Использовать цикл запрещено.
// Данная функция должна обязательно содержать проверку входного параметра,
// потому что принимать она может только не пустой массив.
// f([1,2,3]);
// // 1
// // 2
// // 3
// f(1,2,3) // Error: parameter type should be an array
// f('Content') // Error: parameter type should be an array
// f([]) // Error: parameter can't be an empty

function f(array) {
    if (Array.isArray(array)) {
        if (array.length > 0) {
            console.log(array.shift())
            array.length > 1 ? f(array) : console.log(array.shift())
        } else {
            throw new Error('parameter can`t be an empty')
        }
    } else {
        throw new Error('parameter type should be an array')
    }
}

f([1, 2, 3, 5, 6])
