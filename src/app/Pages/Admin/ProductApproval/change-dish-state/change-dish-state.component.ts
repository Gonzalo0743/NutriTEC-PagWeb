import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-dish-state',
  templateUrl: './change-dish-state.component.html',
  styleUrls: ['./change-dish-state.component.css']
})
export class ChangeDishStateComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    ChangeDishStateForm = this.builder.group({

      barcode: this.builder.control('', Validators.required), //PK

      state: this.builder.control(0, Validators.max(3)),
      


    })
                /**
   * @description This function calls the function of the api to edit an employee of the system
   * @returns A succesfull edit of the selected employee or an error
   */
    proceedChangeDishState(){
      let formObj = this.ChangeDishStateForm.getRawValue();
      console.log(formObj);
      if(this.ChangeDishStateForm.valid){

        this.service.putChangeDishState(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ProductApprovalLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
