// Composition between classes
export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  turnOff(): void {
    this.engine.turnOff();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  stop(): void {
    this.engine.stop();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is turn on...');
  }

  turnOff(): void {
    console.log('Engine is turn off...');
  }

  accelerate(): void {
    console.log('Engine is accelerating...');
  }

  stop(): void {
    console.log('Engine is stopping...');
  }
}

const car = new Car();
car.turnOn();
car.accelerate();
car.stop();
car.turnOff();
