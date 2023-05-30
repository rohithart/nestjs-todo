import { Module } from '@nestjs/common';
import { MongoModule } from 'src/shared/mongo.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MongoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
