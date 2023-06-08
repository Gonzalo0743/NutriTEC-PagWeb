import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    addPlanForm = this.builder.group({

      eatplan_id: this.builder.control('', Validators.required),
      nutritionist_name: this.builder.control('', Validators.required),
      quantity: this.builder.control('', Validators.required),
      eating_schedule: this.builder.control('', Validators.required),
      start_period: this.builder.control('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      ending_period: this.builder.control('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddForm(){
      let formObj = this.addPlanForm.getRawValue();
      console.log(formObj);
      if(this.addPlanForm.valid){

        this.service.addPlan(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/PlansLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
