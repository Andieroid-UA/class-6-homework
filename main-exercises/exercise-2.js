//From the Classes and Object Oriented Programming (OOP) video

/*
console.groupCollapsed('Player');

const player = {
    name: '?',
    hp: 100,
    mp: 0,
    items: []
}

const hanSolo = player;
const darthVader = player;//this is not ideal as the code stands here, because both players have the same object labeled player.  So if one player changes the object, the other player will also be changed.  This is not what we want.  We want each player to have their own object.

console.groupEnd();


console.groupCollapsed('Player');// the problem with this script is that it logs han solo's info twice

const player = {
    name: '?',
    hp: 100,
    mp: 0,
    items: [],
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);
console.groupEnd();

 

console.groupCollapsed('Player');//The issue here is that we have to make a new object and stats for each player. It will add up very quickly. How can we alter a player object without making a new container for each one? Aka get out of the project prototype

const createPlayer = (name, hp, mp, items) => {

    return {
        name,
        hp,
        mp,
        items,
    };
};

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
hanSolo.hp = 150;
console.log(hanSolo);

const darthVader = createPlayer("Darth Vader", 90, 20, ["Saber"]);
console.log(darthVader);

console.groupEnd();




console.groupCollapsed('Player');

// This is what we WANT to do.  We want to create a class that we can use to create new players.  We can use the class to create new players without having to create a new object for each player.  We can just create a new player with the class

class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo);

const darthVader = new Player("Darth Vader", 90, 20, ["Saber"]);
console.log(darthVader);

console.groupEnd();
*/



console.groupCollapsed('Main Exercise 2');

//constructor and speak exist amongst all players, and name, hp... are in the state of each instance of player...
class Player {
    //age = 20;
    /*occurings behind the scenes, if not here it's inserted anyway**/
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        //this.age = 20;
    }   

    //you can't add const here, it's not a function, it's a method.
    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);//logs player {}. Player here is actually calling constructor function behind the scenes...
hanSolo.speak("I'm Han Solo");
//hanSolo.age = 30;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));// logs array []
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));// logs "constructor"

const andie = new Player("Andie", 10, 3, ["Iced Coffee"]);
andie.speak("I'm Andie and what am I doing in a Star Wars fic?");
console.log(andie);
console.log(Object.getOwnPropertyNames(andie));// logs array []
console.log(Object.getOwnPropertyNames(andie.__proto__));// logs "constructor"

//adding the speak function here makes it a lot cleaner, since it will tie to the player profile, NOT the overall player object. In the first run speak is it's own individual function taking space in the prototype... AND REMEMBER. These "this" statements are inferred under the function
function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    this.speak = function(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
}

const darthVader = new AnotherPlayer("Darth Vader", 90, 20, ["Saber"]);
console.log(darthVader);
darthVader.speak("HSHDDFKSHSHHHHH");
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
console.groupEnd();