console.log("JavaScript live runner active!");

console.log("I am ready for my interview tomorrow!");

const x = 7;
console.log("The value of x is:", x);
console.log("The value of x squared is:", x * x);

const appName = "DataFetcher";
let requestCount = 0;


requestCount = 1; // Valid
// appName = "NewName"; // TypeError: Assignment to constant variable.

console.log("App Name:", appName);
console.log("Request Count:", requestCount);
// Loose equality (performs type coercion)
0 == false;        // true
"" == false;       // true
null == undefined; // true

// Strict equality (checks value AND type)
0 === false;        // false (number vs boolean)
"" === false;       // false (string vs boolean)
null === undefined; // false (null vs undefined)

const status = 200;

if (status === 200) {
    console.log("Success!");
}
else if (status === 404) {
    console.log("Not Found!");
}
else {
    console.log("An error occurred.");
}

const property = "status";
const response = {
    id: 101,
    status: "Active!",
    "content-type": "application/json"
};

console.log(response.status); // Accessing property using dot notation
console.log(response["content-type"]); // Accessing property using bracket notation 
console.log(response[property]); // Accessing property using a variable

const user = {
    id: 41,
    name: "John Doe",
    age: 30,
    isAdmin: true
};

console.log("User Names:", user.name);
// Object destructuring allows you to extract properties from an object and assign them to variables in a more concise way. Here's how you can do it with the `user` object:  
const {name, age, isAdmin = "guest", nonExistent = "N/A"} = user; // Destructuring assignment
const {name:handle} = user;

console.log("User Name:", name);
console.log("User Age:", age);
console.log("Is Admin:", isAdmin);
console.log("Non-existent property:", nonExistent);
console.log("Handle:", handle);

const coords = [12.5, -110, 110];
const [latitude, longitude, attitudes] = coords; // lat: 12.5, long: -45.8
console.log("Latitude:", latitude, "Longitude:", longitude, "Attitudes:", attitudes);

// Rest operator (...) packs remaining elements into a new array
const [first, ...remaining] = [1, 2, 3, 4];
console.log(first);     // 1
console.log(remaining); // [2, 3, 4]

const records = [
  { id: 1, title: "Database Architecture", tag: "engineering", views: 1200 },
  { id: 2, title: "UI Micro-interactions", tag: "design", views: 800 },
  { id: 3, title: "Query Optimization", tag: "engineering", views: 2400 },
  { id: 4, title: "Color Palettes", tag: "design", views: 350 }
];

const EngineeringOnly = records.filter(record => record.tag === "engineering");
console.log("Engineering Records:", EngineeringOnly);

// const headlines = engineeringOnly.map(({ title, views }) => `${title} (${views} views)`);
// console.log("Headlines:", headlines);


const totalViews = records.reduce((acc, curr) => acc + curr.views, 0);  
console.log("Total Views:", totalViews);

