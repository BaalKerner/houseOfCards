import * as express from 'express';

import './db/config';
import { CardRouter } from './route/CardRoute';

const PORT = process.env.PORT || 10001;

const app = express();

app.use(express.json());

app.use('/card', CardRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error: ${err}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
