import { Component, OnInit,ViewChild } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {SelectComponent} from 'ng2-select';
import {Router} from '@angular/router';


@Component({
  selector: 'app-billing-orderform',
  templateUrl: './billing-orderform.component.html',
  styleUrls: ['./billing-orderform.component.css']
})
export class BillingOrderformComponent implements OnInit {
  get selected(): (value: string) => void {
    return this._selected;
  }
  @ViewChild('ng') public ngSelect :SelectComponent;


  public listofProducts:any=[];
  public customer:string='sandeep';
  public totalBill:number=0;
  public pro_qyt;
  public arr=[1,2,3,4,5,6,7,8,9,10];
  public billProducts:any=[];
  public list_items=[];
  public bill_id:any=0;
  public showBillProcess:boolean=false;
  constructor(public localStorageService: LocalStorageService,private Routes:Router) {
    this.listofProducts=this.localStorageService.get("list_products");
    this.bill_id=this.localStorageService.get("bill_id");
    //console.log(this.listofProducts);
    for(let i in this.listofProducts) {
      this.list_items.push(this.listofProducts[i].p_name);
    }
  }
  ngOnInit() {
    //this.staticModal.show();
  }
  public value:any;
  private _selected=(value:string):void=> {
    let count=0;
    console.log('My', value);
    this.ngSelect.active =[];

    for(let i in this.list_items){
      count=count+1;
      if(value==this.list_items[i]){
        this.list_items.splice(count-1,1);

        console.log(this.list_items)

      }
    }
    this.addBillProducts(value);
    this.ngSelect.items=this.list_items;
  }

  public removed(value:string):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:string):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:string):void {
    this.value = value;
    console.log(value);
  }
  addBillProducts=(pro_name:string)=>{
    let flag=0;
    let billObj={};
    for (let i in this.listofProducts) {
      if (pro_name == this.listofProducts[i].p_name) {
        billObj = {
          bill_id:this.listofProducts[i].p_id,
          bill_name: this.listofProducts[i].p_name,
          bill_qty: 1,
          bill_price: this.listofProducts[i].p_price,
          bill_tot_price:this.listofProducts[i].p_price
        }
        this.billProducts.push(billObj);
        this.total_amount();
        this.localStorageService.set("bill_products",this.billProducts);

      }
    }
  }
  total_amount=()=>{
    this.totalBill=0;
    this.showBillProcess=true
    for(let i in this.billProducts){
      this.totalBill=(this.totalBill)+Number(this.billProducts[i].bill_tot_price);
    }
  }
  addQuantity=(item_name,qyt)=>{

    for (let j in this.billProducts) {
      if(item_name==this.billProducts[j].bill_name){
        this.billProducts[j].bill_qty=qyt;
        this.billProducts[j].bill_tot_price=this.billProducts[j].bill_price * this.billProducts[j].bill_qty;
        this.total_amount();
        this.localStorageService.set("bill_products",this.billProducts);
        break;
      }
    }
  }
  navBillPage=()=>{
    this.bill_id+=1;
   // alert(this.bill_id);
    let billobj={
      bill_id:this.bill_id,
      total_bill:this.totalBill,
      billby:this.customer
    };
    this.localStorageService.set("bill_id",this.bill_id);
    this.localStorageService.set('billpass',billobj);
    this.Routes.navigate(['/viewbill'])
  }
  ViewBillRecords=():void=>{
    this.Routes.navigate(['/viewbill'])
  }
}
