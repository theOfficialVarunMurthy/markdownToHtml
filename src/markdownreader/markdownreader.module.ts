import { Module } from '@nestjs/common';
import { MarkdownReaderService } from './markdownreader.service';

@Module({
  providers: [MarkdownReaderService],
  exports: [MarkdownReaderService],
})
export class MarkdownReaderModule {}
