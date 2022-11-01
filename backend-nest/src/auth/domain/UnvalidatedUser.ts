import { User } from '@prisma/client';
import { ValidatedUser } from './ValidatedUser';

export class UnvalidatedUser {
  public readonly id: number;
  public readonly name: string | null;
  public readonly email: string;
  private readonly password: string;

  constructor({ id, email, name, password }: User) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getValidatedUser(pass: string): ValidatedUser | null {
    return this.password === pass ? new ValidatedUser(this) : null;
  }
}
