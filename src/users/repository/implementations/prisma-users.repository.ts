import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "src/users/dto/create-user-dto";

@Injectable()
export class PrismaUsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserDTO) {
        return await this.prisma.user.create({ data: data });
    }

    async findUserByEmail(email) {
        return await this.prisma.user.findUnique({ where: email });
    }
}