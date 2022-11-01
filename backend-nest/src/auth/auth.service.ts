import { Injectable } from '@nestjs/common';

import { UnvalidatedUser } from './domain/UnvalidatedUser';
import { ValidatedUser } from './domain/ValidatedUser';
import { IAuthRepository } from './interfaces/auth.repository.interface';

@Injectable()
export class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async validateUser(email: string, pass: string): Promise<ValidatedUser | null> {
    const user = await this.authRepository.user({ email });
    if (!user) return null;

    const unvalidatedUser = new UnvalidatedUser(user);

    return unvalidatedUser.getValidatedUser(pass);
  }
}
