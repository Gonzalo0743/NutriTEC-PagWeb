import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign-product-to-recipe',
  templateUrl: './assign-product-to-recipe.component.html',
  styleUrls: ['./assign-product-to-recipe.component.css']
})
export class AssignProductToRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AssignProductRecipeForm = this.builder.group({
      barcode: this.builder.control('', Validators.required),
      recipe_id: this.builder.control('', Validators.required),
      
    })
    /**
   * @description This function calls the function of the api to add a new employee to the system
   * @returns A succesfull register of the new employee or an error
   */
    proceedAssignProductRecipe(){
      let formObj = this.AssignProductRecipeForm.getRawValue();
      console.log(formObj);

      if(this.AssignProductRecipeForm.valid){

        this.service.addAssignProductToRecipe(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ProdDishNutriLandPage']);
        },
        (error: HttpErrorResponse) => {
           console.log(error.error); // Muestra el error en la consola
          this.AssignProductRecipeForm.setErrors({unauthenticated: true});
          
        }
        )


        
      }
      else{
        console.log("Error");
      }
    }

}
