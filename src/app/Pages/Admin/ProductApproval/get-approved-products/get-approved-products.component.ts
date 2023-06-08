import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { AllProductsDishesData } from 'src/app/Models/AllProductsDishes.interface';

@Component({
  selector: 'app-get-approved-products',
  templateUrl: './get-approved-products.component.html',
  styleUrls: ['./get-approved-products.component.css']
})
export class GetApprovedProductsComponent {

  ProductsDishesData: AllProductsDishesData[] = [];

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

    this.service.getApprovedProdDish().subscribe(item =>{

      this.ProductsDishesData = item;

      console.log(this.ProductsDishesData);
    
    })
  }

}
