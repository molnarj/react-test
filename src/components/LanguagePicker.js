import React from 'react';
import { connect } from 'react-redux';
import { setLocale, Translate } from 'react-redux-i18n';


const LanguagePicker = (props) => (
    <div>
        <Translate value="application.LanguageSelector"/> (<Translate value={"application."+props.locale}/>) 
      <select onChange={(e) => {props.dispatch(setLocale(e.target.value));}}>
            <option value="hu" >Magyar</option>
            <option value="en">English</option>
        </select>
    </div>
);

const a = (state) =>{
 return {
     locale: state.i18n.locale || "hu"
    };
};
export default connect(a)(LanguagePicker);
