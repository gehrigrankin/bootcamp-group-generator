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

classAvg();
makeGroups(7);
groupCheck();

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

        groupStudents.push(student)
    
        let index = students.indexOf(student);
        students.splice(index, 1);
    }

    return groupStudents;
}

function groupCheck(){
    let flag = false;

    groups.sort(function(a, b){
        return b.skill-a.skill
    })

    while (!flag){
        let groupAvgs = [];

        for (let i = 0; i < groups.length; i++){
            let groupTotal = 0;

            for (let j = 0; j < groups[i].students.length; j++){
                groupTotal += groups[i].students[j].skill
            }

            let avg = groupTotal / groups[i].students.length
            console.log(avg)
            groupAvgs.push(avg)
            
            console.log(groupAvgs.sort())
            
            if (groupAvgs[0] + .9 < groupAvgs[groupAvgs.length]){
                let weakGroupSkills = []
                let strongGroupSkills = []
                
                for (let j = 0; j < groups[i].students.length; j++){
                    weakGroupSkills.push(groups[i].students[j].skill)
                }

                let weakLink = groups[i].student[weekGroupSkills.indexOf(weekGroupSkills.min())];
                let strongLink = groups[].student[weekGroupSkills.indexOf(weekGroupSkills.min())];
            }
        }

        

        flag = true
    }
}

function classAvg(){
    let total = 0;

    for (let i = 0; i < students.length; i++){
        total += students[i].skill
    }

    let avg = total / students.length;

    console.log(avg)
    return avg
}


// students.shuffle()
// console.log(students)
