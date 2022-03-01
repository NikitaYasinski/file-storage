import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern({ cmd: 'create_user' })
    public createUser({ b: string }) {
        return { message: 'User was created!'};   
    }
}
