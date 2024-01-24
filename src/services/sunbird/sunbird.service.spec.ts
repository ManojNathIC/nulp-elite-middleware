import { Test, TestingModule } from '@nestjs/testing';
import { SunbirdService } from './sunbird.service';

describe('SunbirdService', () => {
  let service: SunbirdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SunbirdService],
    }).compile();

    service = module.get<SunbirdService>(SunbirdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
