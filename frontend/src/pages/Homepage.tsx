import { Grid } from '@material-ui/core';
import BackgroundImage from '../styled-components/BackgroundImage';
import CustomTitle from '../styled-components/CustomTitle';
import CustomSubtitle from '../styled-components/CustomSubtitle';
import ImageWrapper from '../styled-components/ImageWrapper';
import SubtitleWrapper from '../styled-components/SubtitleWrapper';
import TitleWrapper from '../styled-components/TitleWrapper';

const Homepage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <TitleWrapper>
          <CustomTitle>CONNECTING FAMILIES WITH HOMECARE SOFTWARE</CustomTitle>
        </TitleWrapper>
        <SubtitleWrapper>
          <CustomSubtitle>
            Andrew's Birdie is your all-in-one homecare software solution
            designed to help families stay more connected and help seniors live
            happily within their own home.
          </CustomSubtitle>
        </SubtitleWrapper>
      </Grid>
      <Grid item xs={12} md={7}>
        <ImageWrapper>
          <BackgroundImage path='/images/homepage-picture.png' />
        </ImageWrapper>
      </Grid>
    </Grid>
  );
};

export default Homepage;
