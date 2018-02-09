import "babel-polyfill";

import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/Texpenses';
import filtersReducer from '../reducers/Tfilters';
import counterReducer from '../reducers/AsyncTest';

//---
// lang
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { setTextFilter } from '../actions/Tfilters';
//---

//--
// saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/AsyncTestSaga';
import Counter from '../components/Counter';

import apiSaga from '../sagas/API';
import { getUser } from "../actions/API";
import apiReducer from "../reducers/API";
//--

export default () => {
  const translationsObject = {
    en: {
      application: {
        title: 'Awesome app with i18n!',
        hello: 'Hello, %{name}!',
        hu: 'Hungarian',
        en: 'English',
        LanguageSelector: 'Language selector'
      },
      date: {
        long: 'MMMM Do, YYYY'
      },
      export: 'Export %{count} items',
      export_0: 'Nothing to export',
      export_1: 'Export %{count} item',
      two_lines: 'Line 1<br />Line 2',
      literal_two_lines: 'Line 1\
  Line 2'
    },

    nl: {
      application: {
        title: 'Toffe app met i18n!',
        hello: 'Hallo, %{name}!'
      },
      date: {
        long: 'D MMMM YYYY'
      },
      export: 'Exporteer %{count} dingen',
      export_0: 'Niks te exporteren',
      export_1: 'Exporteer %{count} ding',
      two_lines: 'Regel 1<br />Regel 2',
      literal_two_lines: 'Regel 1\
Regel 2'
    },

    hu: {
      application: {
        title: 'Csoda app i18n-nel!',
        hello: 'Szia %{name}!',
        hu: 'Magyar',
        en: 'Angol',
        LanguageSelector: 'Nyevválasztó'
      },
      date: {
        long: 'YYYY.MM.DD.'
      },
      export: 'Exportálva %{count} elem',
      export_0: 'Nincs mit exportálni',
      export_1: 'Exportálva %{count} elem',
      two_lines: 'Sor 1<br />Sor 2',
      literal_two_lines: 'Sor 1\
Sor 2'
    }
  };

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      i18n: i18nReducer,
      api: apiReducer,
      expenses: expensesReducer,
      filters: filtersReducer,
      counter: counterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(apiSaga);

  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale('hu'));

  // store.dispatch(getUser(2));

  return store;
};
