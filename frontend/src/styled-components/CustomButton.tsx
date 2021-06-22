import { Button } from '@material-ui/core';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  ${({ theme }) => `
  display: block;
  color: ${theme.palette.primary.main};
  width: 350px;
  max-width: 100%;
  margin-bottom: 10px;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 5px;
  background-color: 'white';
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 5px 20px;
  font-size: 20px;
  font-family: 'Roboto';
  &:hover { background-color: ${theme.palette.secondary.main};};
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin-left: auto;
    margin-right: auto;
  }
`}
`;

export default CustomButton;
