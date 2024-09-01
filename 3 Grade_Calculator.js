/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const print = `your grade is:`;
const score = 72;

if (100 >= score && score >= 90) {
  console.log(print, `A`);
} else if (89 >= score && score >= 80) {
  console.log(print, `B`);
} else if (79 >= score && score >= 70) {
  console.log(print, `C`);
} else if (69 >= score && score >= 60) {
  console.log(print, `D`);
} else if (59 >= score && score >= 0) {
  console.log(print, `F`);
}
