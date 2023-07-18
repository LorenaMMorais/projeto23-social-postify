import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UserRepository } from "./repository/users.repository";
import { CreateUserDTO } from "./dto/create-user-dto";

@Injectable()

export class UsersService {
    constructor(private readonly usersRepository: UserRepository) {}

    async createUser({ name, email, password, avatar }: CreateUserDTO) {
        const userExist = await this.usersRepository.findUserByEmail(email);
        
        if(userExist) throw new HttpException('User already exist', HttpStatus.CONFLICT);

        const hashPassword = bcrypt.hashSync(password, 10);

        return await this.usersRepository.createUser({
            name, 
            email,
            password: hashPassword,
            avatar
        });
    }
}