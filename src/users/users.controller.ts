import { Controller, Req, Res, Next, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return ['user1', 'user2']
    }
}
