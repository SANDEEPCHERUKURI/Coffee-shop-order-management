import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-billing-orderform',
  templateUrl: './billing-orderform.component.html',
  styleUrls: ['./billing-orderform.component.css']
})
export class BillingOrderformComponent implements OnInit {
  @ViewChild('staticModal') public staticModal:ModalDirective;
  constructor() { }

  ngOnInit() {
    this.staticModal.show();
  }

}
