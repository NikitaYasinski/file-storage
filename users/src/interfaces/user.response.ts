import { User } from 'src/schemas/user.schema';

export type UserResponse = Omit<User, 'password'>;
