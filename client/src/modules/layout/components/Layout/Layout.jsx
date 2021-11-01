import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const propTypes = {
  isDark: PropTypes.bool,
};

const defaultProps = {
  isDark: false,
};

const Main = styled.main`
  flex: 1;
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.palette.background.alternative : theme.palette.background.default};
`;

const Layout = ({ isDark, children, user }) => (
  <>
    <Header user={user} />
    <Main isDark={isDark}>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
