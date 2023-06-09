import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AddRecipeForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),
      portions: this.builder.control('', Validators.required),
      calories: this.builder.control('', Validators.required),
      ingredients: this.builder.control('',Validators.required),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddRecipe(){
      let formObj = this.AddRecipeForm.getRawValue();
      console.log(formObj);
      if(this.AddRecipeForm.valid){

        this.service.addRecipe(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/RecipesLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }
  

}
