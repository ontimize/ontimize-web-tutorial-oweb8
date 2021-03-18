import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';
import { intRateMonthlyFunction } from '../../../shared/shared.module';
import { AddAccountComponent } from './add-account/add-account.component';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customer-detail-form]': 'true'
  }
})
export class CustomersDetailComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;
  @ViewChild('accountCustomerTable', { static: false }) accountTable: OTableComponent;
  public intRateMonthly = intRateMonthlyFunction;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  public openAccountDetailSelected() {
    let selected = this.accountTable.getSelectedItems();
    if (selected.length === 1) {
      let accountId = selected[0]['ACCOUNTID'];
      let customerId = selected[0]['CUSTOMERID'];
      this.router.navigate(['main/customers/' + customerId + '/' + accountId], { queryParams: { isdetail: true } });
    }
  }

  public createNewAccount() {
    let customerId = this.form.getFieldValue('CUSTOMERID');
    let date = new Date().getTime();
    this.dialog.open(AddAccountComponent, {
      data: {
        CUSTOMERID: customerId,
        STARTDATE: date
      }, disableClose: false
    })
  }

  ngOnInit() {
  }

}
