import React from 'react';
import ExpenseList from './tExpenseList';
import ExpenseListFilters from './tExpenseListFilters';
import GithubSearch from './GithubSearch';

const ExpenseDashboardPage = () => (
  <div>
    <GithubSearch />
    <br />
    <hr />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
