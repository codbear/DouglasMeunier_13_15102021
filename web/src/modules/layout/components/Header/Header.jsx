import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ROUTES } from '../../../../router';
import { TYPOGRAPHY, Typography } from '../../../theme';
import argentBankLogo from '../../images/argentBankLogo.png';

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    width: 200px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <MainNav>
    <NavLogo to={ROUTES.HOME}>
      <img src={argentBankLogo} alt="" />
      <Typography variant={TYPOGRAPHY.H1} srOnly>
        Argent Bank
      </Typography>
    </NavLogo>
    <div>
      <NavItem to={ROUTES.AUTH.SIGN_IN}>
        <FontAwesomeIcon icon="user-circle" /> Sign In
      </NavItem>
    </div>
  </MainNav>
);

export default Header;
