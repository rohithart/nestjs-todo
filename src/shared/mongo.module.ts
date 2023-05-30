import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ToDo, ToDoSchema } from 'src/models/ToDo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
})
export class MongoModule {}
