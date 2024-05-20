import { Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { JoboPageComponent } from './pages/jobo-page/jobo-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"jobo",component:JoboPageComponent},
    {path:"contador",component:ContadorComponent},
    ];
