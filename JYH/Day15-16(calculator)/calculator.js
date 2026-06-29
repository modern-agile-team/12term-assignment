let result = "";

const display = document.getElementById("display");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

for (let i = 0; i <= 9; i++) {
    const num = document.getElementById(`num${i}`);
    num.addEventListener("click", function() {
        add_input(i);
    });
}

make_button("plus", "+");
make_button("minus", "-");
make_button("multiply", "×", "*");
make_button("divide", "÷", "/");
make_button("decimal", ".");

document.addEventListener("keydown", keyboard_input);

equal.addEventListener("click", function() {
    result = calculatorExpression(result);
    display.value = result;
});
