import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';
import { theme } from '../AppTheme';

const overrideCss = css`
  display: block;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingSpinner: React.FC = () => {
  return (
    <HashLoader
      color={theme.palette.secondary.main}
      loading={true}
      css={overrideCss}
      size={125}
    />
  );
};

export default LoadingSpinner;
