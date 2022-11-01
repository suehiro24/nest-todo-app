import { UnvalidatedUser } from './UnvalidatedUser';

export class ValidatedUser {
  public readonly id: number;
  public readonly email: string;
  public readonly name: string | null;

  constructor({ id, email, name }: UnvalidatedUser) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
