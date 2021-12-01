import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesDetailComponent } from './branches-detail/branches-detail.component';
import { BranchesHomeComponent } from './branches-home/branches-home.component';
import { BranchesNewComponent } from './branches-new/branches-new.component';


const routes: Routes = [
  {
    path: '',
    component: BranchesHomeComponent
  },
  {
    path: 'new',
    component: BranchesNewComponent
  },
  {
    path: ':OFFICEID',
    component: BranchesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
