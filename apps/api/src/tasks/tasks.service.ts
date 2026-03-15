import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async createTask(title: string) {
    return this.prisma.task.create({
      data: { title },
    });
  }

  async updateTask(id: string, completed: boolean) {
    return this.prisma.task.update({
      where: { id },
      data: { completed },
    });
  }

  async deleteTask(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
