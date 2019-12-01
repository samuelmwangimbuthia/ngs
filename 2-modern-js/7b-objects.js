// A javascript object is a collection of named values
// name and value separated by a full colon
 var person = {
     firstname:"John",
     LastName:"Doe",
     fullName: function () {
         return this.firstname + ' ' + this.LastName;
     }
    };
// the named values in Javascript are called properties
// methods are actions that can be performed on objects
// object properties can be either primitive values, other objects, and functions.
// object property contaning a function defination is an object method
// console.log(person.firstname+ " " + person.LastName+ " " + person.nationality);
person.nationality = 'kenyan';
// delete person.LastName;
//console.log(person.firstname+ " " + person.LastName+ " " + person.nationality);
console.log (person.fullName());