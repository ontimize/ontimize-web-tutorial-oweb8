import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class BranchCardComponent implements OnInit {
  public branchesAmount: number;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('branches'));
    this.ontimizeService.query(void 0, ['OFFICEID'], 'branch').subscribe(
      res => {
        if (res && res.data.length) {
          this.branchesAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}
