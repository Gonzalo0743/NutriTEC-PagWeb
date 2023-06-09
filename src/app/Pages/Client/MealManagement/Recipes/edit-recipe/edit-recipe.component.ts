import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    editRecipeForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),//PK
      portions: this.builder.control('', Validators.required),
      calories: this.builder.control('', Validators.required),
      ingredients: this.builder.control('',Validators.required),
      

    })

        /**
   * @description This function calls the function of the api to edit a gear of the system
   * @returns A succesfull edit of the selected gear or an error
   */
    proceedEditRecipe(){
      let formObj = this.editRecipeForm.getRawValue();
      console.log(formObj);
      if(this.editRecipeForm.valid){

        this.service.putEditRecipe(formObj).subscribe(item => {
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
