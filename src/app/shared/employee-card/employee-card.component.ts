import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class EmployeeCardComponent implements OnInit {
  public employeeAmount: number;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('employees'));
    this.ontimizeService.query(undefined, ['EMPLOYEEID'], 'employee').subscribe(
      res => {
        if (res.data && res.data.length) {
          this.employeeAmount = res.data.length;
        }else{
          this.employeeAmount = undefined;
        }

        },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
   }

  ngOnInit() {
  }

}
