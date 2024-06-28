import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Event details',
  },
];

export default routeConfig;
