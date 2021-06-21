import { Box } from '@material-ui/core';
import styled from 'styled-components';

const CustomBackgroundImage = styled(Box)`
  ${(props: { path: string }) => `
  height: 600px;
  width: 600px;
  background-image: url('${props.path}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    height: 400px;
    width: 400px;
  }
`}
`;

export default CustomBackgroundImage;
