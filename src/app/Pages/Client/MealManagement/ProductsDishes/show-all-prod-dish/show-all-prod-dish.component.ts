import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { Temperature } from 'src/app/Models/Prueba.interface';

@Component({
  selector: 'app-show-all-prod-dish',
  templateUrl: './show-all-prod-dish.component.html',
  styleUrls: ['./show-all-prod-dish.component.css']
})
export class ShowAllProdDishComponent {
  Prueba: Temperature[] = [];

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

    this.service.getAllProdDish().subscribe(item =>{

      this.Prueba = item;

      console.log(this.Prueba);
    
    })

  }

  consultTemperature(temperatureC: any){
    console.log(temperatureC);
  }

   
    
}
