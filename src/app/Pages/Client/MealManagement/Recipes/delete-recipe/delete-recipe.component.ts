import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteRecipeForm = this.builder.group({
    recipe_id: this.builder.control('', Validators.required),
  
  })

            /**
   * @description This function calls the function of the api to delete a gear of the system
   * @returns A succesfull delete of the specific gear or an error
   */
  
  proceedDeleteRecipe(){
      
      if(this.DeleteRecipeForm.valid){
        let formObj = this.DeleteRecipeForm.getRawValue();
        console.log(formObj);

        this.service.deleteRecipe(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/RecipesLandPage']);

          }else {
            
            this.DeleteRecipeForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
