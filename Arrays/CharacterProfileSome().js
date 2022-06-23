const actors = [
    {
        name: "Lockheed Barton",
        character: "Martin",
        gender: "Male",
        age: 45,
        mass: 150,
        height: 95,
        personality: "",
        role: "Scientist, Engineer",
 
    },
    {
        name: "Daniel Rook",
        character: "Lark",
        gender: "Male",
        age: 32,
        mass: 120,
        height: 87,
        personality: "",
        role: "Master and Commander",
 
    },
    {
        name: "Vivian Tailor",
        character: "Montana",
        gender: "Female",
        age: 27,
        mass: 90,
        height: 72,
        personality: "",
        role: "Diplomat",
 
    },
]

const oneMaleCharacter = actors.some((actors) => {
    return actors.gender === "Male";
})
console.log("\nIs there at least one male character?")
console.log(oneMaleCharacter)

const olderThanForty = actors.some((actors) => actors.age > 40)
console.log("\nIs there at least one character older than 40?")
console.log(olderThanForty)

const roletype = actors.some((actors) => actors.role === "Diplomat") 
console.log("\nIs there at least one character that is a Diplomat?")
console.log(roletype)

const massLessThan60 = actors.some((actors) => actors.mass < 60)
console.log("\nIs there at least one character with a mass less than 60?")
console.log(massLessThan60)

const nameOnTheList = actors.some((actors) => actors.name === "Johnny Lark")
console.log("\nIs there a character with the name of Johnny Lark?")
console.log(nameOnTheList)