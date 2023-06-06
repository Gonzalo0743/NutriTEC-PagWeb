import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import{ ClientData } from 'src/app/Models/ClientInfo.interface'


@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent {

  
  constructor(private builder: FormBuilder, private service: AllFunctionsService, 
    private router: Router){}
    
    json:any;
    ClientDataLog:ClientData[] = [];

    loginClientForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns The login to the page or the error of the login
   */
    proceedClientLogin(){
      if(this.loginClientForm.valid){

        let formObj = this.loginClientForm.getRawValue();

        this.service.getClients(formObj).subscribe(item =>{
          this.json = item;
          
          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.json.status == "ok"){
            this.router.navigate(['/ClientLandPage']);
            console.log("Login Succesfull");
            console.log(this.json);
            
            this.ClientDataLog = this.json.result
            console.log(this.ClientDataLog); 
            
            this.service.DataClient = this.ClientDataLog;

          }
          
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.log(error.error); // Muestra el error en la consola
            this.loginClientForm.setErrors({unauthenticated: true});
          }
        })
      }

    }
    



    

}
