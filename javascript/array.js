//comparison in javascript
const arr = [1,22, 2,3,7,12,];
// console.log(arr.sort());

// function sortArr() {

// }
//Sort arrays in ascending order
console.log(arr.sort(function comparison(a,b) {
    return a-b;
}));

//sort array in descending order
console.log(arr.sort(function desc(a,b) {
    return b-a;
}));

//sorting strings using localeCompare
const a = "apple";
const b = "bear";
const c = 'boo';

// const main = () => {
//     console.log(a.localeCompare(b));
//     console.log(c.localeCompare(b));
// }

// main();

// const myarr = ["claw", "apple", "berries", "fearless",'animals'];
// //console.log(myarr.sort());

// const main = () => {
//     myarr.sort((a,b) => 
//         a.localeCompare(b)
//     );
//     console.log(myarr);
// }
// main();

const students = [
    { id: 4, graduated: true, grade: 96 },
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
];
//sort by grade and graduated
function main() {
    students.sort(function (a,b) {
        if (a.graduated && !b.graduated) {
            return -1;
        } 
        if (b.graduated && !a.graduated) {
            return 1;
        }

        return b.grade - a.grade;
    });
    
    console.log(students);
}

// const main = () => {
//     for(let i = 0; i < students.length; i++) {
//         const student = students[i];
//         console.log(student.graduated);
//     }
// }
main();