import PropTypes from 'prop-types';
import styled from 'styled-components';

import BUTTON from '../../constants/button';

const propTypes = {
  variant: PropTypes.string,
};

const defaultProps = {
  variant: BUTTON.DEFAULT,
};

const StyledButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: ${({ variant }) => (variant === BUTTON.CONTAINED ? '10px' : '8px')};
  ${({ variant }) => (variant === BUTTON.CONTAINED ? '' : 'width: 100%')};
  ${({ variant }) => (variant === BUTTON.CONTAINED ? '' : 'display: block')};
  ${({ variant }) => (variant === BUTTON.CONTAINED ? '' : 'font-size: 1.1rem')};
  ${({ variant }) => (variant === BUTTON.CONTAINED ? '' : 'margin-top: 1rem')};
`;

const Button = ({ variant, children, ...otherProps }) => {
  return (
    <StyledButton variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
