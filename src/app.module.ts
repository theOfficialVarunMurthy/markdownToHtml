import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownReaderModule } from './markdownreader/markdownreader.module';

@Module({
  imports: [MarkdownReaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
