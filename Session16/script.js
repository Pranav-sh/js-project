// function generatorRandomNumber() {
//     var randomNumber = Math.random();
//     var scaledNumber = (randomNumber * 20) + 40;
//     var final = Math.round(scaledNumber);

//     document.getElementById('randomNumber').innerHTML = final;
//     } 


// function findMax() {
//     var number = [3, 56, 60, 90, 100];
//     var minNumber = Math.min(...number);
//     var maxNumber = Math.max(...number);

//     document.getElementById('minNumber').innerHTML = "Minimum Number: " + minNumber;
//     document.getElementById('maxNumber').innerHTML = "Maximum Number: " + maxNumber;
// }

// function calculatePower() {
//     var base = parseInt(document.getElementById('baseNumber').value);
//     var power = Math.pow(base, 2);

//     document.getElementById('powerResult').innerHTML = "Power of" + base + ": " + power;
// }




// function calculateLeaves() {

//     var startDateString = document.getElementById("startDate").value;
//     var endDateString = document.getElementById("endDate").value;

//     var startDate = new Date(startDateString);
//     var endDate = new Date(endDateString);

//     var milisecondsPerDay = 24 * 60 * 60 * 1000;

//     var diffInDays = Math.round((endDate - startDate) / milisecondsPerDay);
//     var leavesCount = diffInDays + 1;

//     document.getElementById("leavesCount").innerHTML = "Total number of leaves :" + leavesCount;
// }


// // Adding the item
// localStorage.setItem("Name", "iqra");

// // Retrieving the current value
// let currentValue = localStorage.getItem("Name");
// console.log("Current value:", currentValue);

// // Replacing the value
// localStorage.setItem("Name", "Technology");
// console.log("Updated value:", localStorage.getItem("Name"));
// </script>