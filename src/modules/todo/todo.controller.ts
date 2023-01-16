import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

import { ToDo } from 'src/models/ToDo';
import { TodoService } from './todo.service';

@ApiTags('ToDo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  get(@Param() params: { id: string }): Promise<ToDo> {
    return this.todoService.get(params.id);
  }

  @Get('all')
  getAll(): Promise<ToDo[]> {
    return this.todoService.getAll();
  }

  @Post()
  @ApiBody({})
  create(@Body() body: ToDo): Promise<ToDo> {
    return this.todoService.create(body);
  }

  @Put()
  @ApiBody({})
  update(@Body() body: ToDo): Promise<ToDo> {
    return this.todoService.update(body);
  }

  @Put('inactive/:id')
  @ApiParam({ name: 'id', required: true })
  markAsInActive(@Param() params: { id: string }): Promise<ToDo> {
    return this.todoService.markAsInActive(params.id);
  }

  @Delete()
  @ApiParam({ name: 'id', required: true })
  delete(@Param() params: { id: string }): Promise<ToDo> {
    return this.todoService.delete(params.id);
  }
}
