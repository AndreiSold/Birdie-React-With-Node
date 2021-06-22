import express from 'express';
import { careRecipientsController } from './controllers/care-recipients';
import { eventsController } from './controllers/events';
import { notFoundController } from './controllers/not-found';
import cors, { CorsOptions } from 'cors';

const app = express();

const options: CorsOptions = {
  origin: '*',
};

app.use(cors(options));
app.use(careRecipientsController, eventsController, notFoundController);

export default app;
