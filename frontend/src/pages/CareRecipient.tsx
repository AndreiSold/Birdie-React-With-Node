import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { loadAllEventsForCareRecipient } from '../store/actions/eventsActions';
import {
  eventsByCareRecipientIdSelector,
  eventsLoadingSelector,
} from '../store/selectors';

const CareRecipient: React.FC = () => {
  const dispatch = useDispatch();
  const careRecipientId = (useParams() as any).careRecipientId;
  const eventsLoading = useSelector(eventsLoadingSelector);
  const events = useSelector(
    eventsByCareRecipientIdSelector.bind(null, careRecipientId)
  );

  useEffect(() => {
    dispatch(loadAllEventsForCareRecipient(careRecipientId));
  }, [dispatch, careRecipientId]);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <Box>
      {eventsLoading || !events ? (
        <LoadingSpinner />
      ) : (
        `Events: ${Object.keys(events.events).length}; Mood observations: ${
          Object.keys(events.moodObservations).length
        }`
      )}
    </Box>
  );
};

export default CareRecipient;
