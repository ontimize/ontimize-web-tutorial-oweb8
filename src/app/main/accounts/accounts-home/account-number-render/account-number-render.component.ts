import { ViewChild, TemplateRef, Injector, Component, OnInit } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'app-account-number-render',
  templateUrl: './account-number-render.component.html',
  styleUrls: ['./account-number-render.component.css']
})
export class AccountNumberRenderComponent extends OBaseTableCellRenderer{

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    }

  getCellData(cellvalue: any, rowvalue?: any): string{
    return  rowvalue["ENTITYID"]+" "+rowvalue["OFFICEID"]+" "+rowvalue["CDID"]+" "+rowvalue["ANID"];
  }

}
