import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { deleteAccount, updateAccount } from '../../actions/app';
import FormField from './FormField';

let AccountForm = (props) => {
  const { handleSubmit, onSubmit, onDelete, account } = props;
  return (
    <article className='pa4 black-80'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
          <legend className='ph0 mh0 fw6 clip'>Account</legend>
          <Field
            component={FormField}
            focusField='emailAddress'
            id='emailAddress'
            label='Email'
            name='emailAddress'
            placeholder='Email'
            tabIndex='1'
            type='text'
          />
          <Field
            component={FormField}
            id='password'
            label='Password'
            name='password'
            placeholder='Password'
            type='text'
          />
          <Field
            component={FormField}
            id='isEnabled'
            label='Enabled'
            name='isEnabled'
            placeholder='Enabled'
            type='checkbox'
          />
        </fieldset>
        <div className='mt3'>
          <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6' type='submit' value='Update' />
        </div>
      </form>
      <div className='mt3'>
        <button className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6' onClick={() => onDelete(account.id)}>
          {'Delete'}
        </button>
      </div>
    </article>
  );
};

AccountForm.propTypes = {
  account: React.PropTypes.object,
  handleSubmit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

AccountForm = reduxForm({
  form: 'accountForm'
})(AccountForm);

const select = (state) => {
  return {
    account: state.app.account,
    initialValues: state.app.account
  };
};
const actions = {
  onSubmit: updateAccount,
  onDelete: deleteAccount
};

export default connect(select, actions)(AccountForm);
