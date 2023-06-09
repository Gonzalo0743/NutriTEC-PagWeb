import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


import { NutriData } from 'src/app/Models/NutriInfo.interface';
import { EatPlanByNutr } from 'src/app/Models/GetEatPlanByNutri.interface';
import { NutriEmployeeID } from 'src/app/Models/GetNutriEmployeeID.interface';

@Component({
  selector: 'app-get-eat-plan-by-nutritionist',
  templateUrl: './get-eat-plan-by-nutritionist.component.html',
  styleUrls: ['./get-eat-plan-by-nutritionist.component.css']
})
export class GetEatPlanByNutritionistComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

  NutriInfo: NutriData[] = [];
  json:any=[];
  jsonResponse:any;
  employee_id:any=[];
  EatPlanData: EatPlanByNutr[]=[];
  response:any;

  getEatPlanForm = this.builder.group({})

  


     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.NutriInfo = this.service.DataNutri;
    this.json = Array.of(this.NutriInfo);
    console.log(this.json);

    //REVISAR EL ID QUE AGARRA
    this.employee_id = this.json[0].employee_id;
    console.log(this.employee_id);

    const SendNutriEmployeeID: NutriEmployeeID={
      employee_id: this.employee_id
    }

    console.log(SendNutriEmployeeID);

    this.service.getEatPlanByNutri(SendNutriEmployeeID).subscribe(item =>{
          
      this.jsonResponse = item;

      if (this.jsonResponse.status == "ok"){
        console.log(this.jsonResponse);
        this.EatPlanData = this.jsonResponse.result;
        console.log(this.EatPlanData);

        this.response = Array.of(this.EatPlanData);

      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Muestra el error en la consola
      this.getEatPlanForm.setErrors({unauthenticated: true});
      
    })

  }

}
