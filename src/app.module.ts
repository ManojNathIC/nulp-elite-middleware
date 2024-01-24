import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ContentModule } from "./content/content.module";
import { CourseModule } from "./course/course.module";
import { SunbirdService } from "./services/sunbird/sunbird.service";
import { AuthModule } from "./auth/auth/auth.module";
import { LoggerService } from "./logger/logger.service";

@Module({
  imports: [ContentModule, CourseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, SunbirdService, LoggerService],
})
export class AppModule {}
