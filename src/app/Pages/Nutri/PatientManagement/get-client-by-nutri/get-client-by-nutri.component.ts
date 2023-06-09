import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


import { NutriData } from 'src/app/Models/NutriInfo.interface';
import { ClientInfoByNutri } from 'src/app/Models/GetClientByNutri.interface';
import { NutriID } from 'src/app/Models/GetNutriID.interface';


@Component({
  selector: 'app-get-client-by-nutri',
  templateUrl: './get-client-by-nutri.component.html',
  styleUrls: ['./get-client-by-nutri.component.css']
})
export class GetClientByNutriComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

  NutriInfo: NutriData[] = [];
  json:any=[];
  jsonResponse:any;
  nutritionist_id:any=[];
  ClientData: ClientInfoByNutri[]=[];
  response:any;

  getClientsForm = this.builder.group({})

  


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

    const SendInfoNutri: NutriID={
      nutritionist_id: this.nutritionist_id
    }

    console.log(SendInfoNutri);

    this.service.getClientForNutri(SendInfoNutri).subscribe(item =>{
          
      this.jsonResponse = item;

      if (this.jsonResponse.status == "ok"){
        console.log(this.jsonResponse);
        this.ClientData = this.jsonResponse.result;
        console.log(this.ClientData);

        this.response = Array.of(this.ClientData);

      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Muestra el error en la consola
      this.getClientsForm.setErrors({unauthenticated: true});
      
    })

  }

}
