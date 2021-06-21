import { Box } from '@material-ui/core';
import CustomBackgroundImage from '../styled-components/CustomBackgroundImage';

const NotFound: React.FC = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <CustomBackgroundImage path='/images/404.png' />
    </Box>
  );
};

export default NotFound;
