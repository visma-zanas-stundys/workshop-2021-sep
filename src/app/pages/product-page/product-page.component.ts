import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  data$ = this.activatedRoute.data;
  params$ = this.activatedRoute.params;

  title = this.activatedRoute.snapshot.data.title;

  constructor(private activatedRoute: ActivatedRoute) {}
}
