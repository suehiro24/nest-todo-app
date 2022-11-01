import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IAuthRepository } from '../interfaces/auth.repository.interface';

@Injectable()
export class AuthInMemoryRepository extends IAuthRepository {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'test@example.com',
      name: 'testname',
      password: 'password',
    },
    {
      id: 2,
      email: 'john@example.com',
      name: 'john',
      password: 'changeme',
    },
    {
      id: 3,
      email: 'guess@example.com',
      name: 'guess',
      password: 'changeme',
    },
  ];

  async user({ id, email }: { id?: number; email?: string }): Promise<User | null> {
    return this.users.find((user) => user.id === id || user.email === email) || null;
  }
}
