import app from './application';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server started at http://localhost:${port}`);
});
