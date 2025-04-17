import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServiceService {
  getHello(): string {
    return '[RIDER SERVICE]: Hello World!';
  }
}
