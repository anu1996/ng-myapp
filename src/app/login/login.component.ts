import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _NgbActiveModal: NgbActiveModal) { }

   ngOnInit() {
  }

  get activeModal() {
    return this._NgbActiveModal;
  }

}
