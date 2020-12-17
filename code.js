//вариант используя цикл

function padString(str, strLength, sign, toRight = true) {
    let i = strLength - str.length;
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            if (toRight) {
                str += sign;
            } else {
                str = sign + str;
            }
        }
    }
    return str;
}

console.log( padString('text', 5, '*', false) ); //проверка

//вариант используя repeat

function padString(str, strLength, sign, toRight = true) {
    let i = strLength - str.length;
    if (i > 0) {
        if (toRight) {
            str += sign.repeat(i);
        } else {
            str = sign.repeat(i) + str;
        }
    }
    return str;
}

console.log( padString('text', 5, '*', false) ); //проверка

//вариант используя repeat и тернарный оператор

function padString(str, strLength, sign, toRight = true) {
    let i = strLength - str.length;
    if (i > 0) {
        return (toRight) ? (str + sign.repeat(i)) : (sign.repeat(i) + str);
    }
    return str;
}

console.log( padString('text', 5, '*', false) ); //проверка