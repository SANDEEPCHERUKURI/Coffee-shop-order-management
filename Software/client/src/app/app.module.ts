import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { BillingOrderformComponent } from './billing-orderform/billing-orderform.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.router';
import { ModalModule } from 'ngx-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
import {SelectModule} from 'ng2-select';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    BillingOrderformComponent,
    ViewBillComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ModalModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'}),
    SelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
