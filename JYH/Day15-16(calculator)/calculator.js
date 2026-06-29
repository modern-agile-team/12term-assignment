let expression = "";

const display = document.getElementById("display");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

for (let i = 0; i <= 9; i++) {
    const numberButton = document.getElementById(`num${i}`);
    numberButton.addEventListener("click", function() {
        addInput(i);
    });
}

connectButton("plus", "+");
connectButton("minus", "-");
connectButton("multiply", "×", "*");
connectButton("divide", "÷", "/");
connectButton("decimal", ".");

document.addEventListener("keydown", handleKeyboardInput);

equalButton.addEventListener("click", calculateResult);

clearButton.addEventListener("click", function() {
    expression = "";
    display.value = "";
    console.log("CLEAR!");
});
