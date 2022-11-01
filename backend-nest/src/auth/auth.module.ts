import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthRepository } from './domain/auth.repositoy';
import { AuthService } from './auth.service';
import { IAuthRepository } from './interfaces/auth.repository.interface';

@Module({
  imports: [PrismaModule],
  providers: [
    AuthService,
    {
      provide: IAuthRepository,
      useClass: AuthRepository,
    },
  ],
})
export class AuthModule {}
