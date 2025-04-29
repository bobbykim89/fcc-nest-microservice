import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Hello I am from rider coordinates';
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return createCoordinatesDto;
  }
}
