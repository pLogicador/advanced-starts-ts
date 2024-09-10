// Association between classes
export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  writing(): void {
    if (this.tool === null) {
      console.log('I cant write without a tool');
      return;
    }
    this.tool.writing();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract writing(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  writing(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class Typewriter extends Tool {
  writing(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Pedro');
const pen = new Pen('Bic');
const typewriter = new Typewriter('typewriter');

// console.log(writer.name);
// console.log(pen.name);
// console.log(typewriter.name);

writer.writing();
writer.tool = pen;
writer.writing();
