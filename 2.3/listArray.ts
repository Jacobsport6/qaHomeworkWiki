let firstList: Array<number> = [];
//firstList is empty for now, We will add numbers using the push
let secondList: Array<string> = ["thing1", "thing2", "thing3"];
// the .push() methad adds items to whatever array you assign
firstList.push(510);
firstList.push(849);
firstList.push(3.14151);
//510,849,3.1415 should all be added to firstList array 

console.log("The first list is", firstList);
//using the .pop() method you are able to delete the lest item on an array
console.log("The item at the end at the second list is: ", secondList.pop);
// after the pop the secondList should have thing1 and thing2
console.log("the remaining item on the Second List are: ", secondList)
// Access array items by the index, arrays start at 0
console.log("This should be thing1", secondList[0]);
console.log("This should be thing2", secondList[1]);