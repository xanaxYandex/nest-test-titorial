import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TasksRepository } from "./tasks.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {
  }

  getTaskById(id: string) {

  }

  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // public getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //
  //   let tasks = this.getAllTasks();
  //
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter(task =>
  //       task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //       || task.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //     );
  //   }
  //
  //   return tasks;
  // }
  //
  // public getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException('Task with is not found');
  //   }
  //
  //   return found;
  // }
  //
  // public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //   const task: Task = {
  //     ...createTaskDto,
  //     id: uuid(),
  //     status: TaskStatus.OPEN
  //   };
  //
  //   this.tasks.push(task);
  //
  //   return task;
  // }
  //
  // public updateTask(id: string, field: string, body: any): Task {
  //   const updatedTask: Task = {
  //     ...this.tasks.find(task => task.id === id),
  //     [field]: body[field]
  //   };
  //
  //   this.tasks = this.tasks.map(task => task.id === id ? updatedTask : task);
  //   return updatedTask;
  // }
  //
  // public deleteTask(id: string) {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id);
  //   return id;
  // }
}
