import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { GetProductsByRecipeModel } from 'src/app/Models/GetProductByRecipe.interface';

@Component({
  selector: 'app-get-products-by-recipe',
  templateUrl: './get-products-by-recipe.component.html',
  styleUrls: ['./get-products-by-recipe.component.css']
})
export class GetProductsByRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

  jsonResponse: any;
  response:any;
  ProductData: GetProductsByRecipeModel[]=[];

  GetProductByRecipeForm = this.builder.group({
    recipe_id: this.builder.control('', Validators.required),
    
  })
              /**
 * @description This function calls the function of the api to show a specific gear of the system
 * @returns A succesfull show of the selected gear or an error
 */
  proceedProductByRecipeForm(){
    if(this.GetProductByRecipeForm.valid){

      let formObj = this.GetProductByRecipeForm.getRawValue();

      console.log(formObj);

      this.service.getProductByRecipe(formObj).subscribe(item =>{
        

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.ProductData = this.jsonResponse.result;
          console.log(this.ProductData);
          this.response = Array.of(this.ProductData);

        }
        else{
          this.GetProductByRecipeForm.setErrors({ unauthenticated: true});
        }
      })
    }
  }

}
