import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Subtitle = styled(Typography)`
  ${({ theme }) => `
  display: block;
  color: ${theme.palette.primary.main};
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 
`}
`;

export default Subtitle;
