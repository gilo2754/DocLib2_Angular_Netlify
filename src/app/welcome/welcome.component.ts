import { HelloWorldBean, WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { Specialities } from '../enums/specialities.enum';
import { Municipalities } from '../enums/municipies.enum';
import { ClinicDataService } from '../service/data/clinic-data.service';
//import { speciality } from '../speciality/speciality-interface';
import { SpecialityService } from '../service/data/speciality-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string | undefined
  name = ''
  
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService,
    private clinicService:ClinicDataService,
    private specialityService: SpecialityService,
) { 
  }

  // void init() {
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
   // this.name = this.route.snapshot.params['name'];
    

  }
 /*
  getWelcomeMessage() {  
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
  }

  getWelcomeMessageWithParameter() {  
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }


  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: { error: { message: string; }; }) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
  */
}

