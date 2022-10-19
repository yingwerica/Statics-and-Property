// class Governor {
//     constructor(name, money, law, age){
//         this.name= name;
//         this.money= money;
//         this.law= law;
//         this.age= age
//     }
//     static takeTax(personName){
//         console.log(this.name+ " will take tax from " + personName);
//        }
    
// }

// const governor = new Governor('Nhan', 'takes taxes', 'votes legislation', 23)
// console.log(governor);
// Governor.takeTax('Will');

class Person {
    constructor(party, legalAge, county){
        this.party = party;
        this.legalAge = legalAge;
        this.county = county
    }
    vote(personName){
        console.log(personName, 'will vote this year!')
    }
    canDrink(age, name){
        return age >= 21 ? console.log(name + ' can drink!' ) : console.log( name + ' can not drink.');
    }
    reside(name, county){
        console.log(name + ' is living in ' + county);
    }

}

// Creat object and test mathods//
const person1 = new Person('any', 21, 'Broomfiled');
const person2 = new Person('any', 12, 'Thornton');
console.log(person1);
person1.vote("Ying");
person1.canDrink(21, "Bob" );
person2.reside('Susan', 'Thornton');

//Create a PostalWorker class that inherits from person, add some methods//
class PostalWorker extends Person {
    constructor(party, legalAge, county, name) {
        super(party,legalAge,county)
        this.name = name;
    }
    worktime(name, hours){
        console.log(name + ' works ' + hours + ' hours a day.');
    }
}

//Create 2 PostalWorkers, log them and test all their methods//
const postalWorker1 = new PostalWorker('any', 35, 'Broomfield', 'Peter');
console.log(postalWorker1);
postalWorker1.reside('Peter', "Broomfield");
postalWorker1.vote('Peter');
postalWorker1.canDrink(35, 'Peter');
postalWorker1.worktime('Peter', 10);

const postalWorker2 = new PostalWorker('any', 15, 'Lonetree', 'Yoyo');
console.log(postalWorker2);
postalWorker2.reside('Yoyo', "Lonetree");
postalWorker2.vote('Yoyo');
postalWorker2.canDrink(15, 'Yoyo');
postalWorker2.worktime('Yoyo', 2);

//Create a Chef class that inherits from person, add some methods//
class Chef extends Person {
    constructor(party, legalAge, county, name) {
        super(party,legalAge,county)
        this.name = name;
    }
    skilledat(name, style){
        console.log(name + ' is good at ' + style +'.');
    }
}

//Create 2 Chefs, log them and test all their methods//
const chef1 = new Chef('any', 35, 'Broomfield', 'Peter');
console.log(chef1);
chef1.reside('Peter', "Broomfield");
chef1.vote('Peter');
chef1.canDrink(35, 'Peter');
chef1.skilledat('Peter', 'stirfry');

const chef2 = new Chef('any', 28, 'Boulder', 'Chester');
console.log(chef2);
chef2.reside('Chester', "Boulder");
chef2.vote('Chester');
chef2.canDrink(28, 'Chester');
chef2.skilledat('Chester', 'bakery');