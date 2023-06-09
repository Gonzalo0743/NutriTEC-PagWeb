import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-client-measurements',
  templateUrl: './update-client-measurements.component.html',
  styleUrls: ['./update-client-measurements.component.css']
})
export class UpdateClientMeasurementsComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService,
    private router: Router){}

    jsonResponse: any;

    UpdateClientMeasuresForm = this.builder.group({

      client_id: this.builder.control('', Validators.required),//PK
      muslce_percentage: this.builder.control('', Validators.required),
      fat_percentage: this.builder.control('', Validators.required),
      hip_size: this.builder.control('',Validators.required),
      waist_size: this.builder.control('', Validators.required),
      neck_size: this.builder.control('', Validators.required),
      last_month_meas: this.builder.control('',Validators.required),
      

    })

        /**
   * @description This function calls the function of the api to edit a gear of the system
   * @returns A succesfull edit of the selected gear or an error
   */
    proceedUpdateClientMeasures(){
      let formObj = this.UpdateClientMeasuresForm.getRawValue();
      console.log(formObj);
      if(this.UpdateClientMeasuresForm.valid){

        this.service.putUpdateClientMeasuresFromNutri(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/PatientManagementLandPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
