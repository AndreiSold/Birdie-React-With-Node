import * as express from 'express';
import { careRecipientController } from './controllers/care-recipient';
import { notFoundController } from './controllers/not-found';

const app = express();

app.use(careRecipientController, notFoundController);

export default app;
