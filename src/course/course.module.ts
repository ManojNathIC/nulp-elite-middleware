import { Module } from '@nestjs/common';
import { SunbirdService } from 'src/services/sunbird/sunbird.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, SunbirdService]
})
export class CourseModule {}
