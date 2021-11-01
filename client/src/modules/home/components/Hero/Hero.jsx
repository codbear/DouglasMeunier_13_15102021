import styled from 'styled-components';

import { TYPOGRAPHY, Typography } from '../../../theme';
import heroBackground from '../../images/bank-tree.jpeg';

const HeroRoot = styled.div`
  background-image: url(${heroBackground});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Hero = () => (
  <HeroRoot>
    <HeroContent>
      <Typography component="h2" srOnly>
        Promoted Content
      </Typography>
      <Typography variant={TYPOGRAPHY.SUBTITLE}>No fees.</Typography>
      <Typography variant={TYPOGRAPHY.SUBTITLE}>No minimum deposit.</Typography>
      <Typography variant={TYPOGRAPHY.SUBTITLE}>High interest rates.</Typography>
      <Typography variant={TYPOGRAPHY.TEXT}>
        Open a savings account with Argent Bank today!
      </Typography>
    </HeroContent>
  </HeroRoot>
);

export default Hero;
