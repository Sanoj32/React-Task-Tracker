let person = {
    firstName: 'John',
    lastName: 'Doe'
};
const { firstName: fname, lastName: lname } = person;
console.log(fname, lname);