import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { IProduct } from './models/product.interface';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    const id = route.paramMap.get('id');

    return id ? this.productsService.getOneProduct(id) : EMPTY;
  }
}
