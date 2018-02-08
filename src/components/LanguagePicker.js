import React from 'react';
import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';


const LanguagePicker = (props) => (
    <div>
        LanguageSelector
      <select onChange={(e) => {
          
            props.dispatch(setLocale(e.target.value));
          }}>
            <option value="hu" >
                Magyar
          </option>
            <option value="en">
                English
          </option>
        </select>
    </div>
);

export default connect()(LanguagePicker);
