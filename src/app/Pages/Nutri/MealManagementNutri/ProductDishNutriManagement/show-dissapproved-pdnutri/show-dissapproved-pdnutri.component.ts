import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { AllProductsDishesData } from 'src/app/Models/AllProductsDishes.interface';

@Component({
  selector: 'app-show-dissapproved-pdnutri',
  templateUrl: './show-dissapproved-pdnutri.component.html',
  styleUrls: ['./show-dissapproved-pdnutri.component.css']
})
export class ShowDissapprovedPDNutriComponent {

  ProductsDishesData: AllProductsDishesData[] = [];
  json:any;

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

    this.service.getDisapprovedProdDish().subscribe(item =>{

      this.json = item;

      this.ProductsDishesData = this.json.result;

      console.log(this.ProductsDishesData);
    
    })
  }

}
