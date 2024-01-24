import {
  Controller,
  Post,
  Body,
  Param,
  Req,
  Get,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/token")
  @ApiQuery({ name: "username", required: false })
  @ApiQuery({ name: "password", required: false })
  async getUserToken(
    @Query("username") username: string,
    @Query("password") password: string,
    @Req() request: Request
  ) {
    const token = await this.authService.getUserToken(
      request,
      username,
      password
    );
    return token;
  }

  @Post()
  @ApiConsumes("application/json")
  @ApiCreatedResponse({
    description: "User has been created successfully.",
  })
  @ApiBody({})
  @ApiForbiddenResponse({ description: "Forbidden" })
  // @UseInterceptors(ClassSerializerInterceptor)
  // @UsePipes(new ValidationPipe({}))
  public async signupUser(@Req() request: Request, @Body() userData: any) {
    return this.authService.signupUser(request, userData);
  }
}
