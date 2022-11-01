import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthInMemoryRepository } from './domain/auth.in-memory-repository';
import { IAuthRepository } from './interfaces/auth.repository.interface';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        AuthService,
        {
          provide: IAuthRepository,
          useClass: AuthInMemoryRepository,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('validate success', async () => {
    const user = await service.validateUser('test@example.com', 'password');
    expect(user?.id).toBe(1);
  });

  it('validate failure by incorrect email-address', async () => {
    const user = await service.validateUser('incorrect@example.com', 'password');
    expect(user).toBe(null);
  });

  it('validate failure by incorrect password', async () => {
    const user = await service.validateUser('test@example.com', 'incorrect password');
    expect(user).toBe(null);
  });
});
