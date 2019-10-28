import { DiaglogExampleComponent } from './../diaglog-example/diaglog-example.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
selector: 'app-post',
templateUrl: './post.component.html',
styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 
 titulo  : string = 'Bienvenidos';
 constructor(public dialog: MatDialog) { }
 ngOnInit() {

 }
 
 openDialog(){
   this.dialog.open(DiaglogExampleComponent);
 }
  
}



