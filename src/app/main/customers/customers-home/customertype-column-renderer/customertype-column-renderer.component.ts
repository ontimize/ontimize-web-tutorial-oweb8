import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'app-customertype-column-renderer',
  templateUrl: './customertype-column-renderer.component.html',
  styleUrls: ['./customertype-column-renderer.component.css']
})
export class CustomertypeColumnRendererComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
