import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductResolver } from './products/product.resolver';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'App' },
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    data: { title: 'Product | App' },
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
