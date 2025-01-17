import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import { Typography } from '../../../theme';
import { BUTTON, Button, TextField } from '../../../forms';
import { updateUserRequest } from '../../../security';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

const HeaderRoot = styled.div`
  color: ${({ theme }) => theme.palette.text.contrasted};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
`;

const EditForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
`;

const EditFormButton = styled(Button)`
  width: 50%;

  &:first-of-type {
    justify-self: end;
  }
`;

const Header = ({ firstName, lastName }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateUserRequest(values.firstName, values.lastName));

    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  return (
    <HeaderRoot>
      <Typography component="h1">
        Welcome back
        {!isEditMode && (
          <>
            <br />
            {firstName} {lastName}!
          </>
        )}
      </Typography>
      {isEditMode ? (
        <Formik initialValues={{ firstName, lastName }} onSubmit={handleSubmit}>
          {() => (
            <EditForm>
              <TextField
                name="firstName"
                inputProps={{ placeholder: firstName, 'aria-label': 'firstname', required: true }}
              />
              <TextField
                name="lastName"
                inputProps={{ placeholder: lastName, 'aria-label': 'lastname', required: true }}
              />
              <EditFormButton
                type="submit"
                variant={BUTTON.CONTAINED}
                onClick={() => setIsEditMode(true)}
              >
                Save
              </EditFormButton>
              <EditFormButton type="button" variant={BUTTON.CONTAINED} onClick={handleCancel}>
                Cancel
              </EditFormButton>
            </EditForm>
          )}
        </Formik>
      ) : (
        <Button variant={BUTTON.CONTAINED} onClick={() => setIsEditMode(true)}>
          Edit Name
        </Button>
      )}
    </HeaderRoot>
  );
};

Header.propTypes = propTypes;

export default Header;
