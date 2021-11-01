import PropTypes from 'prop-types';
import styled from 'styled-components';

import BUTTON from '../../constants/buttonVariants';

const propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON)),
  children: PropTypes.node,
};

const defaultProps = {
  variant: BUTTON.WIDE,
  children: null,
};

const BaseButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const WideButton = styled(BaseButton)`
  padding: 8px;
  width: 100%;
  display: block;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const ContainedButton = styled(BaseButton)`
  padding: 10px;
`;

const variantToComponent = {
  [BUTTON.WIDE]: WideButton,
  [BUTTON.CONTAINED]: ContainedButton,
};

const Button = ({ variant, children, ...otherProps }) => {
  const ComponentToRender = variantToComponent[variant];

  return <ComponentToRender {...otherProps}>{children}</ComponentToRender>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
