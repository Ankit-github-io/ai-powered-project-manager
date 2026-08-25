import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async getProjectWithTasks(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: {
        tasks: {
          include: { assignee: true },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!project) {
      throw new NotFoundException(`Project with ID "${projectId}" not found`);
    }

    return project;
  }

  async createTask(dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        priority: dto.priority,
        status: dto.status,
        order: dto.order,
        projectId: dto.projectId,
        assigneeId: dto.assigneeId,
      },
      include: { assignee: true },
    });
  }

  async updateTaskStatus(dto: UpdateTaskStatusDto) {
    const task = await this.prisma.task.findUnique({
      where: { id: dto.taskId },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID "${dto.taskId}" not found`);
    }

    return this.prisma.task.update({
      where: { id: dto.taskId },
      data: {
        status: dto.status,
        ...(dto.order !== undefined && { order: dto.order }),
      },
      include: { assignee: true },
    });
  }
}
