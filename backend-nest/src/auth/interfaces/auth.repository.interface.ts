import { User } from '@prisma/client';

export abstract class IAuthRepository {
  abstract user({ id, email }: { id?: number; email?: string }): Promise<User | null>;
}
