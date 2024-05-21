class Pokemon {
    constructor (name, health, magic, skills, counter) {
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
let butterfree = new Pokemon("butterfree", 70, 60);
let squirtle = new Pokemon("squirtle", 50, 70);
let electabuzz = new Pokemon("electabuzz", 90, 90);
let marowak = new Pokemon("marowak", 80, 100);
let onix = new Pokemon("onix", 60, 85);
let cloyster = new Pokemon("cloyster", 90, 55);
let hitmonchan = new Pokemon("hitmonchan", 110, 65);
let seaking = new Pokemon("seaking", 95, 40);
let misterMine = new Pokemon("mistermine", 65, 100);
let moltres = new Pokemon("moltres", 100, 35);
let gastly = new Pokemon("gastly", 40, 95);



// create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);
let seedBomb = new AttackSkill("seedbomb", 80, 20);
let solarBeam = new AttackSkill("solarbeam", 120, 40);
let slam = new AttackSkill("slam", 80, 10);
let confusion = new AttackSkill("confusion", 50, 30);
let psybeam = new AttackSkill("psybeam", 60, 30);
let waterGun = new AttackSkill("watergun", 40, 20);
let skullBash = new AttackSkill("skullbash", 100, 40);
let thunderPunch = new AttackSkill("thunderpunch", 120, 30);
let boneClub = new AttackSkill("boneclub", 60, 30);
let tackle = new AttackSkill("tackle", 40, 10);
let rockThrow = new AttackSkill("rockthrow", 50, 20);
let auroraBeam = new AttackSkill("aurorabeam", 70, 40);
let waterfall = new AttackSkill("waterfall", 80, 40);
let skyAttack = new AttackSkill("skyattack", 140, 60);
let dreamEater = new AttackSkill("dreameater", 100, 50);

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
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);