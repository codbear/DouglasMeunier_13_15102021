import styled from 'styled-components';

import { Layout } from '../../layout';
import { TYPOGRAPHY, Typography } from '../../theme';
import FeatureItem from '../components/FeatureItem';

import heroBackground from '../images/bank-tree.jpeg';
import chatIcon from '../images/icon-chat.png';
import moneyIcon from '../images/icon-money.png';
import securityIcon from '../images/icon-security.png';

const Hero = styled.div`
  background-image: url(${heroBackground});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  .hero-content {
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
  }

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0 33%;

    .hero-content {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;
    }
  }
`;

const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const HomeScreen = ({}) => {
  return (
    <Layout>
      <Hero>
        <section className="hero-content">
          <Typography variant={TYPOGRAPHY.H2} srOnly>
            Promoted Content
          </Typography>
          <Typography variant={TYPOGRAPHY.SUBTITLE}>No fees.</Typography>
          <Typography variant={TYPOGRAPHY.SUBTITLE}>No minimum deposit.</Typography>
          <Typography variant={TYPOGRAPHY.SUBTITLE}>High interest rates.</Typography>
          <Typography variant={TYPOGRAPHY.TEXT}>
            Open a savings account with Argent Bank today!
          </Typography>
        </section>
      </Hero>
      <Features>
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through
            a phone call in less than 5 minutes."
          icon={chatIcon}
        />
        <FeatureItem
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
          icon={moneyIcon}
        />
        <FeatureItem
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
          icon={securityIcon}
        />
      </Features>
    </Layout>
  );
};

export default HomeScreen;
