var btn = document.getElementById("cal");
btn.addEventListener("click", onclick);



function onclick() {
    var a = prompt("enter the radius :");

    var area = Math.PI * a * a;
    document.getElementById("demo").innerHTML = "hii" + area;
    document.write("Entered radius value: " + a + "<br>");
}