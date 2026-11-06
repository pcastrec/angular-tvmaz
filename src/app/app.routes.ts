import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { adultGuard } from './guards/adult-guard';
import { Favorite } from './pages/favorite/favorite';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'favorites', component: Favorite },
    { path: 'show/:id', component: Detail, canActivate: [adultGuard] }
];
