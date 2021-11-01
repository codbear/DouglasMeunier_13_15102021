import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const defaultProps = {};

const FeatureItemRoot = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureItem = ({ title, content, icon }) => {
  return (
    <FeatureItemRoot>
      <FeatureIcon src={icon} alt="" />
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <p>{content}</p>
    </FeatureItemRoot>
  );
};

FeatureItem.propTypes = propTypes;
FeatureItem.defaultProps = defaultProps;

export default FeatureItem;
