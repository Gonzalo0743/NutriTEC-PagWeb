import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';

import { ClientData } from 'src/app/Models/ClientInfo.interface';



@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})



export class ClientInfoComponent {
  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}
  DataClient: ClientData[]=[];

  dataProof: any=[];

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{
    this.DataClient = this.service.DataClient;
    console.log(this.DataClient);

    this.dataProof = Array.of(this.DataClient);
    console.log(this.dataProof);

    console.log(this.dataProof[0].client_id);
    
  }

  

}
