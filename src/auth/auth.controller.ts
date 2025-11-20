import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService:AuthService){
        this.authService = authService;
    }
    // Define your authentication routes and methods here
    @Post('register')
    register() {
        const result = this.authService.registerUser();
        return result;
    }
}
