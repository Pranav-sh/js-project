let c = prompt("Enter operation");
let d = prompt("Enter operation");
let a = parseInt(prompt("Enter the first value:"));
let b = parseInt(prompt("Enter the second value:"));

function cal(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            console.log("Error");
            return null;
    }
}
var result1 = cal(a, b, c);
var result2 = cal(a, b, d);
document.write("Input opration" + c + result1 + "<br>");
document.write("Input opration" + d + result2);