/*function classText(Mname, text) {
    let Mname = prompt("Enter Class_Name here:");
    let text = prompt('Enter the text :');
}
classText(Mname, text);


function creta() {
    var classN = document.getElementById('classN').value;
    var text = document.getElementById('text').value;

    var divE = document.createElement('div');

    divE.classN = classN;
    divE.text = text;

    document.body.appendChild(divE);

    console.log('div', divE);
    console.log('div', text);
}*/

var inputform = document.getElementById('inputform');
var output = document.getElementById('output');

inputform.addEventListener("submit", function(event) {
    event.preventDefault();


    var Elementname = document.getElementById(elementname);
    var text = document.getElementById("text");
    createElementwithtext(Elementname, text);

});

function createElementwithtext(Elementname, text) {
    var textx = document.createTextNode('text');

    var divE = document.createElement('elementname');

    divE.appendChild(textx);
    output.classList.add(divE);

    document.body.appendChild(divE);

}