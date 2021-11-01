import PropTypes from 'prop-types';
import styled from 'styled-components';

import TYPOGRAPHY from '../constants/typography';

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(TYPOGRAPHY)),
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  srOnly: PropTypes.bool,
};

const defaultProps = {
  className: '',
  variant: TYPOGRAPHY.DEFAULT,
  component: 'p',
  srOnly: false,
};

const SROnly = styled.p`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const Default = styled.p``;

const variantToComponent = {
  [TYPOGRAPHY.SUBTITLE]: Subtitle,
  [TYPOGRAPHY.TEXT]: Text,
  [TYPOGRAPHY.DEFAULT]: Default,
};

const Typography = ({ variant, component, srOnly, children, ...otherProps }) => {
  if (srOnly) {
    return <SROnly as={component} {...otherProps} />;
  }

  const ComponentToRender = variantToComponent[variant] || variantToComponent[TYPOGRAPHY.DEFAULT];

  return (
    <ComponentToRender as={component} {...otherProps}>
      {children}
    </ComponentToRender>
  );
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
