import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  //newQuote property: default object to be changed by form inputs
  newQuote = new Quote("","","",0,0,new Date());
  constructor() { }

  ngOnInit() {
  }

}
