import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { BillingOrderformComponent } from './billing-orderform/billing-orderform.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.router';
import { ModalModule } from 'ngx-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    BillingOrderformComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
