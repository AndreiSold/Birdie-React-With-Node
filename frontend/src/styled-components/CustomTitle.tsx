import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const CustomTitle = styled(Typography)`
  ${({ theme }) => `
  display: block;
  color: ${theme.palette.primary.main};
  font-size: 30px;
  font-family: 'Abril Fatface';
  font-weight: bold;
`}
`;

export default CustomTitle;
