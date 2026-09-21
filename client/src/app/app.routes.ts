import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { SearchResult } from './routes/search-result/search-result';
import { ProductDetail } from './routes/product-detail/product-detail';
import { AdminPage } from './admin/admin-page/admin-page';
import { MainLayout } from './main-layout/main-layout';
import { NewProduct } from './admin/new-product/new-product';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'search', component: SearchResult },
      { path: 'product/:slug', component: ProductDetail },
    ],
  },
  { path: 'admin/products', component: AdminPage },
  { path: 'admin/products/new', component: NewProduct }
];
