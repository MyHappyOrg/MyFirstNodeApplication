/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');

faker.seed(123);
console.log(faker.seedValue);

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(randomName);
console.log(randomEmail);
// console.log(randomCard);

console.log(faker.address.latitude());
console.log(faker.address.longitude());

faker.seed(124); // This will reset the random variable value
console.log(faker.seedValue);

const randomName1 = faker.name.findName(); // Rowan Nikolaus
const randomEmail1 = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(randomName1);
console.log(randomEmail1);
// console.log(randomCard);

console.log(faker.address.latitude());
console.log(faker.address.longitude());
