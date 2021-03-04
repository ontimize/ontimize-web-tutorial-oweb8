import { Component, OnInit } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.css']
})
export class CustomersHomeComponent implements OnInit {

  public showWaitForLongTask = false;

  constructor(
    private ontimizeService: OntimizeService
  ) {
    this.ontimizeService.configureService(ontimizeService.getDefaultServiceConfiguration("customers"))

   }

  longTaskToBackend(){
    this.showWaitForLongTask = true;
    this.ontimizeService.query(undefined, [], 'longTask').subscribe(
      res => {
        console.log("Long task finished");
        },
      err =>  this.showWaitForLongTask = false,
      () =>  this.showWaitForLongTask = false
    );
   ;
  }

  ngOnInit() {
  }

}
