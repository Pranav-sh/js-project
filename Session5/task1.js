age = prompt("Enter your age :");
if (age > 0 && age == 18) {
    document.write("you are 18 years old");

}
if (age < 18) {
    final = 18 - age;
    document.write("years remaining to complete 18 is: " + final);
}
if (age > 18 && age < 50) {
    document.write("you are under 50", "<br>");
}
if (age > 18 && age < 50) {
    final1 = 50 - age;
    document.write("years remaining to complete 50 is: " + final1);
}
if (age > 50 && age < 70) {
    document.write("you are under 70", "<br>");
}
if (age > 50 && age < 70) {
    final1 = 70 - age;
    document.write("years remaining to complete 70 is: " + final1);
}
if (age > 70) {
    document.write("you exceed 70");
}