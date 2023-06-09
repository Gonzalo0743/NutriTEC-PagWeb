import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-recipe-nutri',
  templateUrl: './add-recipe-nutri.component.html',
  styleUrls: ['./add-recipe-nutri.component.css']
})
export class AddRecipeNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AddRecipeNutriForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),
      portions: this.builder.control('', Validators.required),
      calories: this.builder.control('', Validators.required),
      ingredients: this.builder.control('',Validators.required),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddRecipeNutri(){
      let formObj = this.AddRecipeNutriForm.getRawValue();
      console.log(formObj);
      if(this.AddRecipeNutriForm.valid){

        this.service.addRecipeNutri(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/RecipeNutriLandPage']);
        },
        (error: HttpErrorResponse) => {
          console.log(error.error); // Muestra el error en la consola
          this.AddRecipeNutriForm.setErrors({unauthenticated: true});
          
        })
      }

    }

}
