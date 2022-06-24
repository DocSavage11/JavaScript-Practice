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

const totalMass = actors.reduce((acc, cur) => acc + cur.mass, 0)
console.log("\nTotal mass of all actors:")
console.log(totalMass)

const totalHeight = actors.reduce((acc, cur) => acc + cur.height, 0)
console.log("\nTotal height of all actors:")
console.log(totalHeight)

const actorRole = actors.reduce((acc, cur) => {
    const actorRole = cur.role;
    if (acc[actorRole]) {
        acc[actorRole] ++;
    } else {
        acc[actorRole] = 1;
    }
    return acc;
}, {});
console.log(actorRole)