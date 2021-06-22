import { Box } from '@material-ui/core';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { loadAllEventsForCareRecipient } from '../store/actions/eventsActions';
import {
  careRecipientByIdSelector,
  eventsByCareRecipientIdSelector,
  eventsLoadingSelector,
} from '../store/selectors';
import { getIndexForMood, getMoodFromIndex } from '../utils/mood-processor';
import { getDateFromTimestamp } from '../utils/time-date';
import { theme } from '../AppTheme';
import { Mood } from '../enums/mood';
import CustomButton from '../styled-components/CustomButton';
import { push } from 'connected-react-router';
import routes from '../routes';
import CustomTitle from '../styled-components/CustomTitle';
import { loadAllCareRecipients } from '../store/actions/careRecipientsActions';

const CareRecipient: React.FC = () => {
  const dispatch = useDispatch();
  const careRecipientId = (useParams() as any).careRecipientId;
  const eventsLoading = useSelector(eventsLoadingSelector);
  const events = useSelector(
    eventsByCareRecipientIdSelector.bind(null, careRecipientId)
  );
  const [chart, setChart] = useState(undefined);
  const careRecipient = useSelector(
    careRecipientByIdSelector.bind(null, careRecipientId)
  );

  useEffect(() => {
    dispatch(loadAllCareRecipients());
    dispatch(loadAllEventsForCareRecipient(careRecipientId));
  }, [dispatch, careRecipientId]);

  useEffect(() => {
    if (
      events &&
      Object.keys(events.events).length > 0 &&
      Object.keys(events.moodObservations).length > 0
    ) {
      if (chart) {
        (chart as any).destroy();
      }
      const config = {
        type: 'line',
        data: {
          datasets: [
            {
              backgroundColor: 'white',
              borderColor: theme.palette.primary.main,
              stepped: true,
              data: events.moodObservations
                .filter(
                  (moodObservation) =>
                    moodObservation.mood !== Mood.BORED &&
                    moodObservation.mood !== Mood.CONFUSED
                )
                .map((moodObservation) => {
                  return {
                    x: getDateFromTimestamp(moodObservation.timestamp),
                    y: getIndexForMood(moodObservation.mood),
                  };
                }),
            },
          ],
        },
        options: {
          responsive: true,
          events: [],
          plugins: {
            title: {
              display: true,
              text: 'Mood Observations',
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: false, //Switch to true if axis title should be displayed
                text: 'Date',
              },
            },
            y: {
              title: {
                display: false, //Switch to true if axis title should be displayed
                text: 'Mood',
              },
              min: 0,
              max: 2,
              ticks: {
                stepSize: 1,
                callback: (value: number) => {
                  return getMoodFromIndex(value);
                },
              },
            },
          },
        },
      };
      setChart(new Chart(document.getElementById('myChart'), config));
    }

    return () => {
      if (chart) {
        (chart as any).destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  const BackToCareRecipientsButton = (
    <CustomButton
      onClick={() => {
        dispatch(push(routes.careRecipients.base));
      }}
    >
      Back to Care Recipients
    </CustomButton>
  );

  return (
    <Box>
      {eventsLoading || !events ? (
        <LoadingSpinner />
      ) : Object.keys(events.events).length === 0 &&
        Object.keys(events.moodObservations).length === 0 ? (
        <>
          {BackToCareRecipientsButton}
          <CustomTitle>
            There is no care recipient with ID: '{careRecipientId}'!
          </CustomTitle>
        </>
      ) : (
        <Box>
          {BackToCareRecipientsButton}
          <Box marginBottom='20px' marginTop='20px'>
            {careRecipient ? (
              <CustomTitle>
                Care Recipient: {careRecipient.fullName}
              </CustomTitle>
            ) : (
              <></>
            )}
          </Box>
          <canvas id='myChart'></canvas>
        </Box>
      )}
    </Box>
  );
};

export default CareRecipient;
