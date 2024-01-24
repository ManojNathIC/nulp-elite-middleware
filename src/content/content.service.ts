import { Injectable } from '@nestjs/common';
import { SunbirdService } from 'src/services/sunbird/sunbird.service';

@Injectable()
export class ContentService {

    constructor(public sunbirdService: SunbirdService) { }

    async searchContent(body) {
        return this.sunbirdService.searchContent(body)
    }
}
