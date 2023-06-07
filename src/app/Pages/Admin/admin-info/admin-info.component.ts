import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

import { AdminData } from 'src/app/Models/AdminInfo.interface';
@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}
  DataAdmin: AdminData[]=[];

  dataProof: any=[];

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.DataAdmin = this.service.DataClient;
    console.log(this.DataAdmin);

    this.dataProof = Array.of(this.DataAdmin);

  }

}
