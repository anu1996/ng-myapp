import { Component } from '@angular/core';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';
import { MatDialog } from '@angular/material';
import {LoginComponent} from './login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: '',
  styles: []
})
export class AppComponent {
  numbers = [];
  constructor(public dialog:MatDialog,private _NgbModal: NgbModal){
    for(let i=0; i<1000; i++){
      this.numbers.push(i);
    }
  }
  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent,{data: {name: 'Anu'}});

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog result: ' + result);
    });
  }

  openModal() {
    this._NgbModal.open(LoginComponent, {
      windowClass: 'modal-job-scrollable'
    });

    (() => {
      const node: HTMLElement | null = document.querySelector('app-ng-modal');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 1000)
    })();
  }

}
