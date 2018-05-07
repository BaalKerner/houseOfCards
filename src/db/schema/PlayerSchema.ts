import { Schema, model, Model, Document } from 'mongoose';
import { ICard } from './CardSchema';

interface IPlayer extends Document {
  username: string;
  deck: ICard[];
}

const PlayerSchema: Schema = new Schema({
  username: String,
  deck: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

export const PlayerModel: Model<IPlayer> = model('Player', PlayerSchema);
