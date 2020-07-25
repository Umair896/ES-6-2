// ----------Value vs Reference

//1.Value type copy

let x = 70;
let y = x;
x = 20;
console.log(y);

//2.Reference Copy

let a = { value: 80 };
let b = a;
a.value = 50;
console.log(b);

//---------Splicing in Arrays
const numbers = [1, 2, 3, 4, 5];
const middle = numbers.splice(2, 1);
const mid = numbers.splice(0, 0, 6, 7);
console.log(numbers);
console.log(middle);

//---------Join in Arrays
const names = ["Jone", "Nick", "Joe"];
let stringConversion1 = names.join();
console.log(stringConversion1);

let stringConversion2 = names.join("+");
console.log(stringConversion2);

//---------slicing in Arrays & Objects
let word = "hello world!";
let newWord = word.slice(2, 7);
console.log(newWord);

//---------split in Arrays

let word = "hello,world,again";
let newWord1 = word.split(",", 1);
console.log(newWord1);
let newWord2 = word.split(",", 3);
console.log(newWord2);

let numbers = [1, 2, 3, 4, 5];
let arrayNum = numbers.slice(1, 3);
console.log(arrayNum);

//---------for-in loop for objects
let cars = {
  Hyundai: "i20",
  Maruthi: "Ertiga",
  Tata: "Indica",
};
console.log(cars);
for (let prop in cars) {
  console.log(prop);
  console.log(cars[prop]);
  console.log(cars[prop], "is modelled by", prop);
}

//---------for-in loop for Arrays
var pets = ["Woody", "Roxy", "Bob"];
for (let prop in pets) {
  console.log(prop); //index number
  console.log(pets[prop]); //array items
  console.log("In", prop, "we have", pets[prop]);
}

//---------for-of loop
let students = ["Umair", "Saad", "Ameen"];
for (let names of students) {
  console.log(names);
}

// -----------ARRAY HELPER METHODS:
// 1. foreach
// 2. map
// 3. filter
// 4. find
// 5. every
// 6. some
// 7. reduce

// for loop
var num = [1, 2, 3, 4, 5];
var sum = 0;
for (i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

// 1. foreach
var num = [1, 2, 3, 4, 5];
var sum = 0;
num.forEach((num) => (sum += num));
console.log(sum);

//2. map
var num = [1, 2, 3, 4, 5];
var squares = [];
squares = num.map((num) => num * num);
console.log(squares);

// 3. filter
var numbers = [5, 10, 15, 20, 25];
var final = [];
final = numbers.filter((number) => number >= 15);
console.log(final);

// 4. find
var users = [
  { name: "Dave", age: 20 },
  { name: "Dave", age: 10 },
  { name: "Dave", age: 25 },
  { name: "Dave", age: 10 },
];
var foundUser;
foundUser = users.find((user) => user.age === 10);
console.log(foundUser);

// 5. reduce
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);

//Assignment--Create one person, street, name ,age.
//ShowData() key and value.
let details = {
  name: "Md Umair",
  age: 23,
  location: "Hajinagar",
  city: "Ramanagaram",
  pincode: 562159,
};
function showData(details) {
  for (let key in details) {
    console.log(key, ":", details[key]);
  }
}
showData(details);
