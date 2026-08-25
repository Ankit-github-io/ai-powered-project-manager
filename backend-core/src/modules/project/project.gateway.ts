import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ProjectService } from './project.service';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/kanban',
})
export class ProjectGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly projectService: ProjectService) {}

  @SubscribeMessage('joinProject')
  handleJoinProject(
    @ConnectedSocket() client: Socket,
    @MessageBody() projectId: string,
  ) {
    client.join(`project:${projectId}`);
    return { status: 'joined', projectId };
  }

  @SubscribeMessage('moveTask')
  async handleMoveTask(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: UpdateTaskStatusDto,
  ) {
    const updatedTask = await this.projectService.updateTaskStatus(dto);

    // Broadcast updated task to all active clients viewing this project
    this.server
      .to(`project:${updatedTask.projectId}`)
      .emit('taskMoved', updatedTask);

    return updatedTask;
  }
}