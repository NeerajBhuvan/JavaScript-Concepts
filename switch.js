let name = "Bhuvan"
let mark = 40;
let grade;

switch (true) {
    case mark >= 90:
        grade = "A";
        break;
    case mark >= 80:
        grade = "B";
        break;
    case mark >= 70:
        grade = "C";
        break;
    case mark >= 60:
        grade = "D";
        break;
    case mark >= 50:
        grade = "E";
        break;
    case mark >= 40:
        grade = "F";
        break;
    default:
        grade = "G";
}

if (grade === "G") {
    console.log(`${name} got Fail! and graded ${grade}`)
}else {
    console.log(`${name} got Pass! and graded ${grade}`)
}