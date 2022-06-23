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