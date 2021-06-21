import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';
import { loadAllCareRecipients } from '../store/actions/careRecipientsActions';
import {
  careRecipientsLoadingSelector,
  careRecipientsSelector,
} from '../store/selectors';

const CareRecipients: React.FC = () => {
  const dispatch = useDispatch();
  const careRecipientsLoading = useSelector(careRecipientsLoadingSelector);
  const careRecipients = useSelector(careRecipientsSelector);

  useEffect(() => {
    dispatch(loadAllCareRecipients());
  }, [dispatch]);

  return (
    <Box>
      {careRecipientsLoading ? (
        <LoadingSpinner />
      ) : (
        Object.keys(careRecipients).length
      )}
    </Box>
  );
};

export default CareRecipients;
