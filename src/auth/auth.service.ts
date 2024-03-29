import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { AuthSigninDTO } from "./dto/auth-signin.dto";
import { AuthSignupDTO } from "./dto/auth.signup.dto";
import { UsersService } from "src/users/users.service";
import { UserRepository } from "src/users/repository/users.repository";
import { users } from "@prisma/client"; 

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {}

    async signup(body: AuthSignupDTO) {
        const user = await this.usersService.createUser(body);
        return this.createToken(user);
    }

    async signin({ email, password }: AuthSigninDTO) {
        const user = await this.userRepository.findUserByEmail(email);

        if(!user) throw new UnauthorizedException('Email or password invalid');

        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword) throw new UnauthorizedException('Email or password invalid');
        
        return this.createToken(user);
    }

    createToken(user: users) {
        const token = this.jwtService.sign(
            {
                name: user.name,
                email: user.email
            },
            {
                expiresIn: '7 days',
                subject: String(user.id),
                issuer: 'admin',
                audience: 'users'
            }
        );
        return { token };
    }
}