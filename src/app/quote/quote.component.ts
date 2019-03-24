import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('In my view fortune is a woman', "nicollo machiaveli", 100),
    new Quote('the person who thinks', "mugacha gichamba", 200),
    new Quote('is good' , "nyee mtee", 50),

  ]
  constructor() { }

  ngOnInit() {
  }

}
