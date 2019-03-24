import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  
  quotes = [
    new Quote('In my view fortune is a woman'),
    new Quote('the person who thinks'),
    new Quote('is good'),
    
  ]
}
