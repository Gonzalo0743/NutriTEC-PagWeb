import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminData } from 'src/app/Models/AdminInfo.interface';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, 
    private router: Router){}
    
    json: any;
    AdminDataLog:AdminData[]=[];

    loginAdminForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })

      /**
   * @description This function is to prepare the info of the admin to send it to the api 
   * @returns The login to the page or the error of the login
   */
    proceedAdminLogin(){
      if(this.loginAdminForm.valid){

        let formObj = this.loginAdminForm.getRawValue();

        this.service.getAdmins(formObj).subscribe(item =>{
          this.json = item;
          

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.json.status == "ok"){
            this.router.navigate(['/AdminLandPage']);
            console.log("Login Succesfull");
            console.log(this.json);

            this.AdminDataLog = this.json.result;
            console.log(this.AdminDataLog);

            this.service.DataAdmin= this.AdminDataLog;
          }

        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.log(error.error); // Muestra el error en la consola
            this.loginAdminForm.setErrors({unauthenticated: true});
          }
        })
      }

    }

}
