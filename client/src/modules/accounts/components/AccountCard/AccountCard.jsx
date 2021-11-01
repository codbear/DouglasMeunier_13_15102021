import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../forms';
import { Typography } from '../../../theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const AccountCardRoot = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  background-color: ${({ theme }) => theme.palette.background.default};
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

const AccountTitle = styled(Typography)`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled(Typography)`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled(Typography)`
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
        <AccountTitle component="h3">{title}</AccountTitle>
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

export default AccountCard;
