import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/users/create-user.dto";
export declare class UsersController {
    private readonly usersClient;
    constructor(usersClient: ClientProxy);
    createUser(dto: CreateUserDto): Promise<any>;
}
