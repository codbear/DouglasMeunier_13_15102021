import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Typography } from '../../../theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const FeatureItemRoot = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureItemIcon = styled.img`
  width: 100px;
  border: 10px solid ${({ theme }) => theme.palette.border.primary};
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.alternative};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureItem = ({ title, content, icon }) => (
  <FeatureItemRoot>
    <FeatureItemIcon src={icon} alt="" />
    <FeatureItemTitle>{title}</FeatureItemTitle>
    <Typography>{content}</Typography>
  </FeatureItemRoot>
);

FeatureItem.propTypes = propTypes;

export default FeatureItem;
