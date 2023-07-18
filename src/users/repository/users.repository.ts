export abstract class UserRepository {
  abstract createUser(data: CreateUserDTO): Promise<User>; 
  abstract findUserByEmail(email: string): Promise<User>;
}