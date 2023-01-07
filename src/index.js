module.exports = function toReadable (number) {
    const beforTwenty = { 0: "", 1: "one", 2: "two", 3: "three",
        4: "four", 5: "five", 6: "six", 7: "seven",
        8: "eight", 9: "nine", 10: "ten", 11: "eleven",
        12: "twelve", 13: "thirteen", 14: "fourteen",
        15: "fifteen", 16: "sixteen", 17: "seventeen",
        18: "eighteen", 19: "nineteen",
    };
    const tens = {
        0: '', 2: "twenty", 3: "thirty", 4: "forty",
        5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty",
        9: "ninety",
    };
   
    let numberString = number.toString();
    
    return (!number) ? 'zero' :
    (number < 20) ? beforTwenty[number] :
    (number < 100) ? `${tens[numberString[0]]} ${beforTwenty[numberString[1]]}`.trim() :
    (numberString[1] == 1) ? `${beforTwenty[numberString[0]]} hundred ${beforTwenty[+numberString[2] + 10]}` :
    `${beforTwenty[numberString[0]]} hundred ${tens[numberString[1]]} ${beforTwenty[numberString[2]]}`.replace(/\s+/g, ' ').trim();
}