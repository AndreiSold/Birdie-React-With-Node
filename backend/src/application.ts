import express from 'express';
import { careRecipientsController } from './controllers/care-recipients';
import { eventsController } from './controllers/events';
import { notFoundController } from './controllers/not-found';
import cors, { CorsOptions } from 'cors';

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://andrews-birdie-frontend.herokuapp.com',
];

const options: CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(careRecipientsController, eventsController, notFoundController);

export default app;
