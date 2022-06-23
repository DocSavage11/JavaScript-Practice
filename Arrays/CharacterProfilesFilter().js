const actors = [
    {
        name: "Lockheed",
        character: "Martin",
        gender: "Male",
        age: 45,
        mass: 150,
        height: 95,
        personality: "",
        role: "Scientist, Engineer",
 
    },
    {
        name: "Rook",
        character: "Lark",
        gender: "Male",
        age: 32,
        mass: 120,
        height: 87,
        personality: "",
        role: "Master and Commander",
 
    },
    {
        name: "Vivian",
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
console.log("These are the real names of the characters");
console.log(names);

const eldestActor = actors.filter(actors => {
    return actors.age < 45;
});
console.log("These are the characters with an age less than 45");
console.log(eldestActor);

const talestActors = actors.filter((actors) => actors.height > 85)
console.log("These are the character(s) with a height grater that 85");
console.log(talestActors);

const maleCharacters = actors.filter((actors) => actors.gender === "Male");
console.log("These are the males characters");
console.log(maleCharacters);



