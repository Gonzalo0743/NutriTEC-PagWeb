import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign-eating-plan-to-client',
  templateUrl: './assign-eating-plan-to-client.component.html',
  styleUrls: ['./assign-eating-plan-to-client.component.css']
})
export class AssignEatingPlanToClientComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AssignEatingPlanToClientForm = this.builder.group({

      client_id: this.builder.control('', Validators.required),
      nutritionist_id: this.builder.control('', Validators.required),
      eatplan_id: this.builder.control('', Validators.required),

    })
    /**
   * @description This function calls the function of the api to add a new employee to the system
   * @returns A succesfull register of the new employee or an error
   */
    proceedAssignEatinPlanToClient(){
      let formObj = this.AssignEatingPlanToClientForm.getRawValue();
      console.log(formObj);

      if(this.AssignEatingPlanToClientForm.valid){

        this.service.addAssignEatinPlanToClient(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/PlansLandPage']);
        },
        (error: HttpErrorResponse) => {
           console.log(error.error); // Muestra el error en la consola
          this.AssignEatingPlanToClientForm.setErrors({unauthenticated: true});
          
        }
        )


        
      }
      else{
        console.log("Error");
      }
    }

}
