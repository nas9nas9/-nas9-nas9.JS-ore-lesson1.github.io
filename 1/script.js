let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData: function(){
        console.log(` Firstname: ${this.firstName}, Secondname: ${this.secondName}`)
    }
    };
console.log(person);
person.showData();

let newPerson = person;
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

console.log(newPerson);
newPerson.showData();