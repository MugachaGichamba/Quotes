import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, '“Those who believe in telekinetics, raise my hand.” ', "― Kurt Vonnegut", "mugacha g", 0, 0, new Date),
    new Quote(2, '“When I was your age, television was called books.” ', "― William Goldman", "mugacha g", 0, 0, new Date),
   

  ]

  addNewQuote(quote){
    quote.id = this.quotes.length + 1;
    quote.upVotes=0;
    quote.downVotes=0;
    quote.date = new Date();
    this.quotes.push(quote);
  }

  removeGoal(toDelete, index){
if(toDelete){
  this.quotes.splice(index, 1);
}
  }

  toogleDetails(index){
    console.log("fikad")
    this.quotes[index].details = !this.quotes[index].details;
  }
  constructor() { }

  ngOnInit() {
  }

}
