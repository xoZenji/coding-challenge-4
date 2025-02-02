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
