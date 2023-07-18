import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "src/users/dto/create-user-dto";

@Injectable()
export class PrismaUsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserDTO) {
        return await this.prisma.users.create({ data: data });
    }

    async findUserByEmail(email: string) {
        return await this.prisma.users.findUnique({ where: { email }});
    }
}