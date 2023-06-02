var divelement = document.getElementById("mydiv");

divelement.addEventListener("mouseenter", function() {
    divelement.textContent = "You are in the div";
    divelement.style.color = "yellow";
    divelement.style.backgroundColor = "black";

});

divelement.addEventListener("mouseleave", function() {
    divelement.textContent = "You are outside of the div";
    divelement.style.color = "black";
    divelement.style.backgroundColor = "white";

});