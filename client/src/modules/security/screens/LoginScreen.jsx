import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Typography } from '../../theme';
import { Button, Checkbox, TextField } from '../../forms';
import securityActions from '../actions/securityActions';
import { ROUTES } from '../../../router';
import useCurrentUser from '../hooks/useCurrentUser';

const SignInCard = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 3rem auto 0 auto;
  padding: 2rem;
`;

const LoginScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: '',
  };

  const handleSubmit = (values) => dispatch(securityActions.login(values));

  useEffect(() => {
    if (currentUser?.id) {
      history.push(ROUTES.PROFILE.INDEX);
    }
  }, [currentUser, history]);

  return (
    <SignInCard>
      <FontAwesomeIcon icon="user-circle" />
      <Typography component="h1">Sign In</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <TextField name="email" label="Username" inputProps={{ required: true }} />
            <TextField
              name="password"
              label="Password"
              type="password"
              inputProps={{ required: true }}
            />
            <Checkbox label="Remember me" name="rememberMe" />
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
    </SignInCard>
  );
};

export default LoginScreen;
