import {Routes} from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { BillingOrderformComponent } from './billing-orderform/billing-orderform.component';
export const rootRouterConfig: Routes =[
  {path:'',  redirectTo:'list-product',pathMatch:'full'},
  {path:'list-product', component:ListProductsComponent},
  {path:'bill', component:BillingOrderformComponent}

]
