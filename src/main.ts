import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { RequestMethod } from "@nestjs/common";
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1", {
    exclude: [{ path: "health", method: RequestMethod.GET }],
  });
  const config = new DocumentBuilder()
    .setTitle("NULP ")
    .setDescription("The NULP II API")
    .setVersion("2.0")
    .addTag("NULP")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
