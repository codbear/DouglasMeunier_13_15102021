import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
};

const defaultProps = {
  label: '',
  type: 'text',
  labelProps: {},
  inputProps: {},
};

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const TextField = ({ name, label, type, labelProps, inputProps }) => {
  return (
    <FormControl>
      {label && (
        <label htmlFor={name} {...labelProps}>
          {label}
        </label>
      )}
      <Field name={name} type={type} {...inputProps} />
    </FormControl>
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
