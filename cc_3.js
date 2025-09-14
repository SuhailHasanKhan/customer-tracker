// Coding Challenge 3 - Customer Tracker

let customers = [
    {
        name: 'Bill Boston',
        email: 'bostonbill@gmail.com',
        purchases: ['White Ocean Cologne', 'Ruby Garden Deodorant']
    },
    {
        name: 'Nick Stewart',
        email: 'nickstewart@gmail.com',
        purchases: ['Harry Potter Replica Wand', 'Harry Potter Slytherin Robe']
    },
    {
        name: 'Michael Burry',
        email: 'burrym@gmail.com',
        purchases: ['Printing Paper', 'Sticky Notes']
    }
];

customers.push({name: 'Ruben Singh', email: 'singhruben@gmail.com', 
    purchases: ['Gold Plated Chain', 'Gold Plated Bracelet']
});
 
let xyz = customers.shift();

customers[0].email = 'nick123@gmail.com'
customers[1].purchases.push('Paper Clips')
console.log(`CUSTOMER NAME\t|\tCUSTOMER EMAIL\t|\tNUMBER OF PURCHASES`);
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases.length}`));