import { Box } from '@material-ui/core';
import styled from 'styled-components';

const SubtitleWrapper = styled(Box)`
  ${({ theme }) => `
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
`}
`;

export default SubtitleWrapper;
