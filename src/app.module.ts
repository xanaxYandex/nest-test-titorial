import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      url: 'postgres://nsdcayzyqylcxk:18e880a0e01196d3174e3e4ebaedc96d5e153a80505c473420bdbd421d481764@ec2-176-34-222-188.eu-west-1.compute.amazonaws.com:5432/d28l3r0h7tqhco',
      type: 'postgres',
      host: 'ec2-176-34-222-188.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'nsdcayzyqylcxk',
      password: '18e880a0e01196d3174e3e4ebaedc96d5e153a80505c473420bdbd421d481764',
      database: 'd28l3r0h7tqhco',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
