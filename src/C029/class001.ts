// `Classes`, `methods` and `abstract attributes`
export abstract class Character {
  protected abstract emoji: string; // Attribute to store the emoji

  constructor(
    protected name: string,
    protected stamina: number,
    protected strength: number,
    protected healthPoints: number,
    protected attackPower: number,
  ) {}

  attack(character: Character): void {
    const staminaCost = 10; // Stamina cost per attack

    if (this.stamina >= staminaCost) {
      this.stamina -= staminaCost; // Reduces stamina after attack

      // Calculate damage based on attack and strength
      const damage = this.attackPower + this.strength * 0.5;
      character.takeDamage(damage);
      console.log(`${this.emoji} ${this.name} attacked ${character.name} and dealt ${damage} damage!`);
      console.log(`${character.emoji} ${character.name} has ${character.healthPoints} HP left.`);
    } else {
      console.log(`${this.emoji} ${this.name} is too tired to attack!`);
    }
  }

  // Method to receive damage
  takeDamage(damage: number): void {
    this.healthPoints -= damage;
    if (this.healthPoints <= 0) {
      this.die();
    }
  }

  // Method to die
  die(): void {
    console.log(`${this.emoji} ${this.name} has died.`);
  }

}

export class Hero extends Character {
  protected emoji = '\u{1F9DD}';
}

export class Enemy extends Character {
  protected emoji = '\u{1F9DB}';
}

const warrior = new Hero('warrior', 50, 100, 500, 15);
const villain = new Enemy('villain', 100, 100, 200, 10);

warrior.attack(villain);
warrior.attack(villain);
villain.attack(warrior);
villain.attack(warrior);
warrior.attack(villain);
warrior.attack(villain);
