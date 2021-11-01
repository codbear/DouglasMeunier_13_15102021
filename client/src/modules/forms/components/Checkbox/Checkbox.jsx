import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
};

const defaultProps = {
  labelProps: {},
};

const FormControl = styled.div`
  display: flex;
`;

const Label = styled.span`
  margin-left: 0.25rem;
`;

const Checkbox = ({ name, label, labelProps, otherProps }) => (
  <FormControl>
    <label {...labelProps}>
      <Field type="checkbox" name={name} {...otherProps} />
      <Label>{label}</Label>
    </label>
  </FormControl>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
