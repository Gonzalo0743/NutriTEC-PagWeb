import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { GetRecipe } from 'src/app/Models/GetRecipe.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-recipe-nutri',
  templateUrl: './get-recipe-nutri.component.html',
  styleUrls: ['./get-recipe-nutri.component.css']
})
export class GetRecipeNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

    jsonResponse: any;
    response:any;
    RecipeData: GetRecipe[]=[];

    ShowRecipeNutriForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),
      
    })
                /**
   * @description This function calls the function of the api to show a specific gear of the system
   * @returns A succesfull show of the selected gear or an error
   */
    proceedConsultRecipeNutri(){
      if(this.ShowRecipeNutriForm.valid){

        let formObj = this.ShowRecipeNutriForm.getRawValue();

        console.log(formObj);

        this.service.getRecipeNutri(formObj).subscribe(item =>{
          

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.RecipeData = this.jsonResponse.result;
            console.log(this.RecipeData);

            this.response = Array.of(this.RecipeData);

          }

        },
        (error: HttpErrorResponse) => {
          console.log(error.error); // Muestra el error en la consola
          this.ShowRecipeNutriForm.setErrors({unauthenticated: true});
          
        })
      }
    }

  

}
