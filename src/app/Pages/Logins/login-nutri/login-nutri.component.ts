import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NutriData } from 'src/app/Models/NutriInfo.interface';

@Component({
  selector: 'app-login-nutri',
  templateUrl: './login-nutri.component.html',
  styleUrls: ['./login-nutri.component.css']
})
export class LoginNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, 
    private router: Router){}
    
    json:any;
    NutriDataLog:NutriData[]=[];

    loginNutriForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns The login to the page or the error of the login
   */
    proceedNutriLogin(){
      if(this.loginNutriForm.valid){

        let formObj = this.loginNutriForm.getRawValue();

        this.service.getNutris(formObj).subscribe(item =>{
          this.json = item;

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.json.status == "ok"){
            this.router.navigate(['/NutriLandPage']);
            console.log("Login Succesfull");
            console.log(this.json);

            this.NutriDataLog = this.json.result;
            console.log(this.NutriDataLog);

            this.service.DataNutri = this.NutriDataLog;

          }

        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.log(error.error); // Muestra el error en la consola
            this.loginNutriForm.setErrors({unauthenticated: true});
          }
        })
      }

    }

}
