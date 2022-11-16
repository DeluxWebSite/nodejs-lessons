const colors = require('colors')

let num1 = Math.round(process.argv[2])
let num2 = Math.round(process.argv[3])
let arrNumber = [];

if (isNaN(num1) || isNaN(num2)) {
    console.log(colors.bgRed('введено не положительное число'))
} else {
    console.log(colors.bgBlue(`введен диапазон чисел от  ${num1}  до ${num2}`))
    for (let i = num1; i <= num2; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                arrNumber.push(i);
            }
        }
    }

    if (arrNumber.length == 0) {
        console.log(colors.bgRed('натуральных чисел нет'))
    } else {
        console.log(arrNumber);

        for (let i = 0; i < arrNumber.length; i++) {

            console.log(colors.red(arrNumber[i]));

            if (isNaN(arrNumber[i + 1])) {
                break
            } else {
                console.log(colors.yellow(arrNumber[i + 1]))
                i++;
            }
            if (isNaN(arrNumber[i + 1])) {
                break
            } else {
                console.log(colors.green(arrNumber[i + 1]))
                i++;
            }
        }
    }

}

