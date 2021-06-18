import * as express from 'express';
import { careRecipientsController } from './controllers/care-recipients';
import { eventsController } from './controllers/events';
import { notFoundController } from './controllers/not-found';

const app = express();

app.use(careRecipientsController, eventsController, notFoundController);

export default app;
