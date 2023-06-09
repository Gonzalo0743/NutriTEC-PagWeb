import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-daily-consumption-register',
  templateUrl: './daily-consumption-register.component.html',
  styleUrls: ['./daily-consumption-register.component.css']
})
export class DailyConsumptionRegisterComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AddDailyConsumptionForm = this.builder.group({

      barcode: this.builder.control('', Validators.required),
      client_id: this.builder.control('', Validators.required),
      eating_time: this.builder.control('', Validators.required),
      datec: this.builder.control('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddDailyConsumption(){
      let formObj = this.AddDailyConsumptionForm.getRawValue();
      console.log(formObj);
      if(this.AddDailyConsumptionForm.valid){

        this.service.addDailyConsumption(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/RegisterLandPage']);
        },
        (error: HttpErrorResponse) => {
          console.log(error.error); // Muestra el error en la consola
         this.AddDailyConsumptionForm.setErrors({unauthenticated: true});
         
       })
      }
      else{
        console.log("Error");
      }
    }

}
