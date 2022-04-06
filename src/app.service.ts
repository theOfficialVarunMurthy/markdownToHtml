import { Injectable } from '@nestjs/common';
import { MarkdownReaderService } from './markdownreader/markdownreader.service';

@Injectable()
export class AppService {
  constructor(private readonly markdownReaderService: MarkdownReaderService) {}

  getHello(): string {
    return `<h1>Markdown to HTML converter</h1>`;
  }

  getFileOutput(fileName: string): string {
    return this.markdownReaderService.parseFileToHtml(fileName);
  }

  getTextOutput(message: string): string {
    return this.markdownReaderService.parseStringToHtml(message);
  }
}
