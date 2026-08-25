import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Project, Task } from '@prisma/client';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':id')
  async getProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProjectWithTasks(id);
  }

  @Post('tasks')
  async createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.projectService.createTask(dto);
  }

  @Patch('tasks/status')
  async updateTaskStatus(@Body() dto: UpdateTaskStatusDto): Promise<Task> {
    return this.projectService.updateTaskStatus(dto);
  }
}
