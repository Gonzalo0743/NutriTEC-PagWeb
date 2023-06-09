import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign-daily-consumption',
  templateUrl: './assign-daily-consumption.component.html',
  styleUrls: ['./assign-daily-consumption.component.css']
})
export class AssignDailyConsumptionComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    PlanAssignmentForm = this.builder.group({

      barcode: this.builder.control('', Validators.required),
      client_id: this.builder.control('', Validators.required),
      eating_time: this.builder.control('', Validators.required),
      datec: this.builder.control('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      


    })
    /**
   * @description This function calls the function of the api to add a new employee to the system
   * @returns A succesfull register of the new employee or an error
   */
    proceedPlanAssignment(){
      let formObj = this.PlanAssignmentForm.getRawValue();
      console.log(formObj);

      if(this.PlanAssignmentForm.valid){

        this.service.addAssignDailyConsumption(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/NutriLandPage']);
        },
        (error: HttpErrorResponse) => {
           console.log(error.error); // Muestra el error en la consola
          this.PlanAssignmentForm.setErrors({unauthenticated: true});
          
        }
        )


        
      }
      else{
        console.log("Error");
      }
    }

}
