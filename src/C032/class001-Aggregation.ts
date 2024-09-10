// Aggregation between classes
export class ShoppingCart {
  private readonly products: Product[] = [];

  InsertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  amountProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce(
      (sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const p1 = new Product('Short', 80.45);
const shoppingCart = new ShoppingCart();

shoppingCart.InsertProducts(p1, p1);
console.log(shoppingCart.totalValue());
console.log(shoppingCart.amountProducts());
