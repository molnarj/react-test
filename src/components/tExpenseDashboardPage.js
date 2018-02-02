import React from 'react';
import ExpenseList from './tExpenseList';
import ExpenseListFilters from './tExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
