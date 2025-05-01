import { Controller, Get } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  getRiderById(data: any) {
    return Promise.resolve({
      // eslint-disable-next-line
      _id: data.id,
      firstName: 'Manguito',
      lastName: 'Lovebird',
      email: 'manguito@gmail.com',
    });
  }
}
