// // // Get the paragraph element
// // const paragraph = document.querySelector('H1');

// // // Function to change the color of the paragraph to a random color
// // function changeColor() {
// //     const randomColor = getRandomColor();
// //     paragraph.style.color = randomColor;
// // }

// // // Function to generate a random color
// // function getRandomColor() {
// //     const letters = '0123456789ABCDEF';
// //     let color = '#';
// //     for (let i = 0; i < 6; i++) {
// //         color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }

// // // Call the changeColor function every 2 seconds
// // setInterval(changeColor, 2000);

// // Get the star element
// const star = document.getElementById('star');

// // Function to change the color of the star randomly
// function changeColor() {
//     const randomColor = getRandomColor();
//     star.style.color = randomColor;
// }

// // Function to generate a random color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Variable to hold the interval ID
// let intervalId;

// // Function to start the color change
// function startColorChange() {
//     // Clear any existing interval
//     clearInterval(intervalId);
// }
// // Change the color initially


// Function to start the task
function startTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    // Update the task on the document
    document.getElementById('taskOutput').textContent = `Task: ${task}`;

    // Prompt the user after 5 seconds
    setTimeout(() => {
        const response = prompt("Has the task been completed? (Yes/No)");

        if (response && response.toLowerCase() === 'yes') {
            document.getElementById('statusOutput').textContent = 'Promise fulfilled';
            document.getElementById('statusOutput').style.color = 'green';
        } else {
            document.getElementById('statusOutput').textContent = 'Promise unfulfilled';
            document.getElementById('statusOutput').style.color = 'red';
        }
    }, 5000);
}