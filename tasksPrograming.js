// Задача 1
// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка.
// Пример:
// «Москва, Санкт-Петербург, Воронеж.»

function arrCities(arr) {
  return `${arr.join(', ')}.`;
}

let cities = ["Москва", "Санкт-Петербург", "Воронеж"];
console.log(arrCities(cities));

// Задача 2 Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.

function roundFive(float) { 
  if (float % 5 <= 2.5) {
    return (float - float % 5);
  } else { 
    return (float - float % 5) + 5;
  }
} 

console.log(roundFive(27.8)); //30


// Задача 3 Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

function caseComputer(int) { 
  let str = String(int);

  if (int < 10) { 
    str = "0" + str;
  }

  let endStr = str[str.length - 2] + str[str.length - 1];
  if (endStr == "01") {
    return `${int + ' компьютер'}`;
  } else if (endStr == "02" || endStr == "03" || endStr == "04") {
    return `${int + ' компьютера'}`;
  } else { 
    return `${int + ' компьютеров'}`;
  }
}

console.log(caseComputer(1)); // 1 компьютер

// Задача 4 Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

function isPrime(num) {
  if ((num < 2)) {
    return false;
  } 
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) { 
      return false;
    } 
  }
  return true;
}

console.log(isPrime(17)); //true


// Задача 5 Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями. Пример: [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1] На выходе [1, 17]

const twoArr = (arr1, arr2) => {
  const arr1Doubles = arr1.filter((el, i, arr) =>arr.indexOf(el) !== i);
  const arr2Doubles = arr2.filter((el, i, arr) =>arr.indexOf(el) !== i);

  return arr1Doubles.filter((el) => arr2Doubles.includes(el));
}

console.log(twoArr([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
)); //[ 1, 17 ]



// Задача 6 Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения.

function multipleTable(n) { 
  let row = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j < 10) {
        row += i * j + '  ';
      } else { 
        row += i * j + ' ';
      }
    }
    row += ' \n';
  }
  return row;
}


console.log(multipleTable(9));