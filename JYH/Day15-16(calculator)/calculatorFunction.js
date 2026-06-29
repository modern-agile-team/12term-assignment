//입력한 값을 display와 expression에 넣는다
function addInput(displayText, expressionText = displayText) {
    display.value += displayText;
    expression += expressionText;
    console.log(expression);
}

//키보드 기호를 display용 기호로 바꾼다
function changeOperator(key) {
    if (key === "*") return "×";
    if (key === "/") return "÷";
    return key;
}

//계산기에 쓸 수 있는 키인지 확인
function isCalculatorInput(key) {
    return /^[0-9+\-*\/().%]$/.test(key);
}

//문자열 expression을 계산한다
function calculateExpression(expressionText) {
    return eval(expressionText);
}

//display용 기호를 계산 가능한 기호로 바꾼다
function makeExpressionText(displayText) {
    return displayText.replaceAll("×", "*").replaceAll("÷", "/");
}

//exit 입력 확인
function isExitCommand(inputText) {
    return inputText.trim().toLowerCase() === "exit";
}

//소수점 둘째 자리까지 맞춘다
function formatResult(number) {
    return Math.round(number * 100) / 100;
}

//입력된 expression을 계산해서 display에 보여준다
function calculateResult() {
    if (isExitCommand(display.value)) {
        alert("종료합니다.");
        return;
    }
    if (display.value.trim() === "") return;
    expression = makeExpressionText(display.value);
    const calculationResult = formatResult(calculateExpression(expression));
    expression = String(calculationResult);
    display.value = expression;
    console.log(calculationResult);
}

//마지막 입력을 지운다
function removeLastInput() {
    expression = expression.slice(0, -1);
    display.value = display.value.slice(0, -1);
}

//키보드 입력 처리
function handleKeyboardInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateResult();
        return;
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        removeLastInput();
        return;
    }
    if (!isCalculatorInput(event.key)) return;
    event.preventDefault();
    addInput(changeOperator(event.key), event.key);
}

//버튼 클릭 연결
function connectButton(buttonId, displayText, expressionText = displayText) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", function() {
        addInput(displayText, expressionText);
    });
}
