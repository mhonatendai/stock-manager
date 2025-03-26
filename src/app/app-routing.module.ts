import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReceivestockComponent } from "./receivestock/receivestock.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'receive-stock', component: ReceivestockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
