import { Component, OnInit } from '@angular/core';
import { intRateMonthlyFunction } from '../../../shared/shared.module';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './accounts-home.component.html',
  styleUrls: ['./accounts-home.component.css']
})
export class AccountsHomeComponent implements OnInit {

  public intRateMonthly = intRateMonthlyFunction;

  constructor() { }

  ngOnInit() {
  }

}
