import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { income, outcome, loan, investment } from '../util/util';
import { Transactions } from '../util/transactions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tab: string;
  transactions: Transactions[] = [];
  constructor(private route: ActivatedRoute) {}
  getTransactionsInfo() {
    this.transactions = [];
    switch (this.tab) {
      case '0':
        this.transactions = income;
        break;
      case '1':
        this.transactions = outcome;
        break;
      case '2':
        this.transactions = loan;
        break;
      case '3':
        this.transactions = investment;
        break;
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.tab = params['tab'];
      this.getTransactionsInfo();
    });
  }
}
