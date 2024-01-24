import { Injectable } from "@nestjs/common";
import * as winston from "winston";

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(({ level, message, timestamp, context, trace }) => {
  return `[${timestamp}] [${level.toUpperCase()}] ${
    context ? `[${context}] ` : ""
  }${message} ${trace ? `\n${trace}` : ""}`;
});

@Injectable()
export class LoggerService {
  private readonly logger = winston.createLogger({
    format: combine(timestamp(), customFormat),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });

  log(message: string, context?: string) {
    this.logger.log("info", message, { context });
  }

  error(message: string, trace: string, context?: string) {
    this.logger.log("error", message, { context, trace });
  }

  warn(message: string, context?: string) {
    this.logger.log("warn", message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.log("debug", message, { context });
  }
}
