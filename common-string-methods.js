//Practice problem 1 : String Methods
//Activity 1: Searching Strings
let text = "Learning JavaScript is fun!";
let includesJavaScript = text.includes("JavaScript");
console.log(includesJavaScript); // true

let positionOfFun = text.indexOf("fun");
console.log(positionOfFun); // 23


//Activity 2: Transforming Strings

let input = " CODE BOOTCAMP ";
let transformed = input.trim().toLowerCase();

let replaced = transformed.replace("bootcamp", "javascript");
console.log(replaced); // "code javascript"

//Activity 3: Breaking Apart a Sentence

let sentence = "Coding is fun and educational";
let words = sentence.split(" ");
console.log(words);

//Activity 4: Retrieving Substrings

let word = "Bootcamp";
let firstChar = word.charAt(0);
console.log(firstChar); // B

let substring = word.slice(4);
console.log(substring); // camp

//Advanced challenge :
let data = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;
let customerLine = data.split("\n")[0];
let customerName = customerLine.split(": ")[1];
console.log(customerName); // John Doe

let orderLine = data.split("\n")[1];
let items = orderLine.split(": ")[1].split(", ");
console.log(items); // ["Apple", "Banana", "Grape"]

let totalLine = data.split("\n")[2].toUpperCase();
console.log(totalLine); // TOTAL: $20.50

//Practice problem 2 :
//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript"); // Your code here
let codingPosition = inputString.indexOf("Coding"); // Your code here
let startsWithWelcome = inputString.startsWith("Welcome"); // Your code here
let endsWithToday = inputString.endsWith("today."); // Your code here

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // Your code here
let uppercaseString = inputString.toUpperCase(); // Your code here
let trimmedString = inputString.trim(); // Your code here
let replacedString = inputString.replace("JavaScript", "coding"); // Your code here

// 3. Breaking Apart
let wordsArray = inputString.split(" "); // Your code here

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0); // Your code here
let extractedBootcamp = trimmedString.slice(
trimmedString.indexOf("Bootcamp"),
  trimmedString.indexOf("Bootcamp") + "Bootcamp".length
);
// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
