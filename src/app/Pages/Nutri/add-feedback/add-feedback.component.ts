import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    AddFeedbackForm = this.builder.group({
      client_id: this.builder.control('', Validators.required),
      nutritionist_message: this.builder.control('', Validators.required),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddFeedback(){
      let formObj = this.AddFeedbackForm.getRawValue();
      console.log(formObj);
      if(this.AddFeedbackForm.valid){

        this.service.addFeedback(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/NutriLandPage']);
        },
        (error: HttpErrorResponse) => {
          console.log(error.error); // Muestra el error en la consola
          this.AddFeedbackForm.setErrors({unauthenticated: true});
          
        })
      }
    }

}
