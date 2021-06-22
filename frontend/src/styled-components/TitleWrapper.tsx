import { Box } from '@material-ui/core';
import styled from 'styled-components';

const TitleWrapper = styled(Box)`
  ${({ theme }) => `
  margin-top: 250px;
  margin-bottom: 35px;
  @media only screen and (max-width: ${theme.breakpoints.values.xl}px) {
    margin-top: 175px !important;
  }
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin-top: 20px !important;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
`}
`;

export default TitleWrapper;
