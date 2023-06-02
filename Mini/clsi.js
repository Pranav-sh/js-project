/*document.getElementById("num");
document.write(a)
*/


a = prompt("Enter the First value :")
b = prompt("Enter the Second value :")
let key = prompt("Enter the Operation As {1:+,2:-,3:*,4:/} :")
a = parseInt(a)
b = parseInt(b)

if (key == 1) {
    sum = a + b;
    document.write(sum)
    alert(sum)
}
if (key == 2) {
    sum = a - b;
    document.write(sum)
}
if (key == 3) {
    sum = a * b;
    document.write(sum)
}
if (key == 4) {
    sum = a / b;
    document.write(sum)
}
/*switch (key) {
    case 1:
        sum = a + b;
        break;
    case 2:
        sum = a * b;
        break;
    case 3:
        sum = a / b;
        break;
    case 4:
        sum = a - b;
        break;
    case 5:
        return 0
        break;
}
document.write(sum);
document.write(sum);*/