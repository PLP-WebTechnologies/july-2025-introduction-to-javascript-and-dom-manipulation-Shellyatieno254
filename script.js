// =======================
// Part 1: Variables & Conditionals
// =======================
let userName = "Alex";
let userAge = 17;

if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is a minor.`);
}

// =======================
// Part 2: Custom Functions
// =======================
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

function multiplyNumbers(a, b) {
    return a * b;
}

// =======================
// Part 3: Loop Examples
// =======================
// For loop
for (let i = 1; i <= 5; i++) {
    console.log(`For loop count: ${i}`);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(`While loop count: ${count}`);
    count++;
}

// =======================
// Part 4: DOM Interactions
// =======================
const title = document.getElementById("main-title");
const description = document.getElementById("description");
const button = document.getElementById("action-btn");
const outputList = document.getElementById("output-list");

button.addEventListener("click", () => {
    // Change text content
    title.textContent = "Script Activated!";
    description.textContent = greetUser(userName);

    // Add list items dynamically
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i} - Multiplied value: ${multiplyNumbers(i, 2)}`;
        outputList.appendChild(li);
    }

    // Change button style
    button.style.backgroundColor = "green";
    button.style.color = "white";
});
