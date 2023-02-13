import { Module } from '@nestjs/common';
import { DataBaseService } from 'src/modules/database/database.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, DataBaseService],
})
export class TodoModule {}
