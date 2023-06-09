import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-recipe-nutri',
  templateUrl: './delete-recipe-nutri.component.html',
  styleUrls: ['./delete-recipe-nutri.component.css']
})
export class DeleteRecipeNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteRecipeNutriForm = this.builder.group({
    recipe_id: this.builder.control('', Validators.required),
  
  })

            /**
   * @description This function calls the function of the api to delete a gear of the system
   * @returns A succesfull delete of the specific gear or an error
   */
  
  proceedDeleteRecipeNutri(){
      
      if(this.DeleteRecipeNutriForm.valid){
        let formObj = this.DeleteRecipeNutriForm.getRawValue();
        console.log(formObj);

        this.service.deleteRecipeNutri(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/RecipeNutriLandPage']);

          }else {
            
            this.DeleteRecipeNutriForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
