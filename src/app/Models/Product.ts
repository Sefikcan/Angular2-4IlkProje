export class Product {
  name: string;
  category: string;
  price: number;
  img: string;

  constructor(Name: string, Category: string, Price: number, Img: string) {
    this.name = Name;
    this.category = Category;
    this.price = Price;
    this.img = Img;
  }
}
