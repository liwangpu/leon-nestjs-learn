import { Module } from '@nestjs/common';
import { TeacherController } from './controllers/teacher.controller';

@Module({
  controllers: [TeacherController]
})
export class SchoolModule {}
