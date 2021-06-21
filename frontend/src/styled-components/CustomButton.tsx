import { Button } from '@material-ui/core';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  ${({ theme }) => `
  display: block;
  margin-bottom: 15px;
  color: white;
  background-color: ${theme.palette.secondary.main};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 5px 20px;
  font-size: 20px;
  font-family: 'Roboto';
  &:hover { background-color: ${theme.palette.primary.main};};
`}
`;

export default CustomButton;
