import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownReaderService } from './markdownreader.service';

describe('Service', () => {
  let markdownReaderService: MarkdownReaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkdownReaderService],
    }).compile();

    markdownReaderService = module.get<MarkdownReaderService>(
      MarkdownReaderService,
    );
  });

  it('should be defined', () => {
    expect(markdownReaderService).toBeDefined();
  });

  it('should error if unknown filename is provided', () => {
    try {
      markdownReaderService.parseFileToHtml('sampleUnknown.md');
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
