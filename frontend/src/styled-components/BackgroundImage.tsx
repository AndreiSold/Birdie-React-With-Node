import { Box } from '@material-ui/core';
import styled from 'styled-components';

const BackgroundImage = styled(Box)`
  ${(props: { path: string }) => `
  height: auto;
  width: 100%;
  background-image: url('${props.path}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`}
`;

export default BackgroundImage;
