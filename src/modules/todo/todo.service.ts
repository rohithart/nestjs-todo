import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ToDo, ToDoDocument } from 'src/models/ToDo';

@Injectable()
export class TodoService {
  constructor(@InjectModel(ToDo.name) private todoModel: Model<ToDoDocument>) {}

  getAll(): Promise<ToDo[]> {
    return this.todoModel.find().exec();
  }

  get(id: string): Promise<ToDo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  create(todo: ToDo): Promise<ToDo> {
    const newToDo = new this.todoModel(todo);
    return newToDo.save();
  }

  update(id: string, body: unknown): Promise<ToDo> {
    return this.todoModel
      .findOneAndUpdate({ _id: id }, body, { new: true })
      .exec();
  }

  delete(id: string): Promise<unknown> {
    return this.todoModel
      .findOneAndRemove({
        _id: id,
      })
      .exec();
  }

  // we can remove this and use the existing update function itself.
  markAsInActive(id: string): Promise<ToDo> {
    return this.todoModel
      .findOneAndUpdate(
        { _id: id },
        { $set: { is_active: false } },
        { new: true },
      )
      .exec();
  }
}
