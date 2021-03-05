import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceExHomeComponent } from "./service-ex-home/service-ex-home.component";
import { ServiceExDetailsComponent } from "./service-ex-details/service-ex-details.component";


const routes: Routes = [
  {
    path: '',
    component: ServiceExHomeComponent,
  },
  {
    path: ":uuid",
    component: ServiceExDetailsComponent
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceExRoutingModule { }
