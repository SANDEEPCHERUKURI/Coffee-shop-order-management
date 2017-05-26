import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers:[FormBuilder]
})
export class ListProductsComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('editModel') public editModel :ModalDirective;
  @ViewChild('viewModel') public viewModel:ModalDirective;
  public productid:number;
  public productname:string;
  public productprice:number;
  public productList:any=[];
  public edit_p_id:number;
  public edit_p_name:string;
  public edit_p_price:number;
  public complexForm : FormGroup;
  constructor(public localStorageService: LocalStorageService,private Routes:Router,public fb: FormBuilder) {
    this.productList=this.localStorageService.get("list_products");

    this.complexForm = this.fb.group({
      'S.no' :new FormControl('',[Validators.required]),
      'productname':new FormControl ('',[Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]),
      'productprice' :new FormControl('',[ Validators.compose([Validators.required,Validators.maxLength(2)])])
    })
    // console.log(this.complexForm);
    // this.complexForm.valueChanges.subscribe( (form: any) => {
    //     console.log('form changed to:', form);
    //   }
    // );
    // this.complexForm.valueChanges.subscribe( (form: any) => {
    //     console.log('form changed to:', form);
    //   }
    // );

  }
  addNewProduct=()=>{
    let product_obj={
      p_id:this.productid,
      p_name:this.productname,
      p_price:this.productprice
    };
    this.productList.push(product_obj);
    this.childModal.hide();
    this.localStorageService.set("list_products",this.productList);
  }
  getEditProduct=(idProduct:number,opt:number)=>{
    for(let productinfo in this.productList ){
        if(idProduct==this.productList[productinfo].p_id){
            this.edit_p_id=this.productList[productinfo].p_id;
            this.edit_p_name=this.productList[productinfo].p_name;
            this.edit_p_price=this.productList[productinfo].p_price;
        }
        if(opt==1)
        this.editModel.show();
        else
          this.viewModel.show();
    }
  }
  editProduct=()=>{
    for (let i in this.productList){
      if(this.edit_p_id == this.productList[i].p_id){
        alert("equal");
        this.productList[i].p_id=this.edit_p_id;
        this.productList[i].p_name=this.edit_p_name;
        this.productList[i].p_price=this.edit_p_price;
      }
    }
    console.log(this.productList);

    this.editModel.hide();
    this.localStorageService.set("list_products",this.productList);
  }
  conformationDelete=(del_index:any)=>{
    this.productList.splice(del_index,1);
    console.log(this.productList);
    this.localStorageService.set("list_products",this.productList);
  }
  bill(){
    this.Routes.navigate(['/bill'])
  }

}
