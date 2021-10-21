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
  background-color: ${({ isDark }) => (isDark ? '#12002b' : 'unset')};
`;

const Layout = ({ isDark, children }) => (
  <>
    <Header />
    <Main isDark={isDark}>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
