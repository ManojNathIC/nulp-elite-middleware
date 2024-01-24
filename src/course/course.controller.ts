import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(public courseService: CourseService) {}

  @Get('/read/:id')
  async createAdmin(@Param('id') id) {
    return this.courseService.readCourse(id);
  }

  @Get('/hierarchy/:id')
  async getHierarchy(@Param('id') id) {
    return this.courseService.getHierarchy(id);
  }
}
