import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class AccountCardComponent implements OnInit {
  accountAmount: any;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  )  {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('branches'));
    this.ontimizeService.query(void 0, ['ACCOUNTID'], 'accountBalance').subscribe(
      res => {
        if (res && res.data.length) {
          this.accountAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}
