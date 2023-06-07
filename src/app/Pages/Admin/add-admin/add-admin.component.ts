import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    addAdminForm = this.builder.group({

      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      


    })
            /**
   * @description This function calls the function of the api to add a new employee to the system
   * @returns A succesfull register of the new employee or an error
   */
    proceedAddAdmin(){
      let formObj = this.addAdminForm.getRawValue();
      console.log(formObj);

      if(this.addAdminForm.valid){

        this.service.addAdmin(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/AdminLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
