import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { OFormComponent } from 'ontimize-web-ngx';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;
  public dialog: MatDialogModule;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddAccountComponent>
  ) { }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data)
    }
  }

  public closeDialog(event: any) {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
