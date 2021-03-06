import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/tExpenseDashboardPage';
import AddExpensePage from '../components/tAddExpensePage';
import EditExpensePage from '../components/tEditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import AsyncTestPage from '../components/AsyncTestPage';
import LanguagePicker from '../components/LanguagePicker'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <LanguagePicker />
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/asynctest" component={AsyncTestPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
