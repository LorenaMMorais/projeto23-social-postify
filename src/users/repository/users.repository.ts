export abstract class UserRepository {
  abstract createUser(data: CreateUserDTO): Promise<User>; 
}