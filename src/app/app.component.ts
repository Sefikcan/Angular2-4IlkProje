import { Component, Injectable } from '@angular/core';
import { Product } from './Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()

export class AppComponent {
  selectedCat = '';
  carList: Product [] = [] ;
  ProductList: Product [] = [
    new Product ('Vestel', 'Telefon', 4000, ''),
    new Product ('Asus', 'Bilgisayar', 6000, ''),
    new Product ('IPhone', 'Telefon', 3000, ''),
    new Product ('LG', 'Televizyon', 2000, '')
  // tslint:disable-next-line:semicolon
  ]

  CategoryList: string [] = ['Telefon', 'Bilgisayar', 'Televizyon'];

  selectedCategory(categoryName) {
    this.selectedCat = categoryName;
  }

  addCart(product: Product) {
    this.carList.push(product);
  }
}
