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

const names = actors.map((actors) => {
    return actors.name;
});
console.log("\nThese are the real names of the characters");
console.log(names);

const height = actors.map((actors) => {
    return actors.height;
})
console.log("\nThese are the heights of the characters");
console.log(height);

const nameAndHeight = actors.map((actors) =>  ({
    name: actors.name,
    heigh: actors.height
}))
console.log("\nThese are the names and heights of the actors:");
console.log(nameAndHeight);

const firstNames = actors.map((actors) => actors.name.split(" ")[0]);
console.log("\nThese are the first names of the actors:");
console.log(firstNames)
