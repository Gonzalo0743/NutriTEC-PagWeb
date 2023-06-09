import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientData } from 'src/app/Models/ClientInfo.interface';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

  jsonResponse: any;
  response:any;
  ClientData: ClientData[]=[];

  SearchClientForm = this.builder.group({
    client_id: this.builder.control('', Validators.required),
    
  })
              /**
 * @description This function calls the function of the api to show a specific gear of the system
 * @returns A succesfull show of the selected gear or an error
 */
  proceedSearchClient(){
    if(this.SearchClientForm.valid){

      let formObj = this.SearchClientForm.getRawValue();

      console.log(formObj);

      this.service.getSearchClient(formObj).subscribe(item =>{
        

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.ClientData = this.jsonResponse.result;
          console.log(this.ClientData);
          this.response = Array.of(this.ClientData);

        }
        else{
          this.SearchClientForm.setErrors({ unauthenticated: true});
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.error); // Muestra el error en la consola
        this.SearchClientForm.setErrors({unauthenticated: true});
        
      })
    }
  }

}
