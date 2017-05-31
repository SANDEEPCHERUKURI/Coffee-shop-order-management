import { Component, OnInit,ViewChild } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ModalDirective } from 'ngx-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {
  public viewProducts: any = [];
  public billTable:any = [];
  public bill_Count: any = [];
  public bill_token:any=0;
  public bill_id:any=0;
  public totalbill:number=0;
  public showbillrow:any=[];
  public passbill:any=[];
  public getshowbill:any=[];
  @ViewChild('childModal') public childModal:ModalDirective;
  constructor(public localStorageService: LocalStorageService,private Routes:Router) {
    // if(this.billTable.length==0){
    // this.billTable = this.localStorageService.get('billtable');
    //
    if(this.localStorageService.get('billtable')!=null) {
      this.billTable = this.localStorageService.get('billtable');
    }
   this.bill_token=this.localStorageService.get('billtoken');
  this.bill_id=this.localStorageService.get('bill_id');
   this.passbill=this.localStorageService.get('billpass');
   // if(this.showbillrow.length==0) {
   //   this.showbillrow = this.localStorageService.get('showbillrow');
   // }
    if(this.localStorageService.get('showbillrow')) {
      this.showbillrow = this.localStorageService.get('showbillrow');
    }
    this.viewProducts = this.localStorageService.get("bill_products");
 // console.log(this.viewProducts);
    this.updatebillTable();
  }
  ngOnInit() {
  }

  updatebillTable() {
    let i=0;
    if (this.billTable.length == 0) {
      this.billTable[0]=this.viewProducts;
      this.localStorageService.set('billtable', this.billTable);
    }
    else {
      //alert(this.billTable.length);
      for (i = 0; i < this.billTable.length; i++) {

      }
      if(this.bill_token!=this.bill_id) {
        this.billTable[i] = this.viewProducts;
        this.localStorageService.set('billtable', this.billTable);
        this.bill_token = this.bill_id;
        this.localStorageService.set('billtoken', this.bill_token);
        this.showbillrow.push(this.passbill);
        console.log(this.passbill)
        this.localStorageService.set('showbillrow',this.showbillrow)
        console.log(this.showbillrow);
      }

    }
//  localStorage.clear();
    console.log(this.billTable);
  }
  getbill(bill_id,tot_bill){
      this.getshowbill=[];
    console.log(bill_id);
    for(let i =0;i<this.billTable.length;i++){
      if(bill_id == i) {
        this.totalbill=tot_bill;
        //alert("equal");
        for (let j = 0; j < this.billTable[i].length; j++) {

            this.getshowbill.push(this.billTable[i]);
          console.log(this.getshowbill);
        }
      }
    }
    this.childModal.show();
  }
  gotoBillPage(){
    this.Routes.navigate(['/bill']);
  }
  // tempmethod(){
  //
  // }

}
