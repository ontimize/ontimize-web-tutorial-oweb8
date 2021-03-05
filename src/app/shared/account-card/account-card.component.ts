import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

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
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  protected criteriaValue = 5000;


  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('branches'));
    this.ontimizeService.query(void 0, ['ACCOUNTID','BALANCE'], 'accountBalance').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.accountAmount = res.data.length;
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 130;
    this.chartParameters.showLegend = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
  }
  adaptResult(data: any) {
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.graphData = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ]
    }
  }
  processValues(data: any) {
    let values = [];
    let minorValue = 0;
    let majorValue = 0;
    data.forEach((item: any, index: number) => {
      if (item['BALANCE'] >= this.criteriaValue){
        majorValue++;
      }else{
        minorValue++;
      }
    });

    let lowerCrit = {
      'x': 'Under',
      'y': minorValue
    }

    let upperCrit = {
      'x': 'Over',
      'y': majorValue
    }

    values.push(lowerCrit);
    values.push(upperCrit);
    return values;
  }

  ngOnInit() {
  }

}
