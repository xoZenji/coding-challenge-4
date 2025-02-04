// Task 1: Customer Discounts
let purchaseAmount = 999;
if (purchaseAmount > 100) {
    discountAmount = purchaseAmount * 0.4;
    console.log("40% New Customer Discount!")
}

console.log(`Discounted Total: $${discountAmount}`);
// Declared the purchase amount, the discounted amount, and have a discount message all within the console.

// Task 2: Sales Report
let sales = [200, 300, 150, 400, 750]
let totalSales = 0;
for ( let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log (`Total Sales: $${totalSales}`);
// Declared the array "sales" and assigned values to indicate the sales. Then created a for loop calculating total sales and printing it to the console.

// Task 3: Inventory Depletion
let stock = 10;
while (stock > 0) {
    stock--;
    console.log(`Backstock: ${stock}`);
}

console.log("We Are Currently Out Of Stock. Please Check Back Later!")
// Declared the amount of stock remaining and created a while loop decreasing the amount until it hit 0. Then it prints everything to the console with an out of stock message.

// Task 4: Customer Survey
let responses = 0;
do {
    responses++;
    console.log(`Survey Answers: ${responses}`);
} 

while (responses < 3);
// Declared the responses and a value indicating the amount, then created a do while loop to generate responses up to 3. Then it prints to the console.

// Task 5: Employee Information
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
// Declared employee as an object and assigned a name, position, and salary to it. Then wrote a for in loop to print the key and value to the console.

// Task 6: Product Listings
let products = ["PS5", "Xbox", "Oculus", "Steamdeck",];
for (let systems of products) {
    console.log(`Available Systems: ${systems}`);
}
// Declared the array products and assigned items to it. Then made a for of loop to print the items to the console.

// Task 7: Order Processing
let orders = [101, 202, 303];
orders.forEach(order => {
    console.log(`Order #: ${order}`);
});
// Created an array of order numbers and used forEach to print the orders into the console.

// Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let taxes = calculateTax(999, 0.09);
console.log(`Taxes: $${taxes}`);
// Created a function that calculated the tax on 999. Then had it print to the console.

// Task 9: Discount Application
const applyDiscount = (price, discount) => {
    return price - (price * discount);
}

let priceDecrease = applyDiscount(999, 0.3)
console.log(`Discounted Price: $${priceDecrease}`);
// Created a function that applied a discount to the price set. Then, it prints the discounted price to the console.

// Task 10: Loyalty Points
const calculatePoints = purchaseAmount => {
    return (purchaseAmount / 10);
}

let rewardPoints = calculatePoints(800);
console.log(`Available Points: ${rewardPoints}`);
// Created a function that calculates the amount of points based on purchase size (1 point for every 10 dollars). Then, it prints the points to the console.