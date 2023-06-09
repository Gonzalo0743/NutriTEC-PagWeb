import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { AllProductsDishesData } from 'src/app/Models/AllProductsDishes.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consult-prod-dish',
  templateUrl: './consult-prod-dish.component.html',
  styleUrls: ['./consult-prod-dish.component.css']
})
export class ConsultProdDishComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

  jsonResponse: any;
  response:any;
  ProductData: AllProductsDishesData[]=[];

  ShowProductDishClientForm = this.builder.group({
    barcode: this.builder.control('', Validators.required),
    
  })
              /**
 * @description This function calls the function of the api to show a specific gear of the system
 * @returns A succesfull show of the selected gear or an error
 */
  proceedConsultProductClient(){
    if(this.ShowProductDishClientForm.valid){

      let formObj = this.ShowProductDishClientForm.getRawValue();

      console.log(formObj);

      this.service.getProdDishClient(formObj).subscribe(item =>{
        

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.ProductData = this.jsonResponse.result;
          console.log(this.ProductData);
          this.response = Array.of(this.ProductData);

        }

      },
      (error: HttpErrorResponse) => {
        console.log(error.error); // Muestra el error en la consola
        this.ShowProductDishClientForm.setErrors({unauthenticated: true});
        
      })
    }
  }

}
