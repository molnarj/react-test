import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './tExpenseForm';
import { addExpense } from '../actions/Texpenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
