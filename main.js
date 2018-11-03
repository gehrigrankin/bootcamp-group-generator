const fs = require("fs")

let students = require('./student')
const wordArrs = require('./wordArrays')

const adjArr = wordArrs.adjArr
const animArr = wordArrs.animArr

const Group = function (teamName, s1, s2, s3) {
  this.teamName = teamName
  this.students = [s1, s2, s3]
}

const group1 = new Group()

let groups = []

makeGroups(7)

function makeGroups(numGroups) {
    for (let i = 0; i < numGroups; i++) {
        let name = teamNameGen()
        let studentNames = pickStudent();

        console.log(students)
    
        groups.push(new Group(name, studentNames[0], studentNames[1], studentNames[2]))
    }
    console.log(groups)
}

function teamNameGen() {
  let name;
  name = [adjArr[Math.floor(Math.random() * adjArr.length)]]
  name.push(animArr[Math.floor(Math.random() * animArr.length)])

  console.log(name)
  return name.join(" ")
}

function pickStudent(){
    let groupStudents = [];

    for (let i = 0; i < 3; i++){
        let student = students[Math.floor(Math.random() * students.length)];
        console.log(student.name)

        groupStudents.push(student.name)
    
        let index = students.indexOf(student);
        students.splice(index, 1);
    }

    return groupStudents;
}



// students.shuffle()
// console.log(students)
