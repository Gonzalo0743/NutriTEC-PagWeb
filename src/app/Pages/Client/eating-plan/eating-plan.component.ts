import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientData } from 'src/app/Models/ClientInfo.interface'
import { ClientID } from 'src/app/Models/GetClientID.interface';
import { ClientEatingPlan } from 'src/app/Models/GetClientEatingPlan.interface';

@Component({
  selector: 'app-eating-plan',
  templateUrl: './eating-plan.component.html',
  styleUrls: ['./eating-plan.component.css']
})
export class EatingPlanComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

  ClientInfo: ClientData[] = [];
  json:any=[];
  jsonResponse:any;
  client_id:any=[];
  EatingPlanData: ClientEatingPlan[]=[];
  response:any;

  getEatingPlanForm = this.builder.group({})


     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.ClientInfo = this.service.DataClient;
    this.json = Array.of(this.ClientInfo);
    this.client_id = this.json[0].client_id;
    console.log(this.client_id);

    const SendInfoClientX: ClientID={
      client_id: this.client_id
    }

    console.log(SendInfoClientX);

    this.service.getClientEatingPlan(SendInfoClientX).subscribe(item =>{
          
      this.jsonResponse = item;

      if (this.jsonResponse.status == "ok"){
        console.log(this.jsonResponse);
        this.EatingPlanData = this.jsonResponse.result;
        console.log(this.EatingPlanData);

        this.response = Array.of(this.EatingPlanData);

      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Muestra el error en la consola
      this.getEatingPlanForm.setErrors({unauthenticated: true});
      
    }
    )

  }

}
