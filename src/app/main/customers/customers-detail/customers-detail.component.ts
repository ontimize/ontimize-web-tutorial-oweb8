import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OTableComponent } from 'ontimize-web-ngx';
import { intRateMonthlyFunction } from '../../../shared/shared.module';

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

  @ViewChild('accountCustomerTable', { static: false }) accountTable: OTableComponent;
  public intRateMonthly = intRateMonthlyFunction;

  constructor(
    private router: Router
  ) { }

  public openAccountDetailSelected() {
    let selected = this.accountTable.getSelectedItems();
    if (selected.length === 1) {
      let accountId = selected[0]['ACCOUNTID']
      this.router.navigate(['main/accounts/' + accountId]);
    }
  }

  ngOnInit() {
  }

}
