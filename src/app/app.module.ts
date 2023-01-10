import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent} from "./components/carousel/carousel.component";
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {AuthComponent } from './components/auth/auth.component';
import {CarComponent} from "./components/cars/car/car.component";
import {CarCreateComponent} from "./components/cars/car-create/car-create.component";
import {CarListComponent} from "./components/cars/car-list/car-list.component";
import {CommonModule} from "@angular/common";
import {AllCarComponent} from "./components/cars/all-car/all-car.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    AuthComponent,
    CarComponent,
    CarCreateComponent,
    CarListComponent,
    AllCarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
