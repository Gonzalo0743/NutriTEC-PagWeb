import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { AllProductsDishesData } from 'src/app/Models/AllProductsDishes.interface';

@Component({
  selector: 'app-get-all-products-state',
  templateUrl: './get-all-products-state.component.html',
  styleUrls: ['./get-all-products-state.component.css']
})
export class GetAllProductsStateComponent {

  ProductsDishesData: AllProductsDishesData[] = [];

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

    this.service.getAllProdDishState().subscribe(item =>{

      this.ProductsDishesData = item;

      console.log(this.ProductsDishesData);
    
    })
  }

}
