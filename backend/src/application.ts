import * as express from 'express';
import { careRecipientController } from './controllers/care-recipient';
import { notFoundController } from './controllers/not-found';

const app = express();

app.use(careRecipientController);
app.use(notFoundController);

export default app;
