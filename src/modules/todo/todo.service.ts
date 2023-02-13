import { Injectable } from '@nestjs/common';

import { ToDo } from 'src/models/ToDo';
import { DataBaseService } from 'src/modules/database/database.service';

@Injectable()
export class TodoService {
  constructor(private readonly database: DataBaseService) {}

  getAll(): Promise<ToDo[]> {
    return this.database.getAll();
  }

  get(id: string): Promise<ToDo> {
    return this.database.get(id);
  }

  create(todo: ToDo): Promise<ToDo> {
    return this.database.create(todo);
  }

  update(todo: ToDo): Promise<ToDo> {
    return this.database.update(todo);
  }

  delete(id: string): Promise<boolean> {
    return this.database.delete(id);
  }

  // we can remove this and use the existing update function itself.
  markAsInActive(id: string): Promise<ToDo> {
    return this.get(id).then((todo: ToDo) => {
      todo.is_active = false;
      return this.update(todo);
    });
  }
}
