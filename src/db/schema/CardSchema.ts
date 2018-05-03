import { Schema, model, Model, Document } from 'mongoose';

interface ICard extends Document {
  name: string;
  description: string;
}

const CardSchema: Schema = new Schema({
  name: String,
  description: String
});

export const CardModel: Model<ICard> = model('Card', CardSchema);
