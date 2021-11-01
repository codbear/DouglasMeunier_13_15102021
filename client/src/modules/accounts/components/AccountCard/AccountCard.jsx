import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../forms';

const propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {};

const AccountCardRoot = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto 2rem auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountCardContent = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    @media (min-width: 720px) {
      flex: 0;
    }
  }
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButton = styled(Button)`
  @media (min-width: 720px) {
    width: 200px;
  }
`;

const AccountCard = ({ title, amount, description }) => {
  return (
    <AccountCardRoot>
      <AccountCardContent>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountCardContent>
      <AccountCardContent className="cta">
        <TransactionButton>View transactions</TransactionButton>
      </AccountCardContent>
    </AccountCardRoot>
  );
};

AccountCard.propTypes = propTypes;
AccountCard.defaultProps = defaultProps;

export default AccountCard;
