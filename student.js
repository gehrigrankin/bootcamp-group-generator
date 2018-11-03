const Student = function(name, skill){
    this.name = name,
    this.skill = skill
}

const students = [
    new Student("Andrew Muscara", 4),
    new Student("Anita MacFarland", 1),
    new Student("Arthur Garcia", 3),
    new Student("Austin Scriver", 4),
    new Student("Austin Shea", 3),
    new Student("Austin Wayman", 3),
    new Student("Benjamin Laney", 5),
    new Student("Brittany Aldaco", 2),
    new Student("Carrington Allison", 4),
    new Student("Cole Befort", 4),
    new Student("Daniel McManimon", 1),
    new Student("Darlene Leslie", 2),
    new Student("Darric Alexander", 2),
    new Student("Fady Naguib", 4),
    new Student("Ian Nelson", 5),
    new Student("Joey Romo", 2),
    new Student("Justin Brown", 3),
    new Student("Shelly Lane", 4),
    new Student("Tamir Natanov", 4),
    new Student("Tiffany Rudd", 1),
    new Student("Tyler Bumguardner", 3)
]

module.exports = students;