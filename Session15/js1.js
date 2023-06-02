let obj = {
    firstname: "Pranav",
    lastname: "Shejul"
}
let a = document.getElementById("demo");
obj.fullname = function() {
    return this.firstname + " " + this.lastname;
}
document.write(obj.fullname());