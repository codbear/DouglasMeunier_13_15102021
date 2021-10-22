import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Layout } from '../../layout';
import { TYPOGRAPHY, Typography } from '../../theme';
import { Button, Checkbox, TextField } from '../../forms';

const SignInCard = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 3rem auto 0 auto;
  padding: 2rem;
`;

const SignInScreen = () => {
  const initialValues = {
    username: '',
    password: '',
    rememberMe: '',
  };

  const handleSubmit = (values) => console.log(values);

  return (
    <Layout isDark>
      <SignInCard>
        <FontAwesomeIcon icon="user-circle" />
        <Typography variant={TYPOGRAPHY.H1}>Sign In</Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <TextField name="username" label="Username" inputProps={{ required: true }} />
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

export default SignInScreen;
