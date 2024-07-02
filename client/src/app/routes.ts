import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
];

export default routeConfig;
