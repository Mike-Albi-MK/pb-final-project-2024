class Pokemon {
    constructor (name, health, magic, skills,counter) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = skills;
        this.counter = counter;
    };


    learnAttackSkill(newSkill){
        if (this.skills.includes(newSkill)){
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
        if (this.health > 0 && opponent.health > 0 && this.magic >= skill.magic) {
            return 
        } 
    };
}

class AttackSkill {
    constructor (attack, damage, magic) {
        this.attack = attack,
        this.damage = damage,
        this.magic = magic,
    };
}