import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinateService: RiderCoordinatesService) {}

  @Get(':id')
  async getRiderCoordinates(@Param('id') param: string) {
    console.log(param);
    return await this.coordinateService.getRiderCoordinates(param);
  }

  @Post()
  async saveRiderCoordinates(
    @Body() createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return this.coordinateService.saveRiderCoordinates(createCoordinatesDto);
  }
}
