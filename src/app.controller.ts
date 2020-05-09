import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getIndex(): string {
    return this.appService.getHello();
  }
  @Get('receiver')
  @Render('receiver.hbs')
  receiver() {
    return { message: this.appService.getHello() };
  }
  @Get('sender')
  @Render('sender.hbs')
  sender() {
    return { message: this.appService.getHello() };
  }
}
