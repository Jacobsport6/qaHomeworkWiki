function movieDiscountCalc(movieMems:boolean, senior:boolean, vetsOrResponder:boolean) {
    //Keyword Function to start a function -> Name Function -> (Paramaters)
    if (senior && vetsOrResponder && movieMems) return 0.40;
    if ((senior && vetsOrResponder) || (vetsOrResponder && movieMems)) return 0.35;
    if (senior || vetsOrResponder) return 0.15;
    if (movieMems) return 0.10;
    return 0;
};

console.log("all three discounts work", movieDiscountCalc(true,true,true));
console.log("Senior & Movie Member", movieDiscountCalc(true, true, false));
console.log("Senior & Vet", movieDiscountCalc(false, true, true));
console.log("Senior", movieDiscountCalc(false, false, true));
console.log("Movie Member", movieDiscountCalc(true, false, false));
console.log("No discount available", movieDiscountCalc(false, false, false));

