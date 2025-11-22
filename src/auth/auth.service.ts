import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    // Define your authentication logic here
    async registerUser(registerUserDto:RegisterUserDto) {
        // console.log(registerUserDto)
        const hashedPassword = await bcrypt.hash(registerUserDto.password,10);
        // console.log('Hashed Password:', hashedPassword);
        // Registration logic goes here
        return this.userService.createUser({ ...registerUserDto, password: hashedPassword });
    }
}
