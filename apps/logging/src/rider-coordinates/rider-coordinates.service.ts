import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/roder-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinateModel: Model<RiderCoordinate>,
  ) {}

  async getRiderCoordinates() {
    return await this.riderCoordinateModel.find();
    // communicate with rider microservice by uisng the rider id

    // communication can be happened, TCP, RabbitMQ, Kafka, Nats
  }

  async saveRiderCoordinates(createCoordinateDto: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinateDto);
  }
}
