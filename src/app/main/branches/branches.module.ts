import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesHomeComponent } from './branches-home/branches-home.component';
import { BranchesDetailComponent } from './branches-detail/branches-detail.component';
import { BranchesNewComponent } from './branches-new/branches-new.component';


@NgModule({
  declarations: [BranchesHomeComponent, BranchesDetailComponent, BranchesNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
