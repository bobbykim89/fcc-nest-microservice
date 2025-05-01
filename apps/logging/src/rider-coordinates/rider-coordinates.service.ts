import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/roder-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinateModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string) {
    const coordinates = await this.riderCoordinateModel.find({
      rider: riderId,
    });
    const pattern = { cmd: 'get-rider' };
    const payload = { id: riderId };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line
    const rider = await firstValueFrom(this.client.send(pattern, payload));
    // eslint-disable-next-line
    return { coordinates, rider };
    // communicate with rider microservice by uisng the rider id

    // communication can be happened, TCP, RabbitMQ, Kafka, Nats
  }

  async saveRiderCoordinates(createCoordinateDto: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinateDto);
  }
}
