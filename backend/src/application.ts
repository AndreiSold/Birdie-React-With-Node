import * as express from 'express';
import { careRecipientsController } from './controllers/care-recipients';
import { notFoundController } from './controllers/not-found';

const app = express();

app.use(careRecipientsController, notFoundController);

export default app;
