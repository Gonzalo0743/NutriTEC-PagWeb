import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { GetRecipe } from 'src/app/Models/GetRecipe.interface';

@Component({
  selector: 'app-consult-recipe',
  templateUrl: './consult-recipe.component.html',
  styleUrls: ['./consult-recipe.component.css']
})
export class ConsultRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

    jsonResponse: any;
    response:any;
    RecipeData: GetRecipe[]=[];

    ShowRecipeForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),
      
    })
                /**
   * @description This function calls the function of the api to show a specific gear of the system
   * @returns A succesfull show of the selected gear or an error
   */
    proceedConsultRecipe(){
      if(this.ShowRecipeForm.valid){

        let formObj = this.ShowRecipeForm.getRawValue();

        console.log(formObj);

        this.service.getRecipe(formObj).subscribe(item =>{
          

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.RecipeData = this.jsonResponse.result;
            console.log(this.RecipeData);

            this.response = Array.of(this.RecipeData);

          }
          else{
            this.ShowRecipeForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
