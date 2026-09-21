import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { SearchResult } from './routes/search-result/search-result';
import { ProductDetail } from './routes/product-detail/product-detail';
import { AdminPage } from './routes/admin-page/admin-page';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'search', component: SearchResult },
    { path: 'product/:slug', component: ProductDetail },
    { path: 'admin/products', component: AdminPage },
];
