import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-pdnutri',
  templateUrl: './add-pdnutri.component.html',
  styleUrls: ['./add-pdnutri.component.css']
})
export class AddPDNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AddProductDishForm = this.builder.group({

      barcode: this.builder.control('', Validators.required),
      vitamins: this.builder.control('', Validators.required),
      calcium: this.builder.control('', Validators.required),
      iron: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required),
      portion_size: this.builder.control('', Validators.required),
      energy: this.builder.control('',Validators.required),
      fat: this.builder.control('', Validators.required),
      sodium: this.builder.control('', Validators.required),
      carbs: this.builder.control('', Validators.required),
      protein: this.builder.control('',Validators.required),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddProductDish(){
      let formObj = this.AddProductDishForm.getRawValue();
      console.log(formObj);
      if(this.AddProductDishForm.valid){

        this.service.addPDNutri(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ProdDishNutriLandPage']);
        },
        (error: HttpErrorResponse) => {
          console.log(error.error); // Muestra el error en la consola
          this.AddProductDishForm.setErrors({unauthenticated: true});
          
        })
      }
    }

}
