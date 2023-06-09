import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    createClientForm = this.builder.group({

      client_id: this.builder.control('', Validators.required),
      name: this.builder.control('', Validators.required),
      second_name: this.builder.control(''),
      lname1: this.builder.control('',Validators.required),
      lname2: this.builder.control(''),
      weight: this.builder.control('',Validators.required),
      bmi: this.builder.control('', Validators.required),
      password: this.builder.control('',Validators.required),
      email: this.builder.control('', Validators.required),
      bdate: this.builder.control('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      muslce_percentage: this.builder.control('', Validators.required),
      fat_percentage: this.builder.control('', Validators.required),
      hip_size: this.builder.control('', Validators.required),
      waist_size: this.builder.control('', Validators.required),
      neck_size: this.builder.control('', Validators.required),
      last_month_meas: this.builder.control('', Validators.required),
      
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddClient(){
      let formObj = this.createClientForm.getRawValue();
      console.log(formObj);
      if(this.createClientForm.valid){

        this.service.addClient(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ClientLogin']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
