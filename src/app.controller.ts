import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface MessageDto {
  data: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/html/:fileName')
  getFileOutput(@Param() params): string {
    return this.appService.getFileOutput(params.fileName);
  }

  @Post('/html/text')
  @Header('content-type', 'text/html')
  getTextOutput(@Body() message: MessageDto): string {
    return this.appService.getTextOutput(message.data);
  }
}
