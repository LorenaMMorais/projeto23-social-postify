import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserRepository } from "./repository/users.repository";
import { PrismaUsersRepository } from "./repository/implementations/prisma-users.repository";

@Module({
    controllers: [UsersController],
    providers: [
        UsersService
        {provide: UserRepository, useClass: PrismaUsersRepository}
    ]
})

export class UsersModule {}