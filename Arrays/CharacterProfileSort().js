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

// const sortByMassAccending = actors.sort((a, b) => a.mass - b.mass)
// console.log("\nSorting characters by mass in a accending order:")
// console.log(sortByMassAccending)

// const sortByMassDecending = actors.sort((a, b) => b.mass - a.mass)
// console.log("\nSorting characters by mass in a decending order:")
// console.log(sortByMassDecending)

// const sortByHeightAccending = actors.sort((a, b) => a.height - b.height)
// console.log("\nSorting characters by height in a accending order:")
// console.log(sortByHeightAccending)

// const sortByHeightDecending = actors.sort((a, b) => b.height - a.height)
// console.log("\nSorting characters by height in a decending order:")
// console.log(sortByHeightDecending)

// const sortByNameAccending = actors.sort((a,b) => {
//     if (a.name < b.name) return -1;
//     return 1;
// })
// console.log("\nSorting characters by name in a accending order:")
// console.log(sortByNameAccending)

// const sortByNameDecending = actors.sort((a,b) => {
//     if (a.name < b.name) return 1;
//     return -1;
// })
// console.log("\nSorting characters by name in a accending order:")
// console.log(sortByNameDecending)

const sortByGenderMaleToFemale = actors.sort((a, b) => {
    if (a.gender === "Female") return 1;
    return -1
})
console.log(sortByGenderMaleToFemale)