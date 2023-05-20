var superHeroList: Array<string> = [
    "Superman",
    "Spider-Man",
    "Thor",
    "Batman",
    "Aquaman",
    "Wonder Woman",
    "Aquaman",
    "Iron-Man",
    "Black Panther",
    "Bird Person",
    "Iron Heart",
    "Spider-Pig",
];

//for Loops, declare the variable statement to check: increment/decrement the variable 
// set the i to 0
// loop as long as the index is less than the list/array length, and go up each timne

for (var i = 0; i < superHeroList.length; i++) {
    console.log (`Hero #${i + 1}: ${superHeroList[i]}`)
}

superHeroList.forEach((hero) => {
    console.log(`${hero} is awesome but Megamind is better.`);
})