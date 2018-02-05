import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './tExpenseListItem';
import selectExpenses from '../selectors/Texpenses';
import {Translate, Localize} from 'react-redux-i18n';


const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>

    <img src="/images/kiscica.jpg" />

    <Translate value="application.title"/> 

    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
