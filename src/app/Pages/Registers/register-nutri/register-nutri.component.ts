import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-nutri',
  templateUrl: './register-nutri.component.html',
  styleUrls: ['./register-nutri.component.css']
})
export class RegisterNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    createNutriForm = this.builder.group({

      employee_id: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      name: this.builder.control('', Validators.required),
      second_name: this.builder.control(''),
      lname1: this.builder.control('', Validators.required),
      lname2: this.builder.control(''),
      password: this.builder.control('', Validators.required),
      bdate: this.builder.control('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      profile_pic: this.builder.control('', Validators.required),
      credit_card: this.builder.control('', Validators.required),
      nutritionist_code: this.builder.control('', Validators.required),
      bmi: this.builder.control('', Validators.required),
      weight: this.builder.control('', Validators.required),
      address: this.builder.control('', Validators.required),
      payment_type: this.builder.control('', Validators.required),
      
      
      
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddNutri(){
      let formObj = this.createNutriForm.getRawValue();
      console.log(formObj);
      if(this.createNutriForm.valid){

        this.service.addNutri(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/NutriLogin']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
