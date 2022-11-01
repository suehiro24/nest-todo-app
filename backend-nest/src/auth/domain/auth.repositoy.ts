import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { IAuthRepository } from '../interfaces/auth.repository.interface';

@Injectable()
export class AuthRepository extends IAuthRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
}
