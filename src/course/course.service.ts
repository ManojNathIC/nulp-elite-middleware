import { Injectable } from '@nestjs/common';
import { SunbirdService } from 'src/services/sunbird/sunbird.service';

@Injectable()
export class CourseService {

    constructor(public sunbirdService: SunbirdService) { }

    async readCourse(id) {
        return this.sunbirdService.readCourse(id)
    }

    async getHierarchy(id) {
        return this.sunbirdService.getHierarchy(id)
    }

}
