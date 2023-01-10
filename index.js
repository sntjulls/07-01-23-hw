// домашня робота 07.01
// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

/**
 *
 * @param {number} userValue
 * @returns {string}
 */
const input = prompt();
const userValue = function (value) {
  if (value % 2 === 0) {
    return 'even';
  }
  return 'odd';
};
console.log(userValue(10));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

/**
 *
 * @param {any} argument1
 * @param {any} argument2
 * @returns {any || null}
 */
const getResult = function (argument1, argument2) {
  if (typeof argument1 === typeof argument2) {
    if (argument1 > argument2) {
      return argument1;
    }
    if (argument1 === argument2) {
      return null;
    }
  }
  return null;
};
console.log(getResult('4', '9'));
