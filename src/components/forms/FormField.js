import React from 'react';

const FormField = (field) => {
  return (
    <div className='mt3'>
      <label
        className='db fw4 lh-copy f6'>
        {
          field.label
        }
      </label>
      <input
        {...field.input}
        placeholder={field.placeholder}
        type={field.type}
        ref={field.input.id} />
      {field.meta.touched && field.meta.error &&
        <span className='error'>{field.meta.error}</span>}
    </div>
  );
};

FormField.propTypes = {
  focusField: React.PropTypes.string,
  id: React.PropTypes.string,
  input: React.PropTypes.object.isRequired,
  label: React.PropTypes.string,
  meta: React.PropTypes.object.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
};

export default FormField;
