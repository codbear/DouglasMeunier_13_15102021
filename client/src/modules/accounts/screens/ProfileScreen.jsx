import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import { Typography } from '../../theme';
import AccountCard from '../components/AccountCard';
import { useCurrentUser } from '../../security';
import { ROUTES } from '../../../router';

const ProfileScreen = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return <Redirect to={ROUTES.AUTH.LOGIN} />;
  }

  return (
    <>
      <Header firstName={currentUser?.firstName} lastName={currentUser?.lastName} />
      <Typography component="h2" srOnly>
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
