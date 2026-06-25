function add_input(displayValue, resultValue = displayValue) {
    display.value += displayValue;
    result += resultValue;
    console.log(result);
}

function change_operator(key) {
    if (key === "*") return "×";
    if (key === "/") return "÷";
    return key;
}

//계산기에 사용할 수 있는 키인지 확인
function true_calculator_key(key) {
    return /^[0-9+\-*\/().]$/.test(key);
}

function keyboard_input(event) {
    if (!true_calculator_key(event.key)) return;
    event.preventDefault();
    add_input(change_operator(event.key), event.key);
}

function make_button(buttonId, displayValue, resultValue = displayValue) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", function() {
        add_input(displayValue, resultValue);
    });
}

function calculatorExpression(result) {
    return eval(result);
}
