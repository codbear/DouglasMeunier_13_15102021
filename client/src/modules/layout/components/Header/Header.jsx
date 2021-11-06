import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ROUTES } from '../../../../router';
import { Typography } from '../../../theme';
import argentBankLogo from '../../images/argentBankLogo.png';
import { logoutRequest } from '../../../security';

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.text.default};
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

const Header = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <MainNav>
      <NavLogo to={ROUTES.HOME}>
        <img src={argentBankLogo} alt="" />
        <Typography component="h1" srOnly>
          Argent Bank
        </Typography>
      </NavLogo>
      <div>
        {user ? (
          <>
            <NavItem to={ROUTES.PROFILE.INDEX}>
              <FontAwesomeIcon icon="user-circle" /> {user.firstName}
            </NavItem>
            <NavItem to={ROUTES.HOME} onClick={() => dispatch(logoutRequest())}>
              <FontAwesomeIcon icon="sign-out-alt" /> Sign Out
            </NavItem>
          </>
        ) : (
          <NavItem to={ROUTES.AUTH.LOGIN}>
            <FontAwesomeIcon icon="user-circle" /> Sign In
          </NavItem>
        )}
      </div>
    </MainNav>
  );
};

export default Header;
