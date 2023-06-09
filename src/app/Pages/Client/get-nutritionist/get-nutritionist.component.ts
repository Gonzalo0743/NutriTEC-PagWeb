import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import{ ClientData } from 'src/app/Models/ClientInfo.interface'
import { NutriInfoForClient } from 'src/app/Models/GetNutriForClient.interface';
import { ClientID } from 'src/app/Models/GetClientID.interface';

@Component({
  selector: 'app-get-nutritionist',
  templateUrl: './get-nutritionist.component.html',
  styleUrls: ['./get-nutritionist.component.css']
})
export class GetNutritionistComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

  ClientInfo: ClientData[] = [];
  json:any=[];
  jsonResponse:any;
  client_id:any=[];
  NutriData: NutriInfoForClient[]=[];
  response:any;

  getNutriForm = this.builder.group({})

  


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

    this.service.getNutriInfoForClient(SendInfoClientX).subscribe(item =>{
          
      this.jsonResponse = item;

      if (this.jsonResponse.status == "ok"){
        console.log(this.jsonResponse);
        this.NutriData = this.jsonResponse.result;
        console.log(this.NutriData);

        this.response = Array.of(this.NutriData);

      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Muestra el error en la consola
      this.getNutriForm.setErrors({unauthenticated: true});
      
    })

  }

}
