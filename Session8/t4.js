var secon = document.getElementById("list");
var a = document.createElement("li");
var b = document.createTextNode("coffee");
a.appendChild(b);

secon.insertBefore(a, secon.children[1]);