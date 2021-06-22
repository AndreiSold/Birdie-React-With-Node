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
import {
  getDateAndTimeFromTimestamp,
  getDateFromTimestamp,
} from '../utils/time-date';
import { theme } from '../AppTheme';
import { Mood } from '../enums/mood';
import CustomButton from '../styled-components/CustomButton';
import { push } from 'connected-react-router';
import routes from '../routes';
import CustomTitle from '../styled-components/Title';
import { loadAllCareRecipients } from '../store/actions/careRecipientsActions';
import { DataGrid } from '@material-ui/data-grid';
import { getDescriptionForEventType } from '../utils/event-type-processor';
import SmallTitle from '../styled-components/SmallTitle';

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
          maintainAspectRatio: false,
          events: [],
          plugins: {
            title: {
              display: false,
              text: 'Mood Observations', //Switch to true if the title should be displayed
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

  const tableColumns = [
    { field: 'timestamp', headerName: 'Timestamp', width: 200 },
    {
      field: 'eventType',
      headerName: 'Event type',
      width: 200,
      disableClickEventBubbling: true,
    },
    {
      field: 'message',
      headerName: 'Message',
      width: 700,
    },
  ];

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
              <CustomTitle>{careRecipient.fullName}</CustomTitle>
            ) : (
              <></>
            )}
          </Box>
          <Box marginBottom='15px'>
            <SmallTitle>Mood observations</SmallTitle>
          </Box>
          <Box width='100%' maxHeight='300px'>
            <canvas id='myChart' width='100%' height='300px' />
          </Box>
          <Box marginTop='30px' marginBottom='15px'>
            <SmallTitle>Events history</SmallTitle>
          </Box>
          <Box width='100%' marginBottom='50px'>
            <DataGrid
              rows={events.events.map((event) => {
                return {
                  timestamp: getDateAndTimeFromTimestamp(event.timestamp),
                  eventType: getDescriptionForEventType(event.eventType),
                  message: event.message,
                  id: event.id,
                };
              })}
              columns={tableColumns}
              pageSize={5}
              isRowSelectable={(_params: any) => {
                return false;
              }}
              autoHeight={true}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CareRecipient;
