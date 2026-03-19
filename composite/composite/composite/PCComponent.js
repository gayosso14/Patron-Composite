export class PCComponent {
  constructor(name, description, price) {
    this.name        = name;
    this.description = description;
    this.price       = price;
  }
  getName()        { return this.name; }
  getDescription() { return this.description; }
  getPrice()       { return this.price; }
  isComposite()    { return false; }
}