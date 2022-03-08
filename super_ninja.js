class Ninja {
    constructor(nameInput){
        this.name = nameInput;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name} \nStrength: ${this.strength} \nSpeed: ${this.speed} \nHealth: ${this.health}`);
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(nameInput){
        super(nameInput);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();
