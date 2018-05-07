import { map } from 'lodash';
import { Schema, model, Model, Document } from 'mongoose';
import { CardType, CardSubType, CardClass } from '../../card/CardType';

export interface ICard extends Document {
  attack: number;
  class: CardClass;
  cost: number;
  description: string;
  hp: number;
  name: string;
  subType: CardSubType;  
  type: CardType;
}

const CardSchema: Schema = new Schema({
  attack: Number,
  class: { type: String, required: true, enum: map(CardClass, value => value) },
  cost: { type: Number, required: true },
  description: String,
  hp: Number,
  name: { type: String, required: true, unique: true },
  subType: { type: String, enum: map(CardSubType, value => value) },  
  type: { type: String, required: true, enum: map(CardType, value => value) }
});

export const CardModel: Model<ICard> = model('Card', CardSchema);
