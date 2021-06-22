import { Box } from '@material-ui/core';
import BackgroundImage from '../styled-components/BackgroundImage';

const NotFound: React.FC = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      width='100%'
      minHeight='500px'
      marginTop='80px'
    >
      <BackgroundImage path='/images/404.png' />
    </Box>
  );
};

export default NotFound;
