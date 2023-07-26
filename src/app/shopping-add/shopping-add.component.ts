import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { tokens } from '../app.module';
import { ShoppingService } from '../shoppping-service.service';


function ValidateDescription():ValidatorFn{
    return (control):ValidationErrors|null=>{
      console.log(control.value)
      if(control.value.length > 10){
        return {error: "max length exceeded 10"}
      }
      return null;
    }
}


@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.scss']
})
export class ShoppingAddComponent implements OnInit {

  dumblist:any = [];
  selectedValue= "";
  formshop: FormGroup;
  phoneNumber:number = 0;
  Json2 = JSON;
  constructor(private fb: FormBuilder, @Inject(tokens.shopToken) private shoppingservice: ShoppingService) {
     this.formshop = this.fb.group({
        "shop-name":['',Validators.required],
        "shop-desc":['default desc', ValidateDescription()],
        "shop-select":['you']
      })

   }

  ngOnInit(): void {
      this.dumblist = this.shoppingservice.fetchShoppingList();
  }

  save(){
    if(!this.formshop.valid){
      console.log(this.formshop.controls);
      console.log("not valid");
      console.log(this.formshop.errors);
      return;
    }
    console.log(this.formshop.value);
  }

}
