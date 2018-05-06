import { Router } from 'express';
import { PlayerModel } from '../db/schema/PlayerSchema';

const PlayerRoute: Router = Router();

PlayerRoute.get('/', (req, res) => {
  PlayerModel.find()
  .then((players) => {
    if (!players) res.status(404).send('Not Found!');

    res.status(200).send(players);
  });
});

PlayerRoute.post('/', (req, res) => {
  PlayerModel.create(req.body)
  .then((player) => {
    res.status(200).send(player);
  });
});

PlayerRoute.get('/:id', (req, res) => {
  PlayerModel.findById(req.params.id)
  .then((player) => {
    if (!player) res.status(404).send('Not Found!');

    res.status(200).send(player);
  });
});

PlayerRoute.put('/:id', (req, res) => {
  PlayerModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((player) => {
    if (!player) res.status(404).send('Not Found!');

    res.status(200).send(player);
  });
});
