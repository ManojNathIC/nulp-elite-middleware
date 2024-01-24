import { Injectable } from "@nestjs/common";
import axios from "axios";
import { LoggerService } from "src/logger/logger.service";

@Injectable()
export class AuthService {
  constructor(private readonly logger: LoggerService) {}

  async getUserToken(
    request: any,
    username: string,
    password: string
  ): Promise<string> {
    const tokenEndpoint = `${process.env.KEYCLOAK_BASE_URL}/sunbird/protocol/openid-connect/token`;

    try {
      this.logger.log("testing");
      const response = await axios.post(
        tokenEndpoint,
        {
          grant_type: "",
          client_id: "",
          client_secret: "",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const userToken = response.data;
      return userToken;
    } catch (error) {
      console.error("Error obtaining user token:", error);
      throw new Error("Unable to obtain user token");
    }
  }
  async signupUser(request: any, userData: any) {
    try {
      let data = {
        request: {
          firstName: "test invitation",
        },
      };

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.API_BASE_URL}/learner/user/v2/signup`,
        headers: {
          Accept: "application/json",
          "X-Request-ID": "2c7c6260-2906ca-654e-ff7a-1ff37aaa9ce6",
          "X-Session-ID": "1a62ac9f-69989c-0f80-f6cc-7d771bec2941",
        },
        data: data,
      };

      const response = await axios(config);

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
