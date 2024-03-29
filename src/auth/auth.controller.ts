import { Body, Controller, Post } from "@nestjs/common";
import { AuthSigninDTO } from "./dto/auth-signin.dto"; 
import { AuthSignupDTO } from "./dto/auth.signup.dto"; 
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    async signin(@Body() body: AuthSigninDTO) {
        return this.authService.signin(body);
    }

    @Post('signup')
    async signup(@Body() body: AuthSignupDTO) {
        return this.authService.signup(body);
    }
}