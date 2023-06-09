import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllFunctionsService } from 'src/app/Functions/all-functions.service';
import { Router } from '@angular/router';
import { ConsultFeedback } from 'src/app/Models/MongoFeedback.interface';

@Component({
  selector: 'app-consult-feedback',
  templateUrl: './consult-feedback.component.html',
  styleUrls: ['./consult-feedback.component.css']
})
export class ConsultFeedbackComponent {

  ConsultFeedbackForm: ConsultFeedback[] = [];
  json:any;

  constructor(private builder: FormBuilder, private service: AllFunctionsService, private router:Router){}

     /**
   * @description This function calls the function of the api to obtain all the branches
   * @returns A list with all the branches
   */
  ngOnInit(): void{

    this.service.getFeedback().subscribe(item =>{

      this.json = item;

      this.ConsultFeedbackForm = this.json.result;

      console.log(this.ConsultFeedbackForm);
    
    })
  }

}
