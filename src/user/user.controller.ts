import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';


import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('get-user')
    getUserByUsername(@Query() query: any) {
        console.log('username query', query)
        return this.userService.getUserByUsername(query.username);
    }
    
    @Post('register')   
    registerUser(@Body() createUserDto: CreateUserDto) {
        console.log('userdata', createUserDto);
        return this.userService.registerUser(createUserDto);
    }
}