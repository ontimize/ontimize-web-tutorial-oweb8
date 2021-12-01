import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AccountsNewComponent } from './accounts-new/accounts-new.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddMovementComponent } from './add-movement/add-movement.component';


const routes: Routes = [
  {
    path: '',
    component: AccountsHomeComponent
  },
  {
    path: 'new',
    component: AccountsNewComponent
  },
  {
    path: ':ACCOUNTID',
    component: AccountsDetailComponent
  }
  ,
  {
    path:':ACCOUNTID/addcustomer/new',
    component: AddCustomerComponent
  },
  {
    path:':ACCOUNTID/addMovement/new',
    component: AddMovementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
