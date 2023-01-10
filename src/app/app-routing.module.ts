import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AllCarComponent } from "./components/cars/all-car/all-car.component";
import { CarListComponent } from "./components/cars/car-list/car-list.component";
import { CarComponent } from "./components/cars/car/car.component";
import {CarCreateComponent} from "./components/cars/car-create/car-create.component";
import {CategoryCreateComponent} from "./components/category-create/category-create.component";
import {AuthComponent} from "./components/auth/auth.component";
import {AdminGuard} from "./guards/admin-guard";


const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'all-car/create', component: CarCreateComponent},
  { path: 'cars',  component: AllCarComponent,
    children: [
      {
      path:'create', component: CarCreateComponent, canActivate: [AdminGuard]
      },
      {
        path:':carId' ,component: CarComponent
      },
      {
        path:'category/:categoryId' , component:CarListComponent
      },
    ]
  },
  {
    path: 'categories/create', component: CategoryCreateComponent, canActivate: [AdminGuard]
  },
  { path: 'uyeol', component: AuthComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
