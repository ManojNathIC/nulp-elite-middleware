import { Module } from '@nestjs/common';
import { SunbirdService } from 'src/services/sunbird/sunbird.service';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';

@Module({
  controllers: [ContentController],
  providers: [ContentService, SunbirdService]
})
export class ContentModule {}
