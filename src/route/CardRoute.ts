import { forOwn } from 'lodash';
import { Router } from 'express';
import * as csv from 'csvtojson';
import { CardModel, ICard } from '../db/schema/CardSchema';

export const CardRouter: Router = Router();

CardRouter.get('/', (req, res, next) => {
  CardModel.find()
  .then((cards) => {
    if (!cards) {
      res.status(404).send('Not Found!');
    }

    res.status(200).send(cards);
  })
  .catch(next);
});

CardRouter.post('/', (req, res, next) => {
  CardModel.create(req.body)
  .then((card) => {
    res.status(200).send(card);
  })
  .catch(next);
});

CardRouter.get('/:id', (req, res, next) => {
  CardModel.findById(req.params.id)
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  })
  .catch(next);
});

CardRouter.put('/:id', (req, res, next) => {
  CardModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  })
  .catch(next);
});

CardRouter.delete('/:id', (req, res, next) => {
  CardModel.findByIdAndRemove(req.params.id)
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  })
  .catch(next);
});

CardRouter.post('/import', (req: any, res, next) => {
  const cards: ICard[] = [];
  let i = 0;

  forOwn(req.files, (file) => {
    i += 1;

    csv()
    .fromString(file.data.toString('utf8'))
    .on('json', (json) => {
      cards.push(json);
    })
    .on('done', (err) => {
      if (err) {
        next(err);
      }

      i -= 1;

      if (i === 0) {
        CardModel.create(cards)
        .then(cards => res.status(200).send(cards))
        .catch(next);
      }
    });
  });
});
