/* eslint-disable no-console */
import app from './app';

app.listen(process.env.APP_PORT, () => {
  console.log(`Express server running on ${process.env.APP_URL}`);
});
