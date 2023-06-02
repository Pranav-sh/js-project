var Xinput = document.getElementById("mydiv");
var count = 0;

Xinput.addEventListener("input", function() {
    count++;
    alert("Number of inputs:" + count);
});