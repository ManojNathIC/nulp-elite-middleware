import { Body, Controller, Post } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(public contentService: ContentService) {}

  @Post('/search')
  async createAdmin(@Body() body) {
    return this.contentService.searchContent(body);
  }
}
