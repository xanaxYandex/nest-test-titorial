import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      url: 'postgres://kkbtcwtqnbziix:fbc8c5c315861486a34d7c0debafb292a8af3ec93e68830f13e8cdecd301b172@ec2-52-49-23-139.eu-west-1.compute.amazonaws.com:5432/dbcvundkopfhaq',
      type: 'postgres',
      host: 'ec2-52-49-23-139.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'kkbtcwtqnbziix',
      password: 'fbc8c5c315861486a34d7c0debafb292a8af3ec93e68830f13e8cdecd301b172',
      database: 'dbcvundkopfhaq',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
