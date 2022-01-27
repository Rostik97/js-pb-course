// ####Задача 4
// Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
// Данная функция должна обязательно содержать проверку входного параметра,
// потому что принимать она может только числа от 1 до 7.
// f(1); // Воскресенье
// f(2); // Понедельник
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

let daysOfTheWeek = {
    1: 'Воскресенье',
    2: 'Понедельник',
    3: 'Вторник',
    4: 'Среда',
    5: 'Четверг',
    6: 'Пятница',
    7: 'Суббота'
}

function f(numberOfDay) {
    if (typeof numberOfDay !== 'number') {
        throw new Error('parameter type is not a Number')
    }
    if (numberOfDay < 1 || numberOfDay > 7) {
        throw new Error('parameter should be in the range of 1 to 7')
    }
    return daysOfTheWeek[numberOfDay];
}

console.log(f(2))
console.log(f(4))
console.log(f('1'))