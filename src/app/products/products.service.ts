import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getOneProduct(productId: string): Observable<IProduct> {
    const fakeProduct: IProduct = {
      id: productId,
      image: 'https://placeimg.com/640/480/tech',
      name: `Fake product #${productId}`,
      price: 20.99,
    };

    return timer(1000).pipe(map(() => fakeProduct));
  }
}
