import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const TestParagraph = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.secondary.main};
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 20px;
  font-family: 'Roboto';
`}
`;
