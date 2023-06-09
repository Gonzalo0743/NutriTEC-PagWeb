import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { AllProductsDishesData } from 'src/app/Models/AllProductsDishes.interface';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent {

  ProductsDishesData: AllProductsDishesData[] = [];
  data:any;

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */

     proceedPrintPDF(data:any){
      this.service.getPaymentReport(data).subscribe(item=>{
        let blob:Blob=item.body as Blob;
        let url= window.URL.createObjectURL(blob);
        window.open(url);

      })


    }
}
