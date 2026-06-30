function clickEvent() {
    const input = document.getElementById('inputText').value.match(/\d+|[+\-*/]/g);
    if (input === "exit") {
        alert("종료되었습니다.");
        return;
    }

    printMessage(calculator(input));
}

function calculator(value) {
    if (value === null || value === undefined) {
        return "정확한 계산식이 아닙니다.";
    }

    // 여기서 곱셈과 나눗셈을 계산후 value에서 인덱스를 검색후 *과 / 계산식과 그 수를 제거한다.
    // while은 *과 /이 없을때까지 반복한다.
    while (value.includes("*") || value.includes("/")) {
        const index = value.findIndex(x => x === "*" || x === "/") // *과 /의 인덱스 값을 검색
        const left = Number(value[index - 1]);
        const right = Number(value[index + 1]);

        let result;
        switch(value[index]) {
            case '*': result = left * right; break;
            case '/': result = left / right; break;
        }

        // 여기서 이미 계산한것들을 제거.
        value.splice(index - 1, 3, String(result));
    }

    // 그후 나머지 +와 -를 계산후 return
    return value.reduce((result, token, index) => {
        if (index % 2 !== 0) {
            const nextNumber = Number(value[index + 1])

            switch(token) {
                case '+': result += nextNumber; break;
                case '-': result -= nextNumber; break;
            }
        }
        return result;
    }, Number(value[0]));
}

function printMessage(message) {
    document.getElementById('printText').innerHTML = `${message}`;
}

