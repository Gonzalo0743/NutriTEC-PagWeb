import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-prod-dish',
  templateUrl: './show-all-prod-dish.component.html',
  styleUrls: ['./show-all-prod-dish.component.css']
})
export class ShowAllProdDishComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService){}

    jsonResponse: any;
    response:any;

            /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
    proceedShowAllProdDish(){

      this.service.getAllProdDish().subscribe(item =>{

        this.jsonResponse = item;

        console.log(this.jsonResponse);
        this.response = JSON.stringify(this.jsonResponse);


        /** 
        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.response = JSON.stringify(this.jsonResponse);
        }
        else{
          console.log("Error");
        }*/
      })
      
    }
}
