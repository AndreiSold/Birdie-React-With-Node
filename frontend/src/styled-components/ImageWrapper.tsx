import { Box } from '@material-ui/core';
import styled from 'styled-components';

const ImageWrapper = styled(Box)`
  ${({ theme }) => `
  display: flex;
  width: 100%;
  min-height: 500px;
  margin-top: 120px;
  @media only screen and (max-width: ${theme.breakpoints.values.xl}px) {
    margin-top: 40px !important;
  }
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin-top: 0px !important;
    min-height: 300px;
  }
`}
`;

export default ImageWrapper;
