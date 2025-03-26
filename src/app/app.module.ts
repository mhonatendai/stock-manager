import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import { LoginComponent } from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgOptimizedImage,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
