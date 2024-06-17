import { Document, Schema, model, models } from 'mongoose';

export interface ITodo extends Document {
  _id: string;
  title: string;
  createdAt: Date;
  isCompleted: boolean;
}

const TodoSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },
});

const TodoModel = models.Todo || model('Todo', TodoSchema);

export default TodoModel;
