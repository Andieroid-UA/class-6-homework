console.groupCollapsed("Warmup");
//no parentheses here because we are not calling the function
class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}

const monkey = new Animal('monkey', "Shaun");
console.log(monkey);
const fish = new Animal('fish', "Flounder");
console.log(fish);

monkey.name = "Oskar";
console.log(monkey);
console.groupEnd();