import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReceivestockComponent } from "./receivestock/receivestock.component";
import { LoginComponent } from "./login/login.component";
import { ProductCategoriesComponent } from "./product-categories/product-categories.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-categories', component: ProductCategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'receive-stock', component: ReceivestockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
