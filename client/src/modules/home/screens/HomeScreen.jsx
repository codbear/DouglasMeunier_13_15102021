import styled from 'styled-components';

import FeatureItem from '../components/FeatureItem';
import Hero from '../components/Hero';

import chatIcon from '../images/icon-chat.png';
import moneyIcon from '../images/icon-money.png';
import securityIcon from '../images/icon-security.png';

const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const HomeScreen = () => (
  <>
    <Hero />
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
  </>
);

export default HomeScreen;
