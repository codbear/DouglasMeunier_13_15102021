import Header from '../components/Header';
import { TYPOGRAPHY, Typography } from '../../theme';
import AccountCard from '../components/AccountCard';

const ProfileScreen = () => {
  return (
    <>
      <Header firstName="Tony" lastName="Stark" />
      <Typography variant={TYPOGRAPHY.H2} srOnly>
        Accounts
      </Typography>
      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </>
  );
};

export default ProfileScreen;
