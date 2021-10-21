import PropTypes from 'prop-types';
import styled from 'styled-components';

import TYPOGRAPHY from '../constants/typography';

const propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
  srOnly: PropTypes.bool,
};

const defaultProps = {
  variant: TYPOGRAPHY.TEXT,
  component: 'p',
  srOnly: false,
};

const variantToComponent = {
  [TYPOGRAPHY.H1]: 'h1',
  [TYPOGRAPHY.H2]: 'h2',
  [TYPOGRAPHY.SUBTITLE]: 'p',
  [TYPOGRAPHY.TEXT]: 'p',
};

const getComponentToRender = (variant, component) => {
  const componentToRender = component || variantToComponent[variant];

  return styled[componentToRender](({ srOnly }) =>
    srOnly
      ? {
          border: '0 !important',
          clip: 'rect(1px, 1px, 1px, 1px) !important',
          clipPath: 'inset(50%) !important',
          height: '1px !important',
          margin: '-1px !important',
          overflow: 'hidden !important',
          padding: '0 !important',
          position: 'absolute !important',
          width: '1px !important',
          whiteSpace: 'nowrap !important',
        }
      : {
          ...(variant === TYPOGRAPHY.SUBTITLE
            ? {
                fontWeight: 'bold',
                fontSize: '1rem',
                margin: 0,
                '@media (min-width: 920px)': {
                  fontSize: '1.5rem',
                },
              }
            : {}),
          ...(variant === TYPOGRAPHY.TEXT
            ? {
                marginBottom: 0,
                fontSize: '0.9rem',
                '@media (min-width: 920px)': {
                  fontSize: '1.2rem',
                },
              }
            : {}),
        }
  );
};

const Typography = ({ variant, component, srOnly, children }) => {
  const ComponentToRender = getComponentToRender(variant, component);

  return <ComponentToRender srOnly={srOnly}>{children}</ComponentToRender>;
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
