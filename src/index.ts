import * as express from 'express';
import * as fileUpload from 'express-fileupload';

import './db/config';
import { CardRouter } from './route/CardRoute';
import { PlayerRoute } from './route/PlayerRoute';

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(fileUpload());

app.use('/card', CardRouter);
app.use('/player', PlayerRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error: ${err}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
