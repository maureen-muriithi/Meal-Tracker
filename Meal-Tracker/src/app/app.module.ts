import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './components/food/food.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodFormComponent } from './components/food-form/food-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodDetailsComponent,
    NavbarComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
