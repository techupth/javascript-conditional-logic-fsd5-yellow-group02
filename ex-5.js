// If–Else Statement
function calculateStudentGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// // Ternary Operator
// let calculateStudentGrade = (score) =>
//   score >= 90 && score <= 100
//     ? "A"
//     : score >= 80 && score <= 89
//     ? "B"
//     : score >= 70 && score <= 79
//     ? "C"
//     : score >= 60 && score <= 69
//     ? "D"
//     : "F";

// // Switch Statement
// let calculateStudentGrade = (score) => {
//   let messages;
//   switch (score) {
//     case (score = 100):
//     case (score = 99):
//     case (score = 98):
//     case (score = 97):
//     case (score = 96):
//     case (score = 95):
//     case (score = 94):
//     case (score = 93):
//     case (score = 92):
//     case (score = 91):
//     case (score = 90):
//       messages = "A";
//       break;
//     case (score = 89):
//     case (score = 88):
//     case (score = 87):
//     case (score = 86):
//     case (score = 85):
//     case (score = 84):
//     case (score = 83):
//     case (score = 82):
//     case (score = 81):
//     case (score = 80):
//       messages = "B";
//       break;
//     case (score = 79):
//     case (score = 78):
//     case (score = 77):
//     case (score = 76):
//     case (score = 75):
//     case (score = 74):
//     case (score = 73):
//     case (score = 72):
//     case (score = 71):
//     case (score = 70):
//       messages = "C";
//       break;
//     case (score = 69):
//     case (score = 68):
//     case (score = 67):
//     case (score = 66):
//     case (score = 65):
//     case (score = 64):
//     case (score = 63):
//     case (score = 62):
//     case (score = 61):
//     case (score = 60):
//       messages = "D";
//       break;
//     default:
//       messages = "F";
//   }
//   return messages;
// };

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
