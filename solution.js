class Pokemon {
    constructor (name, health, magic, skills,counter) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = skills || [];
        this.counter = counter;
    };


    learnAttackSkill(newSkill){
        if (!this.skills.includes(newSkill)){
            this.skills.push(newSkill);
            return `${this.name} has learned learned ${newSkill.attack} as a new skill`
        }
    };

    showStatus(){
        console.log(`${this.name}'s Status:`);
        console.log(`Health: ${this.health}`);
        console.log(`Magic: ${this.magic}`);

        if (this.counter > 3) {
            console.log(`${this.name} has won the battle!`);
        } else {
            console.log(`${this.name} has not won the battle yet!`)
        }

    };

    getMagics(){
        let increaseNumber = Math.floor(Math.random() * 21);
        this.magic += increaseNumber;
        console.log(`${this.name} has gained ${this.magic} magic!`)
    };

    hasEnoughMagic(skillName){
        const skill = this.skills.find(skill => skill.attack === skillName);
        
        if (skill) {
            return this.magic >= skill.magic;
        } else {
            return false;
        }
    }; 

    isAlive(){
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    };


    attack(skillName, opponent){
        if (this.health > 0 && opponent.health > 0 && this.hasEnoughMagic(skillName)) {
            const skill = this.skills.find(skill => skill.attack === skillName);

            if (skill) {

            this.magic -= skill.magic;
            opponent.receiveDamage(skill.damage);
            this.counter++;
            this.showStatus();
            opponent.showStatus();

        } 
    } else {
        return `${this.name} has no ${skillName} to attack!`
    }
    };

    receiveDamage(damage) {
        this.health -= damage;
        return `${this.name} received ${damage} damage!!!`
    }
}

class AttackSkill {
    constructor (attack, damage, magic) {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    };
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

// pikachu learning skills
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

// bulbasaur learning skills
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);


// Pokemons starts attacking each other
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur);