//From the video "JavaScript this Keyword Explained Simply"


/*
console.groupCollapsed('Part 1');
function test() {
    console.log(this);
}

test();// whatever object is calling the current function
console.groupEnd();


//used as a function
console.groupCollapsed('Part 2');
const user ={
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        console.log(this);
        console.log(this.firstName + ' ' + this.lastName);
    }   
}

user.fullName(); // John Doe
console.groupEnd();


//used as an arrow function
console.groupCollapsed('Part 3');
const user = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['music', 'sports', 'reading'],
    listHobbies: function() 
    {
// prints the first name along with each hobby listed
        this.hobbies.forEach(function (hobby) {
            console.log(this.firstName)
            console.log(hobby)
        }, this);
    }
}

user.listHobbies(); // music sports reading
console.groupEnd();
*/

//this is grabbing the name and logging the names, the user names are defined below
console.groupCollapsed('Part 4');

function User(name) {
    this.name = name;
    console.log(this);
}

const devsage = new User('DevSage');
const codingphase = new User('CodingPhase');

console.groupEnd();