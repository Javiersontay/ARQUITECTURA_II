import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Hacer la tarea de arquitectura',
    description: 'Title of the task',
  })
  title: string;
}
