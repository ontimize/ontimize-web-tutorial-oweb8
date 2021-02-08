import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadCustomersModule() {
  return CustomersModule;
}

export function loadEmployeesModule(){
  return EmployeesModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'customers', loadChildren: loadCustomersModule },
      { path: 'employees', loadChildren: loadEmployeesModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
