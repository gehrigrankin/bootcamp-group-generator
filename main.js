const fs = require("fs")

let students = require('./student')
const wordArrs = require('./wordArrays')

const adjArr = wordArrs.adjArr
const animArr = wordArrs.animArr

const Group = function (teamName, students) {
  this.teamName = teamName
  this.students = students
  this.printStudents = function(){
    for (let i = 0; i < this.students.length; i++){
        console.log(this.students[i])
    }
  }

  this.getAvg = function(){
    let total = 0;
    
    for (let i = 0; i < this.students.length; i++){
        total += this.students[i].skill
    }

    this.teamAvg = total / this.students.length
  }

  this.getAvg();
}

let groups = []

classAvg();
makeGroups(7);
groupCheck();

function makeGroups(numGroups) {
    for (let i = 0; i < numGroups; i++) {
        let name = teamNameGen()
        let studentNames = pickStudent();
        let groupAvg = getGroupAvg(studentNames);

    
        groups.push(new Group(name, studentNames))
    }
}

function teamNameGen() {
  let name;
  name = [adjArr[Math.floor(Math.random() * adjArr.length)]]
  name.push(animArr[Math.floor(Math.random() * animArr.length)])

  return name.join(" ")
}

function pickStudent(){
    let groupStudents = [];

    for (let i = 0; i < 3; i++){
        let student = students[Math.floor(Math.random() * students.length)];

        groupStudents.push(student)
    
        let index = students.indexOf(student);
        students.splice(index, 1);
    }

    return groupStudents;
}

function getGroupAvg(arr){
    let total = 0;

    for (let i = 0; i < arr.length; i++){
        total += arr[i].skill
    }

    return total / arr.length
}

function groupCheck(){
    groups.sort(function(a, b){
        return a.teamAvg-b.teamAvg
    })
    
    printGroups()

    let flag = false;

    while (!flag){
        if (groups[0].teamAvg + 1 < groups[groups.length - 1].teamAvg){
            const weakLink = findWeakestLink(groups[0].students)
            const strongLink = findStrongerLink(groups[groups.length - 1].students)

            console.log("weakLink: " + JSON.stringify(weakLink))
            console.log("strongLink: " + JSON.stringify(strongLink))

            const weakI = groups[0].students.indexOf(weakLink)
            const strongI = groups[groups.length - 1].students.indexOf(strongLink)

            groups[0].students[weakI] = strongLink;
            groups[groups.length - 1].students[strongI] = weakLink;
            
            groups[0].getAvg()
            groups[groups.length - 1].getAvg()
            console.log(groups[0].teamAvg)
            console.log(groups[groups.length - 1].teamAvg)
            
            groups.sort(function(a, b){
                return a.teamAvg-b.teamAvg
            })
        }
        else {
            flag = true
        }
    }
    printGroups()    
}

function findWeakestLink(arr){
    arr.sort(function(a, b){
        return a.skill-b.skill
    })

    return arr[0];
}
function findStrongerLink(arr){
    arr.sort(function(a, b){
        return a.skill-b.skill
    })

    return arr[1];
}

function classAvg(){
    let total = 0;

    for (let i = 0; i < students.length; i++){
        total += students[i].skill
    }

    let avg = total / students.length;

    console.log("Class Average: " + avg)
    return avg
}

function printGroups(){
    for (let i = 0; i < groups.length; i++){
        console.log("==================")
        groups[i].printStudents();
        console.log("==================")
    }
}

// students.shuffle()
// console.log(students)
