import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Layout } from '../../layout';
import { TYPOGRAPHY, Typography } from '../../theme';
import { Button, Checkbox, TextField } from '../../forms';
import action from '../actions';
import { ROUTES } from '../../../router';
import useIsConnected from '../hooks/useIsConnected';

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
  const isConnected = useIsConnected();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: '',
  };

  const handleSubmit = (values) => dispatch(action.login(values));

  useEffect(() => {
    if (isConnected) {
      history.push(ROUTES.PROFILE.INDEX);
    }
  }, [isConnected, history]);

  return (
    <Layout isDark>
      <SignInCard>
        <FontAwesomeIcon icon="user-circle" />
        <Typography variant={TYPOGRAPHY.H1}>Sign In</Typography>
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
    </Layout>
  );
};

export default LoginScreen;
