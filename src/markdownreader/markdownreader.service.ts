import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class MarkdownReaderService {
  parseMarkdownToHtml(line: string): string {
    let result = line
      .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
      .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*)\*/gim, '<i>$1</i>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    if (!result.match(/^<\/?(ul|ol|li|h|p|bl)/)) {
      result = result.replace(/^([^#].*$)/gim, '<p>$1</p>');
    }

    return result;
  }

  convertFileToStrings(fileName: string): string[] {
    try {
      return readFileSync(`resources/${fileName}`)
        .toString()
        .replace(/\r\n|\r/g, '\n')
        .split('\n')
        .filter((s: string) => s !== '')
        .map((s) => s.trim() + '\n');
    } catch (err) {
      throw Error(`Error reading file ${fileName}`);
    }
  }

  parseStringToHtml(input: string): string {
    console.log(input);
    const lines = input
      .toString()
      .replace(/\r\n/g, '\n')
      .split('\n')
      .filter((s: string) => s !== '');

    return lines.map((line) => this.parseMarkdownToHtml(line)).join(' ');
  }

  parseFileToHtml(fileName: string): string {
    const lines = this.convertFileToStrings(fileName);
    const htmlLines: string[] = [];
    for (const line of lines) {
      htmlLines.push(this.parseMarkdownToHtml(line));
    }

    return htmlLines.join(' ');
  }
}
