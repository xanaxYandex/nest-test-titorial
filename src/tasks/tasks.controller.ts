import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {
  }
  //
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  //
  // @Get("/:id")
  // getTaskById(@Param("id") id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  //
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  //
  // @Patch("/:id/:field")
  // updateTask(
  //   @Param("id") id: string,
  //   @Param("field") field: string,
  //   @Body() body: any
  // ): Task {
  //   return this.tasksService.updateTask(id, field, body);
  // }
  //
  // @Delete("/:id")
  // deleteTask(@Param("id") id: string): string {
  //   return this.tasksService.deleteTask(id);
  // }
}
