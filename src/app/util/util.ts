import { transactions } from './transactions';
import { Transactions } from './transactions';
let income: Transactions[] = [];
let outcome: Transactions[] = [];
let loan: Transactions[] = [];
let investment: Transactions[] = [];

transactions.map((el) => {
  switch (el.type) {
    case 'income':
      income.push(el);
      break;
    case 'outcome':
      outcome.push(el);
      break;
    case 'loan':
      loan.push(el);
      break;
    case 'investment':
      investment.push(el);
      break;
  }
});

export { income, outcome, loan, investment };
