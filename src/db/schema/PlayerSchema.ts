import { Schema, model, Model, Document } from 'mongoose';
import { ICard, CardModel } from './CardSchema';

interface IPlayer extends Document {
  username: string;
  deck: ICard[];
}

const PlayerSchema: Schema = new Schema({
  username: String,
  deck: [CardModel]
});

export const PlayerModel: Model<IPlayer> = model('Player', PlayerSchema);
