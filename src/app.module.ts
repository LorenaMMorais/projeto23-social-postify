import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
