function clickEvent() {
    const input = document.getElementById('inputText').value.match(/\d+|[+\-*/]/g);
    if (input === "exit") {
        alert("종료되었습니다.");
        return;
    }

    messagePrint(Calculator(input));
}

function Calculator(value) {
    if (value === null || value === undefined) {
        return "정확한 계산식이 아닙니다.";
    }

    return value.reduce((acc, cur, i) => {
        if (i % 2 !== 0) {
            switch(cur) {
                case '+': acc += value[i + 1]; break;
                case '-': acc -= value[i + 1]; break;
                case '*': acc *= value[i + 1]; break;
                case '/': acc /= value[i + 1]; break;
            }
        }
        return acc;
    }, Number(value[0]));
}

function messagePrint(message) {
    document.getElementById('printText').innerHTML = `${message}`;
}

// console.log("1 + 2 / 12 * 2".includes(' '));
// console.log("1+2/12*2".split(''));