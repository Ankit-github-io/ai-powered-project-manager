import {
  IsString,
  IsEnum,
  IsNotEmpty,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';
import { TaskStatus } from './create-task.dto';

export class UpdateTaskStatusDto {
  @IsString()
  @IsNotEmpty()
  taskId!: string;

  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status!: TaskStatus;

  @IsInt()
  @Min(0)
  @IsOptional()
  order?: number;
}
