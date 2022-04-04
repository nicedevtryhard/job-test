import { Component, OnInit } from '@angular/core';
import { income, outcome, loan, investment } from '../util/util';
import { Transactions } from '../util/transactions';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  transactions: Transactions[][] = [];
  allTransactions: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.transactions.push(income);
    this.transactions.push(outcome);
    this.transactions.push(loan);
    this.transactions.push(investment);
    for (let i = 0; i < this.transactions.length; i++) {
      this.allTransactions += this.transactions[i].length;
    }
    console.log(this.allTransactions);
  }
  firstLetterCaps(el: string) {
    return el.charAt(0).toUpperCase() + el.slice(1);
  }
}
