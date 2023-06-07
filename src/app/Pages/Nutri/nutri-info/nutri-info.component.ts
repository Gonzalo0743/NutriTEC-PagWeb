import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

import { NutriData } from 'src/app/Models/NutriInfo.interface';

@Component({
  selector: 'app-nutri-info',
  templateUrl: './nutri-info.component.html',
  styleUrls: ['./nutri-info.component.css']
})
export class NutriInfoComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}
  DataNutri: NutriData[]=[];

  dataProof: any=[];

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.DataNutri = this.service.DataNutri;
    console.log(this.DataNutri);

    this.dataProof = Array.of(this.DataNutri);
    
  }

}
