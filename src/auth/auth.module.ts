import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service"; 
import { AuthController } from "./auth.controller"; 
import { UserRepository } from "src/users/repository/users.repository"; 
import { PrismaUsersRepository } from "src/users/repository/implementations/prisma-users.repository"; 
import { UsersService } from "src/users/users.service";

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        UsersService,
        {
            provide: UserRepository, 
            useClass: PrismaUsersRepository
        }
    ]
})

export class AuthModule {}