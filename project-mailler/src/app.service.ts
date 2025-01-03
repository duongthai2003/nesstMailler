import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async test() {
    this.mailService.sendUserConfirmation('manhquynh20082003@gmail.com');
    return 1324567;
  }
}
