console.log("\nFirst Object\n");

var myPerson = {
    firstName: "Bernice",
    lastName: "Ortiz",
    age: "26"
}
console.log(`Person: \n Name: "${myPerson.firstName} ${myPerson.lastName}"\n Age ${myPerson.age}`);

console.log(`\nOur Array\n`);

var iceCreamFlavors: Array<string> = [
    "Mint Chocolate Chip",
    "Caramel",
    "Butter Pecan",
    "Stawberry",
    "Peanut Butter",
    "MooseTracks",
    "Cookie Dough",
    "Oreo"
];

iceCreamFlavors.forEach((flavor, i ) => {
    console.log(`${i + 1}. ${flavor}`)
})

console.log("\nArray of Objects\n")
var people = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 45
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 43
    },
    {
        firstName: "James",
        lastName: "Doe",
        age: 20
    }
];

people.forEach((person) => {
    console.log (`Person: \n "${person.firstName} ${person.lastName}\n Age: "${person.age}`);
})

console.log("\nAn object with an array\n");

var mePersonWithAnArray = {
    firstName: "John",
    lastName: "Doe",
    age: 45, 
    johnsFaveIceCream: [
        "Mint Chocolate Chip",
        "Caramel",
        "Butter Pecan",
        "Stawberry",
        "Oreo"
    ]
}

console.log (`Name: ${mePersonWithAnArray.firstName} ${mePersonWithAnArray.lastName}`);
console.log(`\t Favorite Ice Cream Flavors: `);
mePersonWithAnArray.johnsFaveIceCream.forEach((flavor) => {
    console.log(`${flavor}`)
});