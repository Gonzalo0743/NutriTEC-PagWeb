import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-client-land-page',
  templateUrl: './client-land-page.component.html',
  styleUrls: ['./client-land-page.component.css']
})
export class ClientLandPageComponent {

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

  }


}
