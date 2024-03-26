import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [DatabaseModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
