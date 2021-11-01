import styled from 'styled-components';
import { Typography } from '../../../theme';

const FooterRoot = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.palette.border.alternative};
  padding: 2rem 0 1.5rem;
`;

const FooterContent = styled(Typography)`
  margin: 0;
  padding: 0;
`;

const Footer = () => (
  <FooterRoot>
    <FooterContent>Copyright 2020 Argent Bank</FooterContent>
  </FooterRoot>
);

export default Footer;
