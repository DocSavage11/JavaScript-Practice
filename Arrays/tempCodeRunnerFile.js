const sortByMassAccending = actors.sort((a, b) => a.mass - b.mass)
console.log("\nSorting characters by mass in a accending order:")
console.log(sortByMassAccending)

const sortByMassDecending = actors.sort((a, b) => b.mass - a.mass)
console.log("\nSorting characters by mass in a decending order:")
console.log(sortByMassDecending)

const sortByHeightAccending = actors.sort((a, b) => a.height - b.height)
console.log("\nSorting characters by height in a accending order:")
console.log(sortByHeightAccending)

const sortByHeightDecending = actors.sort((a, b) => b.height - a.height)
console.log("\nSorting characters by height in a decending order:")
console.log(sortByHeightDecending)