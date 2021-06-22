import { Box, Grid } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoadingSpinner from '../components/LoadingSpinner';
import routes from '../routes';
import { loadAllCareRecipients } from '../store/actions/careRecipientsActions';
import {
  careRecipientsLoadingSelector,
  careRecipientsSelector,
} from '../store/selectors';
import BackgroundImage from '../styled-components/BackgroundImage';
import CustomButton from '../styled-components/CustomButton';
import CustomSubtitle from '../styled-components/CustomSubtitle';
import CustomTitle from '../styled-components/CustomTitle';
import ImageWrapper from '../styled-components/ImageWrapper';
import SubtitleWrapper from '../styled-components/SubtitleWrapper';
import TitleWrapper from '../styled-components/TitleWrapper';

const CareRecipients: React.FC = () => {
  const dispatch = useDispatch();
  const careRecipientsLoading = useSelector(careRecipientsLoadingSelector);
  const careRecipients = useSelector(careRecipientsSelector);

  useEffect(() => {
    dispatch(loadAllCareRecipients());
  }, [dispatch]);

  const CustomTitleWrapper = styled(TitleWrapper)`
    ${({ theme }) => `
    margin-top: 210px !important;
    @media only screen and (max-width: ${theme.breakpoints.values.xl}px) {
      margin-top: 120px !important;
    }
    @media only screen and (max-width: ${theme.breakpoints.values.md}px) {
      margin-top: 15px !important;
    }
 `}
  `;

  return (
    <Box>
      {careRecipientsLoading || !careRecipients ? (
        <LoadingSpinner />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <ImageWrapper>
              <BackgroundImage path='/images/care-recipients-picture.png' />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTitleWrapper>
              <CustomTitle>OUR CARE RECIPIENTS</CustomTitle>
            </CustomTitleWrapper>
            <SubtitleWrapper>
              <CustomSubtitle>
                Select one of our care recipients in order to see statistics
                regarding their general mood and the full history of events
                related to them.
              </CustomSubtitle>
            </SubtitleWrapper>
            <Box marginTop='40px' textAlign='center'>
              {Object.keys(careRecipients).map((careRecipientId) => (
                <CustomButton
                  key={careRecipients[careRecipientId].id}
                  onClick={() => {
                    dispatch(
                      push(
                        routes.careRecipients.individual.replace(
                          ':careRecipientId',
                          careRecipients[careRecipientId].id
                        )
                      )
                    );
                  }}
                >
                  {careRecipients[careRecipientId].fullName}
                </CustomButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CareRecipients;
