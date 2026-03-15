import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    example: true,
    description: 'Task completion status',
  })
  completed: boolean;
}
