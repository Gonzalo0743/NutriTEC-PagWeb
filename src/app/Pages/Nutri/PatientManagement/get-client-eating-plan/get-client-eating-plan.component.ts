import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientEatingPlan } from 'src/app/Models/GetClientEatingPlan.interface';

@Component({
  selector: 'app-get-client-eating-plan',
  templateUrl: './get-client-eating-plan.component.html',
  styleUrls: ['./get-client-eating-plan.component.css']
})
export class GetClientEatingPlanComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

  jsonResponse: any;
  response:any;
  ClientEatingPlan: ClientEatingPlan[]=[];

  GetClientEatingPlanForm = this.builder.group({
    client_id: this.builder.control('', Validators.required),
    
  })
              /**
 * @description This function calls the function of the api to show a specific gear of the system
 * @returns A succesfull show of the selected gear or an error
 */
  proceedGetEatingPlan(){
    if(this.GetClientEatingPlanForm.valid){

      let formObj = this.GetClientEatingPlanForm.getRawValue();

      console.log(formObj);

      this.service.getClientEatingPlanForNutri(formObj).subscribe(item =>{
        

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.ClientEatingPlan = this.jsonResponse.result;
          console.log(this.ClientEatingPlan);
          this.response = Array.of(this.ClientEatingPlan);

        }
        else{
          this.GetClientEatingPlanForm.setErrors({ unauthenticated: true});
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.error); // Muestra el error en la consola
        this.GetClientEatingPlanForm.setErrors({unauthenticated: true});
        
      })
    }
  }

}
