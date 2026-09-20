import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { SearchResult } from './routes/search-result/search-result';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'search', component: SearchResult }
];
