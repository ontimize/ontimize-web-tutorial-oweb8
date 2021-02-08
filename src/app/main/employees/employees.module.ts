import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx" ;
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';


@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeesHomeComponent, EmployeesDetailComponent]
})
export class EmployeesModule { }
