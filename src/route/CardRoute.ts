import { Router } from 'express';
import { CardModel } from '../db/schema/CardSchema';

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
