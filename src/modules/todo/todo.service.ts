import { Injectable } from '@nestjs/common';

import { ToDo } from 'src/models/ToDo';

@Injectable()
export class TodoService {
  private readonly database: any;
  // constructor(private readonly database: any) {}

  getAll(): Promise<ToDo[]> {
    return this.database.getAll();
  }

  get(id: string): Promise<ToDo> {
    return this.database.get(id);
  }

  create(todo: ToDo): Promise<ToDo> {
    return this.database.new(todo);
  }

  update(todo: ToDo): Promise<ToDo> {
    return this.database.update(todo);
  }

  delete(id: string): Promise<ToDo> {
    return this.database.delete(id);
  }

  // we can remove this and use the exisiting update function itself.
  markAsInActive(id: string): Promise<ToDo> {
    return this.get(id).then((todo: ToDo) => {
      todo.is_active = false;
      return this.update(todo);
    });
  }
}
