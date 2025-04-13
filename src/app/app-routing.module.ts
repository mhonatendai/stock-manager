import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReceiveStockComponent } from "./receive-stock/receive-stock.component";
import { LoginComponent } from "./login/login.component";
import { ProductCategoriesComponent } from "./product-categories/product-categories.component";
import { PurchaseOrdersComponent } from "./purchase-orders/purchase-orders.component";
import { HandleReturnComponent } from "./handle-return/handle-return.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-categories', component: ProductCategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'purchase-orders', component: PurchaseOrdersComponent },
  { path: 'receive-stock', component: ReceiveStockComponent },
  { path: 'handle-return', component: HandleReturnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
