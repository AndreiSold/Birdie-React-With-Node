import { Box } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';
import routes from '../routes';
import { loadAllCareRecipients } from '../store/actions/careRecipientsActions';
import {
  careRecipientsLoadingSelector,
  careRecipientsSelector,
} from '../store/selectors';
import CustomButton from '../styled-components/CustomButton';

const CareRecipients: React.FC = () => {
  const dispatch = useDispatch();
  const careRecipientsLoading = useSelector(careRecipientsLoadingSelector);
  const careRecipients = useSelector(careRecipientsSelector);

  useEffect(() => {
    dispatch(loadAllCareRecipients());
  }, [dispatch]);

  return (
    <Box>
      {careRecipientsLoading || !careRecipients ? (
        <LoadingSpinner />
      ) : (
        Object.keys(careRecipients).map((careRecipientId) => (
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
        ))
      )}
    </Box>
  );
};

export default CareRecipients;
