import { Router } from 'express';
import { CardModel } from '../db/schema/CardSchema';

export const CardRouter: Router = Router();

CardRouter.get('/', (req, res) => {
  CardModel.find()
  .then((cards) => {
    if (!cards) {
      res.status(404).send('Not Found!');
    }

    res.status(200).send(cards);
  });
});

CardRouter.post('/', (req, res) => {
  CardModel.create(req.body)
  .then((card) => {
    res.status(200).send(card);
  });
});

CardRouter.get('/:id', (req, res) => {
  CardModel.findById(req.params.id)
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  });
});

CardRouter.put('/:id', (req, res) => {
  CardModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  });
});

CardRouter.delete('/:id', (req, res) => {
  CardModel.findByIdAndRemove(req.params.id)
  .then((card) => {
    if (!card) res.status(404).send('Not Found!');

    res.status(200).send(card);
  });
});
