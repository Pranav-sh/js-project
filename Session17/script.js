// class Bike {
//     constructor(brand) {
//         this.brandname = brand;
//     }
//     showoData() {
//         return "My Book" + this.brandname + "hi";
//     }
//     apple() {
//         return " // Example //";
//     }
// }
// class model extends Bike {
//     constructor(brand, year) {
//         super(brand);
//         this.year = year;
//     }
//     show() {
//         return this.showoData() + this.apple() + "and i'm jan";
//     }

// }
// let Bike1 = new model("KIM", 2021);
// document.write(Bike1.show());

// let Bike2 = new model("Honda", 2021);
// document.write(Bike2.showoData());


// class Marks {
//     constructor(marks) {
//         this.marks = marks;
//     }
//     calculateAverage() {
//         const sum = this.marks.reduce((total, mark) => total + mark, 0);
//         return sum / this.marks.length;
//     }
// }

// const marks = [80, 75, 90, 88];
// const marksObj = new Marks(marks);
// const average = marksObj.calculateAverage();

// console.log("The average of the total marks is: ${average}");



// class Shape {
//     constructor(side) {
//         this.side = side;
//     }
// }
// class Square extends Shape {
//     calculateArea() {

//         return this.side * this.side;
//     }
// }

// const side = parseFloat(prompt("Enter the side of the square:"));
// const square = new Square(side);
// const area = square.calculateArea();

// console.log("The area of the square is:" + area);



class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    }
}

const students = [
    { name: "pranav", marks: [1, 2, 3, 4] },
];
students.forEach((student) => {
    const studentObj = new Student(student.name, student.marks);
    const average = studentObj.calculateAverage();

    console.log('The name of the student is ${student.name} and the average of all marks (${student.marks.join(", ")}) is: ${average}');

});