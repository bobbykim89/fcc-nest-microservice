import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinateService: RiderCoordinatesService) {}

  @Get()
  async getRiderCoordinates() {
    return await this.coordinateService.getRiderCoordinates();
  }

  @Post()
  async saveRiderCoordinates(
    @Body() createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return this.coordinateService.saveRiderCoordinates(createCoordinatesDto);
  }
}
