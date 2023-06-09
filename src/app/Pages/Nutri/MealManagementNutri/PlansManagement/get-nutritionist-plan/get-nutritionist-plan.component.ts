import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


import { NutriData } from 'src/app/Models/NutriInfo.interface';
import { NutritionistPlan } from 'src/app/Models/GetNutritionistPlan.interface';
import { NutriID } from 'src/app/Models/GetNutriID.interface';

@Component({
  selector: 'app-get-nutritionist-plan',
  templateUrl: './get-nutritionist-plan.component.html',
  styleUrls: ['./get-nutritionist-plan.component.css']
})
export class GetNutritionistPlanComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

  NutriInfo: NutriData[] = [];
  json:any=[];
  jsonResponse:any;
  nutritionist_id:any=[];
  NutritionistPlanData: NutritionistPlan[]=[];
  response:any;

  getNutritionistPlanForm = this.builder.group({})

  


     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.NutriInfo = this.service.DataNutri;
    this.json = Array.of(this.NutriInfo);
    console.log(this.json);

    //REVISAR EL ID QUE AGARRA
    this.nutritionist_id = this.json[0].employee_id;
    console.log(this.nutritionist_id);

    const SendNutriEmployeeID: NutriID={
      nutritionist_id: this.nutritionist_id
    }

    console.log(SendNutriEmployeeID);

    this.service.getNutritionistPlan(SendNutriEmployeeID).subscribe(item =>{
          
      this.jsonResponse = item;

      if (this.jsonResponse.status == "ok"){
        console.log(this.jsonResponse);
        this.NutritionistPlanData = this.jsonResponse.result;
        console.log(this.NutritionistPlanData);

        this.response = Array.of(this.NutritionistPlanData);

      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Muestra el error en la consola
      this.getNutritionistPlanForm.setErrors({unauthenticated: true});
      
    })

  }

}
