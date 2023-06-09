import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientEatingPlan } from 'src/app/Models/GetClientEatingPlan.interface';

@Component({
  selector: 'app-get-eating-plan',
  templateUrl: './get-eating-plan.component.html',
  styleUrls: ['./get-eating-plan.component.css']
})
export class GetEatingPlanComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

  jsonResponse: any;
  response:any;
  EatingPlan: ClientEatingPlan[]=[];

  GetEatingPlanForm = this.builder.group({
    eatplan_id: this.builder.control('', Validators.required),
    
  })
              /**
 * @description This function calls the function of the api to show a specific gear of the system
 * @returns A succesfull show of the selected gear or an error
 */
  proceedGetEatingPlan(){
    if(this.GetEatingPlanForm.valid){

      let formObj = this.GetEatingPlanForm.getRawValue();

      console.log(formObj);

      this.service.getEatingPlanForNutri(formObj).subscribe(item =>{
        

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.EatingPlan = this.jsonResponse.result;
          console.log(this.EatingPlan);
          this.response = Array.of(this.EatingPlan);

        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.error); // Muestra el error en la consola
        this.GetEatingPlanForm.setErrors({unauthenticated: true});
        
      })
    }
  }

}
