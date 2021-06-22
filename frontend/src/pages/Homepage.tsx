import { Box, Grid } from '@material-ui/core';
import BackgroundImage from '../styled-components/BackgroundImage';
import CustomTitle from '../styled-components/CustomTitle';
import styled from 'styled-components';
import CustomSubtitle from '../styled-components/CustomSubtitle';

const TitleWrapper = styled(Box)`
  ${({ theme }) => `
  margin-top: 250px;
  margin-bottom: 35px;
  @media only screen and (max-width: ${theme.breakpoints.values.xl}px) {
    margin-top: 175px !important;
  }
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin-top: 20px !important;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
`}
`;

const SubtitleWrapper = styled(Box)`
  ${({ theme }) => `
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
`}
`;

const ImageWrapper = styled(Box)`
  ${({ theme }) => `
  display: flex;
  width: 100%;
  min-height: 500px;
  margin-top: 150px;
  @media only screen and (max-width: ${theme.breakpoints.values.xl}px) {
    margin-top: 60px !important;
  }
  @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin-top: 0px !important;
    min-height: 300px;
  }
`}
`;

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
