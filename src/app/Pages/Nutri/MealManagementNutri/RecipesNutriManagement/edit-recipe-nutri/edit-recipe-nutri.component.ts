import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe-nutri',
  templateUrl: './edit-recipe-nutri.component.html',
  styleUrls: ['./edit-recipe-nutri.component.css']
})
export class EditRecipeNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    editRecipeNutriForm = this.builder.group({

      recipe_id: this.builder.control('', Validators.required),//PK
      portions: this.builder.control('', Validators.required),
      calories: this.builder.control('', Validators.required),
      ingredients: this.builder.control('',Validators.required),
      

    })

        /**
   * @description This function calls the function of the api to edit a gear of the system
   * @returns A succesfull edit of the selected gear or an error
   */
    proceedEditNutriRecipe(){
      let formObj = this.editRecipeNutriForm.getRawValue();
      console.log(formObj);
      if(this.editRecipeNutriForm.valid){

        this.service.putEditRecipeNutri(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/RecipeNutriLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
