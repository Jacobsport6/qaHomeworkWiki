function getSpecials(weekday:string): string {
    switch (weekday) {
        case "Monday":
        return "Cup of Mud Monday's";
        break;
        case "Tuesday":
        return "Taco Tuesday";
        break;
        case "Wednesday":
        return "Waffle Wednesday";
        break;
        case "Thursday":
        return "Boneless Thursday";
        break;
        case "Friday":
        return "Fajita Friday";
        break;
        default:
        return "Enjoy your weekend";
    };
};

console.log(getSpecials("Monday"));
console.log(getSpecials('Tuesday'));
console.log(getSpecials('Wednesday'));
console.log(getSpecials('Thursday'));
console.log(getSpecials('Friday'));
console.log(getSpecials('Saturday'));